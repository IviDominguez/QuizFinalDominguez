

//--------------------------------FORM INFO CASAS----------------------------------------------

const nombre = document.getElementById("autoSizingInput");
const cambios = document.querySelectorAll(".cambios");
const ocultar = document.querySelector("formCasas");
let check = document.getElementsByClassName("check");

function recuperarUsuario(storage) {
  let userInStorage = JSON.parse(storage.getItem("usuario"));
  return userInStorage;
}

function guardado(usuario) {
  if (usuario) {
    mostrarPregunta(cambios, "disNon");
  }
}

function mostrarPregunta(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox of check) {
  checkbox.onclick = validarDatos;
}

//FUNCION PARA VALIDAR DATOS
function validarDatos(e) {
  btn = e.target;

  if (nombre.value == "") {
    alert("Debes ingresar tu nombre y elige una casa para enviar información");
  } else {
    casaSelect = btn.value; 

    let user = nombre.value; 
    let casa = casaSelect; 

    //MANDAR INFO AL LOCALSTORAGE
    const usuario = {
      user: user, //CREO OBJETO
      casa: casa,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario)); 
  }
  swal
    .fire({
      title: "Hola, " + nombre.value,
      text:
        "Esperamos que puedas probar tus conocimientos y sumar puntos para " +
        `${casaSelect}`,
      confirmButtonText: "Comencemos!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        mostrarPregunta(cambios, "disNon");
      }
    });
}

//---------------------------PRIMER PREGUNTA----------------------------------------------------------------
let check1 = document.getElementsByClassName("check1");
let answer1 = document.getElementById("gridRadios1"); // CAMBIE EL LLAMADO POR EL ID, para tomar la informacion del checkbox correcta.
let answer2 = document.getElementsByClassName("answer2");
let answer3 = document.getElementsByClassName("answer3");

function recuperarQ1(storage) {
  let q1InStorage = JSON.parse(storage.getItem("question1"));
  return q1InStorage;
}

for (const checkbox1 of check1) {
  checkbox1.onclick = validarCheck1;
}

function validarCheck1(e) {
  btn = e.target;
  answerSelect = btn.value;

  let correcto = answer1.checked; // CREO UNA VARIABLE PARA VER SI LA OPCION CORRECTA ESTA SELECCIONADA
  if (correcto) {
    //SI ES TRUE,ES CORRECTA, SINO INCORRECTO
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta2(cambios, "disNon2");
          let pregDos = document.getElementById("pregunta2");
          pregDos.style.display = "block";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta2(cambios, "disNon2");
          let pregDos = document.getElementById("pregunta2");
          pregDos.style.display = "block";
        }
      });
  }

  const valorAq1 = {
    answer1: 10,
    answer2: 0,
    answer3: 0,
  };
  localStorage.setItem("valorAq1", JSON.stringify(valorAq1));
}

//---------------------------SEGUNDA PREGUNTA---------------------------------------------------------------

let check2 = document.getElementsByClassName("check2");
let answer4 = document.getElementsByClassName("answer4");
let answer5 = document.getElementById("gridRadios5");
let answer6 = document.getElementsByClassName("answer6");

function recuperarQ2(storage) {
  let q2InStorage = JSON.parse(storage.getItem("question2"));
  return q2InStorage;
}

function guardado2(question2) {
  if (question2) {
    mostrarPregunta2(cambios, "disNon2");
  }
}

function mostrarPregunta2(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox2 of check2) {
  checkbox2.onclick = validarCheck2;
}

function validarCheck2(e) {
  btn = e.target;
  answerSelect = btn.value;

  let correcto = answer5.checked; // CREO UNA VARIABLE PARA VER SI LA OPCION CORRECTA ESTA SELECCIONADA
  if (correcto) {
    //SI ES TRUE,ES CORRECTA, SINO INCORRECTO
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta3(cambios, "disNon3");
          let pregTres = document.getElementById("pregunta3");
          pregTres.style.display = "block";
          let pregDos = document.getElementById("pregunta2");
          pregDos.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta3(cambios, "disNon3");
          let pregTres = document.getElementById("pregunta3");
          pregTres.style.display = "block";
          let pregDos = document.getElementById("pregunta2");
          pregDos.style.display = "none";
        }
      });
  }

  const valorAq2 = {
    answer4: 0,
    answer5: 10,
    answer6: 0,
  };
  localStorage.setItem("valorAq2", JSON.stringify(valorAq2));
}

//---------------------------TERCER PREGUNTA---------------------------------------------------------------

