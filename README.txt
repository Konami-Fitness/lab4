1A)
My code starts off at the root node and recursively finds all
the nodes under it. As it recursively moves through the tree 
structure of the document, it gathers the tag names and stores
it all into a string. At the end of the program, the contents
of #info are replaced with the resulting tree. As a web developer,
I'd want to use the DOM in my development because it would enable
me to have more control over elements I'd want to change and be able
to modify the elements and their contents. I would be able to capture 
or respond to user/browser actions as well which would be useful
in web development.

1B)
My method in Part1A, automatically recursed through every node without having
to change anything in the HTML. However, in 1B, I changed the HTML by changing the
element class names to be the name of the parent tag. This way, I could get the next
set of elements to recurse through by simply calling a getElementsByClassName with
the parent tag name as the class. The same return value exists for 1a and 1b except
for 1b I returned the result in an array and moved it to the bottom of the page
rather than having it at the top. Essentially its the same function but we just used
getElementsbyClassName to get our element lists at each recursive level. 

2) For part 2, we took the code from part 1, and bool flag so that we could make
sure that alert boxes would only display if the element tags were in the body.
If the clicked element was in the body tag, then an event listener would trigger
an alert box with the currentTarget elements tag name. The currentTarget was
essential to preserve event bubbling since the alerts needed to start with the
innermost element and change as different event listeners triggered the event. 

3)Shane's Part 3 and Creativity:
To insert the quote at the end, I created an array of all the quote elements,
took the last item in the array and cloned it, then edited the innerHTML with
the quote. Then I used append child to add it on the to end of the document.
For the onmouseover and onmouseout listeners, I put all the div elements into
an array. Then I used a for loop to iterate through them. For each one, the loop
sets the onmouseover attribute equal to a function. The function uses the this
keyword to edit the CSS for that div, changing the background color and margin.
For onomuseout, I followed the same process, just reversing the the background
color back to white and the margin back to 0.

Michael Creativity:
I expressed my creativity in the way I got my solutions. For 1A, I had remembered
from Python there was a way to multiply a char N times simply by doing N*'X' , N
being an int and X being a char and it would print the X, N times. This gave me the
inspiration to find a way to do this with javascript. I created a way to get the
current level by incrementing or decrementing it depending on what point in the
recursion I was in and passed this as an argument into the repeat() function from 
where I was easily able to print the dashes into the accurate amount for each level.
I also found a way to recurse using the getElementsByClassName by setting elements'
classes to be named after their parent nodes tag name, and so I could easily just 
get the next set of children by using this.

Teddy creativity
For part 1a, I created an object to contain the level of depth within the html
tags and a string to contain the the expected output in the tree format. I
decided to create an object to reduce the amount of code that I needed and to
help my other teammates read the code. For part 1b, instead of using a string,
I added the tag tree to an array so that I could create a new paragraph tag at
end of the body, set its attribute to "part1b", and added br tags between each
html tag to preserve the proper output. In part 2, I created a bool flag to make
sure that a user would only receive alerts if the clicked object, bubbling up
was in the body.
