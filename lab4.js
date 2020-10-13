

function iterate(node, total) {
	if(node.childNodes.length === 0) {
		return;
	}
	var children = node.childNodes;
	for(x in children) {
		if(children[x].nodeType === 1) {
			//alert(children[x]);
			total.str += children[x];

			iterate(children[x], total);

		}
	}
	return total.str;


}


var object1 = {
	str: ""
};

var t = iterate(document.getRootNode().children[0], object1);

alert(t);

//html element is document.getRootNode().children[0]