let check3 = document.getElementsByClassName("check3"); 
let answer7 = document.getElementById("gridRadios7");
let answer8 = document.getElementsByClassName("answer8");
let answer9 = document.getElementsByClassName("answer9");

function recuperarQ3(storage) {
  let q3InStorage = JSON.parse(storage.getItem("question3"));
  return q3InStorage;
}

function guardado3(question3) {
  if (question3) {
    mostrarPregunta3(cambios, "disNon3");
  }
}

function mostrarPregunta3(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox3 of check3) {
  checkbox3.onclick = validarCheck3;
}

function validarCheck3(e) {
  btn = e.target;
  answerSelect = btn.value;

  let correcto = answer7.checked; // CREO UNA VARIABLE PARA VER SI LA OPCION CORRECTA ESTA SELECCIONADA
  if (correcto) {
    //SI ES TRUE,ES CORRECTA, SINO INCORRECTO
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta4(cambios, "disNon4");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregTres = document.getElementById("pregunta3");
          pregTres.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta4(cambios, "disNon4");
          let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block";
          let pregTres = document.getElementById("pregunta3");
          pregTres.style.display = "none";
        }
      });
  }

  const valorAq3 = {
    answer7: 10,
    answer8: 0,
    answer9: 0,
  };
  localStorage.setItem("valorAq3", JSON.stringify(valorAq3));
}


//---------------------------CUARTA PREGUNTA---------------------------------------------------------------

let check4 = document.getElementsByClassName("check4"); 
let answer10 = document.getElementById("gridRadios10");
let answer11 = document.getElementsByClassName("answer11");
let answer12 = document.getElementsByClassName("answer12");

function recuperarQ4(storage) {
  let q4InStorage = JSON.parse(storage.getItem("question4"));
  return q4InStorage;
}

function guardado4(question4) {
  if (question4) {
    mostrarPregunta4(cambios, "disNon4");
  }
}

function mostrarPregunta4(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox4 of check4) {
  checkbox4.onclick = validarCheck4;
}

function validarCheck4(e) {
  btn = e.target;
  answerSelect = btn.value;

  let correcto = answer7.checked; //REVEER LA RESPUESTA CORRECTA
  if (correcto) {
    //SI ES TRUE,ES CORRECTA, SINO INCORRECTO
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta5(cambios, "disNon5");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta5(cambios, "disNon5");
          let pregCinco = document.getElementById("pregunta5");
          pregCinco.style.display = "block";
          let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "none";
        }
      });
  }

  const valorAq4 = {      //reveer respuesta correcta para guardarla
    answer7: 10,
    answer8: 0,
    answer9: 0,
  };
  localStorage.setItem("valorAq4", JSON.stringify(valorAq4));
}



//---------------------------QUINTA PREGUNTA---------------------------------------------------------------

let check5 = document.getElementsByClassName("check5"); 
let answer13 = document.getElementById("gridRadios13");
let answer14 = document.getElementsByClassName("answer14");
let answer15 = document.getElementsByClassName("answer15");

function recuperarQ5(storage) {
  let q5InStorage = JSON.parse(storage.getItem("question5"));
  return q5InStorage;
}

function guardado5(question5) {
  if (question5) {
    mostrarPregunta5(cambios, "disNon5");
  }
}

function mostrarPregunta5(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox5 of check5) {
  checkbox5.onclick = validarCheck5;
}

function validarCheck5(e) {
  btn = e.target;
  answerSelect = btn.value;

  let correcto = answer7.checked; //REVEER LA RESPUESTA CORRECTA
  if (correcto) {
    //SI ES TRUE,ES CORRECTA, SINO INCORRECTO
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta6(cambios, "disNon6");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregCinco = document.getElementById("pregunta5");
          pregCinco.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta6(cambios, "disNon6");
          let pregSeis = document.getElementById("pregunta6");
          pregSeis.style.display = "block";
          let pregCinco = document.getElementById("pregunta5");
          pregCinco.style.display = "none";
        }
      });
  }

  const valorAq5 = {      //reveer respuesta correcta para guardarla
    answer7: 10,
    answer8: 0,
    answer9: 0,
  };
  localStorage.setItem("valorAq5", JSON.stringify(valorAq5));
}



//---------------------------SEXTA PREGUNTA---------------------------------------------------------------

let check6 = document.getElementsByClassName("check6"); 
let answer16 = document.getElementById("gridRadios16");
let answer17 = document.getElementsByClassName("answer17");
let answer18 = document.getElementsByClassName("answer18");

function recuperarQ6(storage) {
  let q6InStorage = JSON.parse(storage.getItem("question6"));
  return q6InStorage;
}

