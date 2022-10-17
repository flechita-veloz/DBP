function setMultipleAttributes(elmnt, attributesToSet) {
    for(let i in attributesToSet) {
        elmnt.setAttribute(i, attributesToSet[i]);
    }
}

function deleteLanguage(button) {
    div= button.parentElement;
    li= div.parentElement;
    li.remove();
    cont_i= cont_i-1;
}


//-----Validacion de campos----------------------------------------
const expresiones = {
    nombre: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    perfil: /^[a-zA-Z0-9À-ÿ\s_\-\.\,\;\:]{50,5000}$/,
    ocupacion: /^[a-zA-Z0-9À-ÿ\s\_\-\.]+$/,
    nacimiento: /^(\d{4})(-)(0[1-9]|1[0-2])(-)([0-2][0-9]|3[0-1])$/
}
const campos= {
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    perfil: false,
    ocupacion: false,
    nacimiento: false
}

document.addEventListener('DOMContentLoaded', () => {
  const formulario= document.getElementById('form');
  const inputs= document.querySelectorAll('#form input');
  const text_tarea= document.querySelectorAll('#profile');

  const validarFormulario = (e) =>{
    switch(e.target.name){
      case "name":
          validarCampo(expresiones.nombre, e.target, 'name', 'nombre');
      break;
      case "last-name":
          validarCampo(expresiones.apellido, e.target, 'last-name', 'apellido');
      break;
      case "ocupation":
          validarCampo(expresiones.ocupacion, e.target, 'ocupation', 'ocupacion');
      break;
      case "phone":
          validarCampo(expresiones.telefono, e.target, 'phone', 'telefono');
      break;
      case "email":
          validarCampo(expresiones.correo, e.target, 'email', 'correo');
      break;
      case "date-birth":
          validarCampo(expresiones.nacimiento, e.target, 'date-birth', 'nacimiento');
      break;
      case "profile":
          validarCampo(expresiones.perfil, e.target, 'profile', 'perfil');
      break;
    }

    if(campos.nombre && campos.apellido && campos.correo
     && campos.telefono && campos.ocupacion && campos.nacimiento){
      document.querySelector('#submit').disabled= false;
    }
    else{
      document.querySelector('#submit').disabled= true;
    }
  }  

  const validarCampo = (expresion, input, campo, item) =>{
    if(expresion.test(input.value)){ //e.target= input
      document.getElementById(`group_${campo}`).classList.remove('form_group_wrong');
      document.getElementById(`group_${campo}`).classList.add('form_group_right');
      document.querySelector(`#group_${campo} i`).classList.add('fa-circle-check');
      document.querySelector(`#group_${campo} i`).classList.remove('fa-circle-xmark');
      document.querySelector(`#group_${campo} .form_input-wrong`).classList.remove('form_input-wrong-activate');
      campos[item]= true;
    }
    else{
      document.getElementById(`group_${campo}`).classList.add('form_group_wrong');
      document.getElementById(`group_${campo}`).classList.remove('form_group_right');
      document.querySelector(`#group_${campo} i`).classList.add('fa-circle-xmark');
      document.querySelector(`#group_${campo} i`).classList.remove('fa-circle-check');
      document.querySelector(`#group_${campo} .form_input-wrong`).classList.add('form_input-wrong-activate');
      campos[item]= false;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);//cuando se levanta la tecla
    input.addEventListener('blur', validarFormulario);//cuando se da click afuera
  });
  text_tarea.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);//cuando se levanta la tecla
    input.addEventListener('blur', validarFormulario);//cuando se da click afuera
  });

});


//--Idiomas----------------------------------------------------
var cont_i= 0;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn-add-language').onclick = () => {
    cont_i= cont_i+1;
    const div_label_idioma= document.createElement("div");
    div_label_idioma.setAttribute("class", "form_group_label");
      const label_idioma= document.createElement("label");
      setMultipleAttributes(label_idioma, {"for": `name-language${cont_i}`, 
      "class":"form_label"});
      label_idioma.textContent= "Idioma:";
      const btn_delete_language= document.createElement("button");
      setMultipleAttributes(btn_delete_language, {"type": "button", 
      "id": "btn-delete-language"});
      btn_delete_language.textContent= "eliminar idioma";
    div_label_idioma.append(label_idioma, btn_delete_language); 
    const div_input_idioma = document.createElement("div");
    div_input_idioma.setAttribute("class", "form_group_input");
      const input_idioma= document.createElement("INPUT");
      setMultipleAttributes(input_idioma, {"class": "form_input", "type": "text",
      "name": "name-language", "id": `name-language${cont_i}`, "placeholder": "Ingles"});
      const i_idioma= document.createElement("i");
      i_idioma.setAttribute("class", "form_validation-state fa-solid fa-circle-xmark");
    div_input_idioma.append(input_idioma, i_idioma);
    
    const p_advertencia= document.createElement("p");
    p_advertencia.setAttribute("class", "form_input-wrong");
    p_advertencia.textContent= "El idioma solo puede contener letras mayúsculas y minúsculas.";

      const label_nivel= document.createElement("label");
      label_nivel.setAttribute("class", "form_label");
      label_nivel.textContent= "Nivel:";

      const input_basico= document.createElement("INPUT");
      setMultipleAttributes(input_basico, {"type": "radio", 
      "name":"language-level", "id": `level-basic${cont_i}`, 
      "value": "Basico", "checked": "true"});
      const label_basico= document.createElement("label");
      label_basico.setAttribute("for", `level-basic${cont_i}`);
      label_basico.textContent= "Basico";
      const input_intermedio= document.createElement("INPUT");
      setMultipleAttributes(input_intermedio, {"type": "radio", 
      "name":"language-level", "id": `level-intermediate${cont_i}`, 
      "value": "Intermedio"});
      const label_intermedio= document.createElement("label");
      label_intermedio.setAttribute("for", `level-intermediate${cont_i}`);
      label_intermedio.textContent= "Intermedio";
      const input_avanzado= document.createElement("INPUT");
      setMultipleAttributes(input_avanzado, {"type": "radio", 
      "name":"language-level", "id": `level-advanced${cont_i}`, 
      "value": "Avanzado"});
      const label_avanzado= document.createElement("label");
      label_avanzado.setAttribute("for", `level-advanced${cont_i}`);
      label_avanzado.textContent= "Avanzado";
      const input_fluido= document.createElement("INPUT");
      setMultipleAttributes(input_fluido, {"type": "radio", 
      "name":"language-level", "id": `level-fluid${cont_i}`, 
      "value": "Fluido"});
      const label_fluido= document.createElement("label");
      label_fluido.setAttribute("for", `level-fluid${cont_i}`);
      label_fluido.textContent= "Fluido";
    const li= document.createElement('li');
    li.append(div_label_idioma, div_input_idioma, p_advertencia, label_nivel, input_basico,
    label_basico, input_intermedio, label_intermedio, input_avanzado,label_avanzado,
    input_fluido, label_fluido);
    document.querySelector('#list-languages').append(li);

    btn_delete_language.onclick = function() {deleteLanguage(btn_delete_language);};

    return false;
  };
});
