var miJSON = [
  {
    "codigo": "001",
    "nombre": "Calculo"
  },{
    "codigo":"002",
    "nombre": "POO1"
  },{
    "codigo":"003",
    "nombre":"Fisica"
  }
]

function leerJSON(json){
  var out = "";

  for (var i = 0; i < json.length; i++) {
    alert("Codigo"+json[i].codigo+" - "+"Materia: "+json[i].nombre);

  }
}

leerJSON(miJSON);
