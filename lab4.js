
function iterate(node, total, lvl) {
	var children = node.childNodes;

	if(level.num == 0) {
		total.str += '-'.repeat(level.num) + node.tagName + "\n";
		level.num++;
	}

	for(x in children) {
		if(children[x].nodeType === 1) {
			total.str += '-'.repeat(level.num) + children[x].tagName + "\n";
			level.num++;

			iterate(children[x], total, level);
			level.num--;


		}
	}
	return total.str;


}

var level = {
	num: 0
};
var stringObj = {
	str: ""
};

var t = iterate(document.getRootNode().children[0], stringObj, level);


document.getElementById("info").innerHTML = t;


//html element is document.getRootNode().children[0]