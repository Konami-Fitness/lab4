
	var flag = false;

function iterate(node, total) {
	var children = node.childNodes;
	// children contains the child nodes of the current node element

	if(total.level == 0) {
		// if on the first level -> print tagName, which is just the html tag
		total.str += '-'.repeat(total.level) + node.tagName + "\n";
		total.level++;
	}
	for(x in children) {
		// for each of the child nodes print dashes times the depth level and its tag name
		if(children[x].nodeType === 1) {
			// if the node is an element node

			if(children[x].tagName.toLowerCase() == "body") {
				flag = true;
			} else if(children[x].tagName.toLowerCase() == "script") {
				flag = false;
			}

			if(flag == true) {
				//alert(children[x].tagName);
				children[x].addEventListener("click", function(){alert(event.currentTarget.tagName)});
			}

			total.str += '-'.repeat(total.level) + children[x].tagName + '\n';
			total.level++;
			// increase level by one before the recursive call to add a layer of depth
			iterate(children[x], total);
			// decrease level by one after the recursive call to subtract a layer of depth
			total.level--;
		}
	}
	return total.str;
}

var object1 = {
	str: "", // return string
	level: 0 // level 0 starts with the html element
};

var t = iterate(document.getRootNode().children[0], object1);
//html element is document.getRootNode().children[0]
document.getElementById("info").innerHTML = t;
// change the html to return value of iterate function
