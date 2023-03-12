let pantalla = document.querySelector(".pantalla");
let valores = "";
let second = "";
let expresion = "";

const operar = (valores, expresion, second) => {
  let val = parseFloat(valores);
  let cos = parseFloat(second);
  if (expresion === "+") valores = val + cos;
  if (expresion === "-") valores = val - cos;
  if (expresion === "x") valores = val * cos;
  if (expresion === "/") valores = val / cos;
  return valores;
};
const operacion = (e) => {

  if (e.target.id == "igual") {
    if (second !== "") {
      valores = operar(valores, expresion, second);
      pantalla.textContent = valores;
      expresion = "";
      second = "";
    } else {
      alert("por favor inserta una operacion valida");
    }
    return false;
  }
  let target = e.target.textContent;
  if (target === "C") {
    pantalla.textContent = "";
    second = "";
    valores = 0;
    return false;
  }
  if (target === ".") {
    if (valores !== "") {
      valores += target;
      pantalla.textContent += target;
    }
    if (second !== "") {
      second += target;
      pantalla.textContent += target;
    }
    return false;
  }
  if (isNaN(target)) {
    if (valores !== "") {
      if (second !== "") {
        valores = operar(valores, expresion, second);
        pantalla.textContent =  valores;
        expresion = "";
        second = "";
      }
    } else {
      return false;
    }
    expresion = target;
    valores = pantalla.textContent;
  } else {
    if (expresion === "") {
      if(typeof(valores) === "number"){
        console.log(typeof(valores));
        valores = "";
        pantalla.textContent = "";
      }
        valores += target;
      
    } else {
      second += target;
    }
  }
  pantalla.textContent += target;
};

let boton = [];
boton = document.getElementsByTagName("button");
for (let i = 0; i < boton.length; i++) {
  boton[i].addEventListener("click", operacion);
}
let igual = document.getElementById("igual");
igual.addEventListener("click", operacion);
