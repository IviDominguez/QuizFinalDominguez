

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
    alert("Debes ingresar tu nombre y elegir una casa para enviar información!");
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
      confirmButtonColor: "#D49D73",
    })
    .then((result) => {
      if (result.isConfirmed) {
        mostrarPregunta(cambios, "disNon");
      }
    });
}

//---------------------------PRIMER PREGUNTA----------------------------------------------------------------
let check1 = document.getElementsByClassName("check1");
let answer1 = document.getElementById("gridRadios1");
let answer2 = document.getElementsByClassName("answer2");
let answer3 = document.getElementsByClassName("answer3");



function recuperarQ1(storage) {
  let q1InStorage = JSON.parse(storage.getItem("validarCheck1"));
  return q1InStorage;
}



for (const checkbox1 of check1) {
  checkbox1.onclick = validarCheck1;
}


function validarCheck1(e) {
  btn = e.target;
  answerSelect1 = btn.value;

  let correcto = answer1.checked;
  if (correcto) {
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
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
        confirmButtonColor: "#D49D73",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta2(cambios, "disNon2");
          let pregDos = document.getElementById("pregunta2");
          pregDos.style.display = "block";
        }
      });
  }


  localStorage.setItem("answerSelect1", JSON.stringify(answerSelect1));

  const valorAq1 = {
    answer1: 10,
    answer2: 0,
    answer3: 0,
  };
  localStorage.setItem("valorAq1", JSON.stringify(valorAq1));
  
  
}

/*function recuperarEleccion(storage) {
  let eleccion1InStorage = JSON.parse(storage.getItem("validarCheck1"));
  return eleccion1InStorage;*/


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
  answerSelect2 = btn.value;

  let correcto = answer5.checked;
  if (correcto) {
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
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
        confirmButtonColor: "#D49D73",
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

  localStorage.setItem("answerSelect2", JSON.stringify(answerSelect2));

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
  answerSelect3 = btn.value;

  let correcto = answer7.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
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
        confirmButtonColor: "#D49D73",
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

  localStorage.setItem("answerSelect3", JSON.stringify(answerSelect3));

  const valorAq3 = {
    answer7: 10,
    answer8: 0,
    answer9: 0,
  };
  localStorage.setItem("valorAq3", JSON.stringify(valorAq3));
}


//---------------------------CUARTA PREGUNTA---------------------------------------------------------------

let check4 = document.getElementsByClassName("check4"); 
let answer10 = document.getElementsByClassName("answer10");
let answer11 = document.getElementsByClassName("answer11");
let answer12 = document.getElementById("gridRadios12");

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
  answerSelect4 = btn.value;

  let correcto = answer12.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
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
        confirmButtonColor: "#D49D73",
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

  localStorage.setItem("answerSelect4", JSON.stringify(answerSelect4));


  const valorAq4 = {
    answer10: 0,
    answer11: 0,
    answer12: 10,
  };
  localStorage.setItem("valorAq4", JSON.stringify(valorAq4));
}



//---------------------------QUINTA PREGUNTA---------------------------------------------------------------

let check5 = document.getElementsByClassName("check5"); 
let answer13 = document.getElementsByClassName("answer13");
let answer14 = document.getElementById("gridRadios14");
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
  answerSelect5 = btn.value;

  let correcto = answer14.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
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
        confirmButtonColor: "#D49D73",
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

  localStorage.setItem("answerSelect5", JSON.stringify(answerSelect5));


  const valorAq5 = {
    answer13: 0,
    answer14: 10,
    answer15: 0,
  };
  localStorage.setItem("valorAq5", JSON.stringify(valorAq5));
}



//---------------------------SEXTA PREGUNTA---------------------------------------------------------------

let check6 = document.getElementsByClassName("check6"); 
let answer16 = document.getElementsByClassName("answer16");
let answer17 = document.getElementsByClassName("answer17");
let answer18 = document.getElementById("gridRadios18");

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
  answerSelect6 = btn.value;

  let correcto = answer18.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
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
        confirmButtonColor: "#D49D73",
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

  localStorage.setItem("answerSelect6", JSON.stringify(answerSelect6));


  const valorAq6 = {
    answer16: 0,
    answer17: 0,
    answer18: 10,
  };
  localStorage.setItem("valorAq6", JSON.stringify(valorAq6));
}


//---------------------------SEPTIMA PREGUNTA---------------------------------------------------------------

let check7 = document.getElementsByClassName("check7"); 
let answer19 = document.getElementsByClassName("answer19");
let answer20 = document.getElementById("gridRadios20");
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
  answerSelect7 = btn.value;

  let correcto = answer20.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
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
        confirmButtonColor: "#D49D73",
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

  localStorage.setItem("answerSelect7", JSON.stringify(answerSelect7));


  const valorAq7 = {
    answer19: 0,
    answer20: 10,
    answer21: 0,
  };
  localStorage.setItem("valorAq7", JSON.stringify(valorAq7));
}



//---------------------------OCTAVA PREGUNTA---------------------------------------------------------------

let check8 = document.getElementsByClassName("check8"); 
let answer22 = document.getElementById("gridRadios22");
let answer23 = document.getElementsByClassName("answer23");
let answer24 = document.getElementsByClassName("answer24");

function recuperarQ8(storage) {
  let q8InStorage = JSON.parse(storage.getItem("question8"));
  return q8InStorage;
}

function guardado8(question8) {
  if (question8) {
    mostrarPregunta8(cambios, "disNon8");
  }
}

function mostrarPregunta8(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox8 of check8) {
  checkbox8.onclick = validarCheck8;
}

