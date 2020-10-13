


function iterate(node) {
	if(node.childNodes.length === 0) {
		return;
	}
	var children = node.childNodes
	for(x in children) {
		if(children[x].nodeType === 1) {
			alert(children[x]);
			iterate(children[x]);
		}
	}

		

}


iterate(document.getRootNode().children[0]);




//html element is document.getRootNode().children[0]


