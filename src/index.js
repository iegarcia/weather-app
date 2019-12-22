// const element = document.createElement("h1");
// element.innerText = "Probando 1 2 3!";
//
// const container = document.getElementById("app");
//
// container.appendChild(element);

// Hecho con react seria
import React from "react"; // document.createElement
import ReactDom from "react-dom"; //container.appendChild

const element = <h1>Probando 1 2 3!</h1>;
const container = document.getElementById("app");

ReactDom.render(element, container); //Reemplaza appendChild y se le pasan como parámetro "que" renderizar y "donde"