function validarCheck8(e) {
  btn = e.target;
  answerSelect8 = btn.value;

  let correcto = answer22.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta9(cambios, "disNon9");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregOcho = document.getElementById("pregunta8");
          pregOcho.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta9(cambios, "disNon9");
          let pregNueve = document.getElementById("pregunta9");
          pregNueve.style.display = "block";
          let pregOcho = document.getElementById("pregunta8");
          pregOcho.style.display = "none";
        }
      });
  }


  localStorage.setItem("answerSelect8", JSON.stringify(answerSelect8));
  
  const valorAq8 = {
    answer22: 10,
    answer23: 0,
    answer24: 0,
  };
  localStorage.setItem("valorAq8", JSON.stringify(valorAq8));
}


//---------------------------NOVENA PREGUNTA---------------------------------------------------------------

let check9 = document.getElementsByClassName("check9"); 
let answer25 = document.getElementsByClassName("answer25");
let answer26 = document.getElementsByClassName("answer26");
let answer27 = document.getElementById("gridRadios27");

function recuperarQ9(storage) {
  let q9InStorage = JSON.parse(storage.getItem("question9"));
  return q9InStorage;
}

function guardado9(question9) {
  if (question9) {
    mostrarPregunta9(cambios, "disNon9");
  }
}

function mostrarPregunta9(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox9 of check9) {
  checkbox9.onclick = validarCheck9;
}

function validarCheck9(e) {
  btn = e.target;
  answerSelect9 = btn.value;

  let correcto = answer27.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta10(cambios, "disNon10");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregNueve = document.getElementById("pregunta9");
          pregNueve.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta10(cambios, "disNon10");
          let pregDiez = document.getElementById("pregunta10");
          pregDiez.style.display = "block";
          let pregNueve = document.getElementById("pregunta9");
          pregNueve.style.display = "none";
        }
      });
  }

  localStorage.setItem("answerSelect9", JSON.stringify(answerSelect9));

  const valorAq9 = {
    answer25: 0,
    answer26: 0,
    answer27: 10,
  };
  localStorage.setItem("valorAq9", JSON.stringify(valorAq9));
}


//---------------------------DECIMA PREGUNTA---------------------------------------------------------------

let check10 = document.getElementsByClassName("check10"); 
let answer28 = document.getElementsByClassName("answer28");
let answer29 = document.getElementById("gridRadios29");
let answer30 = document.getElementsByClassName("answer30");

function recuperarQ10(storage) {
  let q10InStorage = JSON.parse(storage.getItem("question10"));
  return q10InStorage;
}

function guardado10(question10) {
  if (question10) {
    mostrarPregunta10(cambios, "disNon10");
  }
}

function mostrarPregunta10(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

for (const checkbox10 of check10) {
  checkbox10.onclick = validarCheck10;
}

function validarCheck10(e) {
  btn = e.target;
  answerSelect10 = btn.value;

  let correcto = answer29.checked;
  if (correcto) {
    console.log("si");
    swal
      .fire({
        title: "Correcto!",
        text: "10 puntos para " + casaSelect,
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
      })
      .then((result) => {
        if (result.isConfirmed) {
          mostrarPregunta11(cambios, "disNon11");
          /* let pregCuatro = document.getElementById("pregunta4");
          pregCuatro.style.display = "block"; */
          let pregDiez = document.getElementById("pregunta10");
          pregDiez.style.display = "none";
        }
      });
  } else {
    swal
      .fire({
        title: "Incorrecto!",
        confirmButtonText: "Siguente",
        confirmButtonColor: "#D49D73",
      })
      .then((result) => {
        if (result.isConfirmed) {
          sumar(cambios, "disNonFinal");
          let resultadoFinal = document.getElementById("resultado");
          resultadoFinal.style.display = "block";
          let pregDiez = document.getElementById("pregunta10");
          pregDiez.style.display = "none";
        }
      });
  }

  localStorage.setItem("answerSelect10", JSON.stringify(answerSelect10));

  const valorAq10 = {
    answer28: 0,
    answer29: 10,
    answer30: 0,
  };
  localStorage.setItem("valorAq10", JSON.stringify(valorAq10));
}



//---------------------------RESULTADO FINAL---------------------------------------------------------------




const eleccion = [answerSelect1,answerSelect2,answerSelect3,
  answerSelect4,answerSelect5,answerSelect6,answerSelect7,
  answerSelect8,answerSelect9,answerSelect10];

let suma;

function sumar(){
  let suma = answerSelect1 + answerSelect2 + answerSelect3 + 
  answerSelect4 + answerSelect5 + answerSelect6 + 
  answerSelect7 + answerSelect8 + answerSelect9 + answerSelect10;
  
  console.log(suma)
}





/**function recuperarResultado(storage) {
  let resultadoInStorage = JSON.parse(storage.getItem());
  return resultadoInStorage;
}



let userAnswer1 = validarCheck1;
let userAnswer2 = validarCheck2;
let userAnswer3 = validarCheck3;
let userAnswer4 = validarCheck4;
let userAnswer5 = validarCheck5;
let userAnswer6 = validarCheck6;
let userAnswer7 = validarCheck7;
let userAnswer8 = validarCheck8;
let userAnswer9 = validarCheck9;
let userAnswer10 = validarCheck10;





validarCheck1 + validarCheck2 + validarCheck3 + 
validarCheck4 + validarCheck5 + validarCheck6 + 
validarCheck7 + validarCheck8 + validarCheck9 + validarCheck10;*/







//---------------------------CURIOSIDADES-----------------------------------------


/*const contenedor = document.querySelector("#contenedorTarjetas");

/*const btnCuriosidades = document.querySelector("#curiosidades");
const btnSalir = document.querySelector("#salir");*/

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
}*/

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