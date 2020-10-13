
function iterate(node, total) {

	var children = node.childNodes;
	// children contains the child nodes of the current node element

	if(total.level == 0) {
		// if on the first level -> print tagName, which is just the html tag
		total.str.push('-'.repeat(total.level) + node.tagName + "\n");
		total.level++;
	}


	var elements = document.getElementsByClassName(node.tagName.toLowerCase());


	if(node.tagName.toLowerCase() == "div") {

	for(x in children) {
		// for each of the child nodes print dashes times the depth level and its tag name
		if(children[x].nodeType === 1) {
			// if the node is an element node
			total.str.push('-'.repeat(total.level) + children[x].tagName + "\n");
			total.level++;
			// increase level by one before the recursive call to add a layer of depth
			iterate(children[x], total);
			// decrease level by one after the recursive call to subtract a layer of depth
			total.level--;


		}
	}



	} else {

	for(y in elements) {

			if(elements[y].nodeType === 1) {
			// if the node is an element node
				total.str.push('-'.repeat(total.level) + elements[y].tagName + "\n");
				total.level++;
			// increase level by one before the recursive call to add a layer of depth
				iterate(elements[y], total);
			// decrease level by one after the recursive call to subtract a layer of depth
				total.level--;


			}

		}



	}



	return total.str;
}
var object1 = {
	str: [], // return array
	level: 0 // level 0 starts with the html element
};

var result = iterate(document.getRootNode().children[0], object1);

var para = document.createElement("P");
para.setAttribute("id", "part1b");
/*
para.appendChild(document.createTextNode(result[0]));
para.appendChild(temp)
para.appendChild(document.createTextNode(result[1]));
document.body.appendChild(para);
*/
for(g in result) {

var txt = document.createTextNode(result[g]);
para.appendChild(txt);
var temp = document.createElement("br");

para.appendChild(temp);
}

document.body.appendChild(para);


//html element is document.getRootNode().children[0]

