const root = document.createElement("html");
root.lang = "es";
const head = document.createElement("head");
const title = document.createElement("title");
const titleText = document.createTextNode("HTML con JS");
title.appendChild(titleText);
head.appendChild(title);
root.appendChild(head);
console.log(root);
const body = document.createElement("body");
root.appendChild(body);
console.log(root);
const h1 = document.createElement("h1");
const h1Text = document.createTextNode("Soy un h1 en una prueba tree");


