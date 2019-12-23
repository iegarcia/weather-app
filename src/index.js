// const element = document.createElement("h1");
// element.innerText = "Probando 1 2 3!";
// const container = document.getElementById("app");
// container.appendChild(element);

// Hecho con react seria
import React from "react"; // document.createElement
import ReactDom from "react-dom"; //container.appendChild

const elemento = <h1>Probando 1 2 3!</h1>;
// React.createElement("tag", {atributo}, "contenido"),

const jsx = ( //JSX es la forma de escribir código mas fácil de leer, compacto. Una sola variable puede llegar a contener todo un sector de la pagina
  <div>
    <h1>Hola</h1>
    <p>Que tal!</p>
  </div>
);

//Hecho de la forma tradicional
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola"), //Pueden contener variables, expresiones y si las mismas terminan en false no se muestran
  React.createElement("p", {}, "Que tal!")
);

const container = document.getElementById("app");

ReactDom.render(element, container); //Reemplaza appendChild y se le pasan como parámetro "que" renderizar y "donde"
