var container = document.getElementById("container");

var div;

div = "<div class='world-div'>1. Hello World</div>";

container.innerHTML += div;

var container = document.querySelector(".container");

div = "<span class='world-span'>2. Hello World</span>";

container.innerHTML += div;

var container = document.querySelector("#container");

div = "<h1 class='world-h1'>3. Hello World</h1>";

container.innerHTML += div;

var container = document.getElementsByClassName("container")[0];

div = "<p class='world-p'>4. Hello World</p>";

container.innerHTML += div;

var container = document.getElementsByName("container")[0];

div = "<strong class='world-strong'>5. Hello World</strong> <p>";

container.innerHTML += div;

var container = document.querySelector("div#container");

div = "<em class='world-em'>6. Hello World</em>";

container.innerHTML += div;

var container = document.querySelectorAll(".container")[0];

div = "<blockquote class='world-blockquote'>7. Hello World</blockquote>";

container.innerHTML += div;

var container = document.querySelectorAll("#container")[0];

div = "<pre class='world-pre'>8. Hello World</pre>";

container.innerHTML += div;

console.log("9. Hello World");

alert("10. Hello World");