function guardado6(question6) {
  if (question6) {
    mostrarPregunta6(cambios, "disNon6");
  }
}

function mostrarPregunta6(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox6 of check6) {
  checkbox6.onclick = validarCheck6;
}

function validarCheck6(e) {
  btn = e.target;
  answerSelect = btn.value;

  let correcto = answer7.checked; //REVEER LA RESPUESTA CORRECTA
  if (correcto) {
    //SI ES TRUE,ES CORRECTA, SINO INCORRECTO
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta7(cambios, "disNon7");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregSeis = document.getElementById("pregunta6");
          pregSeis.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta7(cambios, "disNon7");
          let pregSiete = document.getElementById("pregunta7");
          pregSiete.style.display = "block";
          let pregSeis = document.getElementById("pregunta6");
          pregSeis.style.display = "none";
        }
      });
  }

  const valorAq6 = {      //reveer respuesta correcta para guardarla
    answer7: 10,
    answer8: 0,
    answer9: 0,
  };
  localStorage.setItem("valorAq6", JSON.stringify(valorAq6));
}


//---------------------------SEPTIMA PREGUNTA---------------------------------------------------------------

let check7 = document.getElementsByClassName("check7"); 
let answer19 = document.getElementById("gridRadios19");
let answer20 = document.getElementsByClassName("answer20");
let answer21 = document.getElementsByClassName("answer21");

function recuperarQ7(storage) {
  let q7InStorage = JSON.parse(storage.getItem("question7"));
  return q7InStorage;
}

function guardado7(question7) {
  if (question7) {
    mostrarPregunta7(cambios, "disNon7");
  }
}

function mostrarPregunta7(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox7 of check7) {
  checkbox7.onclick = validarCheck7;
}

function validarCheck7(e) {
  btn = e.target;
  answerSelect = btn.value;

  let correcto = answer7.checked; //REVEER LA RESPUESTA CORRECTA
  if (correcto) {
    //SI ES TRUE,ES CORRECTA, SINO INCORRECTO
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta8(cambios, "disNon8");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregSiete = document.getElementById("pregunta7");
          pregSiete.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta8(cambios, "disNon8");
          let pregOcho = document.getElementById("pregunta8");
          pregOcho.style.display = "block";
          let pregSiete = document.getElementById("pregunta7");
          pregSiete.style.display = "none";
        }
      });
  }

  const valorAq7 = {      //reveer respuesta correcta para guardarla
    answer7: 10,
    answer8: 0,
    answer9: 0,
  };
  localStorage.setItem("valorAq7", JSON.stringify(valorAq7));
}












/*let userAnswer1 = validarCheck1;
let userAnswer2 = validarCheck2;
let userAnswer3 = validarCheck3;

let resultado = validarCheck1 + validarCheck2 + validarCheck3;
return resultado*/





//---------------------------CURIOSIDADES-----------------------------------------


const contenedor = document.querySelector("#contenedorTarjetas");

const btnCuriosidades = document.querySelector("#curiosidades");
const btnSalir = document.querySelector("#salir");

function crearHTML(array) {
  contenedor.innerHTML = "";
  array.forEach((info) => {
    const tarjeta = `
            <div class="col" id="curiosidad" style="block">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Sabías que...?</h5>
                        <p class="card-text">${info.contenido}</p>
                    </div>
                </div>
            </div>`;
    contenedor.innerHTML += tarjeta;
  });
}

async function traerInfo() {
  const respuesta = await fetch(
    "https://fedeperin-harry-potter-api.herokuapp.com/info"
  );
  const info = await respuesta.json();
  crearHTML(info);
}

/*btnCuriosidades.addEventListener("click", () => {//MOSTAR CURIOSIDADES
  traerInfo();//AGREGO LA PROPIEDAD ESTILO AL HTML(BLOCK = MOSTRAR) y (NONE= OCULTAR)
  document.getElementById("salir").style.display = "block"; //MOSTAR BOTON SALIR
  document.getElementById("contenedorTarjetas").style.display = "block";//MOSTAR INFO
  document.getElementById("curiosidades").style.display = "none";//OCULTO BOTON CURIOSIDADAES
});

btnSalir.addEventListener("click", () => {//OCULTAR CURIOSIDADES
  document.getElementById("curiosidades").style.display = "block";//MUESTO BOTON CURIOSIDADAES
  document.getElementById("salir").style.display = "none";//OCULTO BOTON SALIR
  document.getElementById("contenedorTarjetas").style.display = "none";//OCULTO INFO
});*/