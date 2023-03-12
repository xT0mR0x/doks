// animation.js
// JavaScript code to set the text
var text = "My name is Tom Rosenzweig, I am an ambitious and aspiring security researcher and analyst. My journey into the field of Cyber-Security and IT began in 2021, and since then, I have been dedicated to developing my skills and expertise in this dynamic and ever-evolving industry. \n\n The purpose of creating this website is to share my documentation and projects, and to create a centralized toolkit by compiling and organizing all the necessary resources in one place, this website serves as a valuable reference point for me to quickly access the tools, techniques, and knowledge I need for my work in the industry. It is my hope that it can also serve as a useful resource for others in the field.\n\n Thank you for visiting! If you have any questions or comments, please don't hesitate to contact me via Linkedin and GitHub on the links below!";

// Set the text content of the container element
var container = document.getElementById("text-container");
container.innerHTML = "";

// Loop through each character and add it to the container with a delay
var delay = 40; // milliseconds
for (var i = 0; i < text.length; i++) {
  (function (i) {
    setTimeout(function () {
      container.innerHTML += text.charAt(i);
    }, i * delay);
  })(i);
}
