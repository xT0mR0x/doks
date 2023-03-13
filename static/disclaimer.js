
// JavaScript code to set the text
var text = "The information provided is a compilation of various resources, including but not limited to online articles, and the assistance of ChatGPT, an AI language model trained by OpenAI. I take great care to ensure that I do not use any copyrighted material without the appropriate permissions and I always use open resources whenever possible. \n\n While every effort has been made to ensure the accuracy and completeness of the information, I make no guarantee or warranty, express or implied, as to the accuracy, reliability, or completeness of this information. Any reliance you place on such information is therefore strictly at your own risk.";
// Set the text content of the container element
var container = document.getElementById("text-container1");
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