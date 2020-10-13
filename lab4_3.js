// cloneNode() and appendChild()
var itm = document.getElementsByClassName("quote"); // array of all "quote" class items
var last = itm[itm.length-1] // take the last item from the array
var cln = last.cloneNode(true); // clone the last one
cln.innerHTML = "'If you've got a problem with Canada Gooses, you've got a problem with me. And I suggest you let that one marinate.' - Wayne from Letterkenny"; // replace the text with the quote
document.getElementById("body").appendChild(cln); // append the quote onto the end of the body




// onmouseover and onmouseout
// creates an array of all of the divs
var element = document.getElementsByTagName("div");

var i;
//iterates through the divs, updates each one with the 
// new onmouseover and onmouseout attributes
for (i = 0; i < element.length; i++) {
	element[i].onmouseover = function() {
			this.style.backgroundColor = "#27F89C";
			this.style.transition = "0.5s"
			this.style.marginLeft = "10px";
		};
	element[i].onmouseout = function() {
			this.style.backgroundColor = "darkgrey";
			this.style.marginLeft = "0px";
		};
}