function iterate(node, string_lvl) {
	var children = node.childNodes;
	// children contains the child nodes of the current node element
	if(string_lvl.level == 0) {
		// if on the first level -> print tagName, which is just the html tag
		string_lvl.str_arr.push('-'.repeat(string_lvl.level) + node.tagName + "\n");
		string_lvl.level++;
	}
	var elements = document.getElementsByClassName(node.tagName.toLowerCase());
	// elements have a class name of the parent element tag

	if(node.tagName.toLowerCase() == "div") {
		for(x in children) {
			// for each of the child nodes in the div tags, print the tag name and depth recursively
			if(children[x].nodeType === 1) {
				// if the node is an element node
				string_lvl.str_arr.push('-'.repeat(string_lvl.level) + children[x].tagName + "\n");
				string_lvl.level++;
				// increase level by one before the recursive call to add a layer of depth
				iterate(children[x], string_lvl);
				string_lvl.level--;
				// decrease level by one after the recursive call to subtract a layer of depth
			}
		}
	} else {
		for(y in elements) {
			// prints elements based off the class name
			if(elements[y].nodeType === 1) {
				// if the node is an element node
				string_lvl.str_arr.push('-'.repeat(string_lvl.level) + elements[y].tagName + "\n");
				string_lvl.level++;
				// increase level by one before the recursive call to add a layer of depth
				iterate(elements[y], string_lvl);
				string_lvl.level--;
				// decrease level by one after the recursive call to subtract a layer of depth
			}
		}
	}
	return string_lvl.str_arr;
}

var string_lvl = {
	str_arr: [], // return array
	level: 0 // level 0 starts with the html element
};

var tag_lst = iterate(document.getRootNode().children[0], object1);
// tag_lst contains an array of the tags in the document

var para = document.createElement("P");
para.setAttribute("id", "part1b");
// create a new p element and set its ID to part1b

for(g in tag_lst) {
	// for each tag, add the the tag to text node followed by br tag and add both
	// to a paragraph tag to presevere printing
	var txt = document.createTextNode(tag_lst[g]);
	para.appendChild(txt);
	var temp = document.createElement("br");
	para.appendChild(temp);
}
document.body.appendChild(para);
// add the paragraph tag to the end of the body tag
