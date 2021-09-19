document.getElementsByTagName("h1")[0].style.color = "#ff0000";
document.body.addEventListener('click', function () {
    var myParent = document.getElementsByTagName("h1")[0]; 
    var myImage = document.createElement("img");
    myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "160px";
});
 // https://daringfireball.net/projects/markdown/



/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings
*/

/*

Code	Character
\\	    \ (backslash)
\"	    " (double quote)
\'	    ' (single quote)
\n	    newline
\t	    tab

*/

var umbrella = {
  color: "pink", 
  isOpen: false,
  open: function(){
      if(umbrella.isOpen == true){
          return "The Umbrella is already opened!";
      } else{
          umbrella.isOpen = true;
          return "Julia opens the umbrella";
      }
  }
}
console.log(umbrella.open());
console.log("Hello");



// https://www.w3.org/standards/techs/dom#w3c_all

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById