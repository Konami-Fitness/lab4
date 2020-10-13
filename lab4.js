


function iterate(node) {
	for(x in node.children) {
		alert(node.children[x]);
	}

		

}


iterate(document.getRootNode().children[0].children[0]);




//html element is document.getRootNode().children[0]


