function setMultipleAttributes(elmnt, attributesToSet) {
    for(let i in attributesToSet) {
        elmnt.setAttribute(i, attributesToSet[i]);
    }
}

function deleteItem(button, cont) {
    div= button.parentElement;
    li= div.parentElement;
    li.remove();
    cont= cont-1;
}

function insertItem(){
    input_habilidad= document.querySelector("#input-skill");
    const value= input_habilidad.value;
    const check= document.createElement("input");
    setMultipleAttributes(check, {"type": "checkbox", "name": `skill${cont_s}`,
    "id": `skill${cont_s}`, "value": `${value}`});
    const label= document.createElement("label");
    setMultipleAttributes(label, {"for": `skill${cont_s}`});
    label.textContent= value; 
    div= document.querySelector("#group_skills");
    div.append(check);
    div.append(label);
    br= document.createElement("br");
    div.append(br);
    input_habilidad.value= '';
    cont_s= cont_s+1;
}

function undoItem(aux_btn, adv, label, input){
  label_skill= document.querySelector("#group_skills_label");
  label_skill.append(aux_btn);
  adv.remove();
  label.remove();
  input.remove();
  find_input_skill= false;
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
      const btn_delete= document.createElement("button");
      setMultipleAttributes(btn_delete, {"type": "button", 
      "id": "btn-delete-language"});
      btn_delete.textContent= "eliminar idioma";
    div_label_idioma.append(label_idioma, btn_delete); 
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
      "name":`language-level${cont_i}`, "id": `level-basic${cont_i}`, 
      "value": "Basico", "checked": "true"});
      const label_basico= document.createElement("label");
      label_basico.setAttribute("for", `level-basic${cont_i}`);
      label_basico.textContent= "Basico";
      const input_intermedio= document.createElement("INPUT");
      setMultipleAttributes(input_intermedio, {"type": "radio", 
      "name":`language-level${cont_i}`, "id": `level-intermediate${cont_i}`, 
      "value": "Intermedio"});
      const label_intermedio= document.createElement("label");
      label_intermedio.setAttribute("for", `level-intermediate${cont_i}`);
      label_intermedio.textContent= "Intermedio";
      const input_avanzado= document.createElement("INPUT");
      setMultipleAttributes(input_avanzado, {"type": "radio", 
      "name":`language-level${cont_i}`, "id": `level-advanced${cont_i}`, 
      "value": "Avanzado"});
      const label_avanzado= document.createElement("label");
      label_avanzado.setAttribute("for", `level-advanced${cont_i}`);
      label_avanzado.textContent= "Avanzado";
      const input_fluido= document.createElement("INPUT");
      setMultipleAttributes(input_fluido, {"type": "radio", 
      "name":`language-level${cont_i}`, "id": `level-fluid${cont_i}`, 
      "value": "Fluido"});
      const label_fluido= document.createElement("label");
      label_fluido.setAttribute("for", `level-fluid${cont_i}`);
      label_fluido.textContent= "Fluido";
    const li= document.createElement('li');
    li.append(div_label_idioma, div_input_idioma, p_advertencia, label_nivel, input_basico,
    label_basico, input_intermedio, label_intermedio, input_avanzado,label_avanzado,
    input_fluido, label_fluido);
    document.querySelector('#list-languages').append(li);
    btn_delete.onclick = function() {deleteItem(btn_delete, cont_i);};
    return false;
  };
});


//--Aptitudes----------------------------------------------------
var cont_a= 0;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn-add-aptitude').onclick = () => {
    cont_a= cont_a+1;
    const div_label_aptitud= document.createElement("div");
    div_label_aptitud.setAttribute("class", "form_group_label");
      const label_aptitud= document.createElement("label");
      setMultipleAttributes(label_aptitud, {"for": `name-aptitude${cont_i}`, 
      "class":"form_label"});
      label_aptitud.textContent= "Aptitud:";
      const btn_delete_aptitud= document.createElement("button");
      setMultipleAttributes(btn_delete_aptitud, {"type": "button", 
      "id": "btn-delete-aptitude"});
      btn_delete_aptitud.textContent= "eliminar aptitud";
    div_label_aptitud.append(label_aptitud, btn_delete_aptitud); 
    const div_input_aptitud = document.createElement("div");
    div_input_aptitud.setAttribute("class", "form_group_input");
      const input_aptitud= document.createElement("INPUT");
      setMultipleAttributes(input_aptitud, {"class": "form_input", "list": 
      `datalist-aptitudes${cont_i}`,"name": "input-aptitude", "id": 
      `input-aptitude${cont_i}`, "placeholder": "Trabajo en equipo"});
      const datalist= document.createElement("datalist");
      setMultipleAttributes(datalist, {"name": "datalist-aptitudes", 
      "id": `datalist-aptitudes${cont_i}`});
        const option_1= document.createElement("option");
        setMultipleAttributes(option_1, {"name":"aptitude", 
        "id": `aptitude${cont_i}`, "value": "Inteligencia emocional"});
        const option_2= document.createElement("option");
        setMultipleAttributes(option_2, {"name":"aptitude", 
        "id": `aptitude${cont_i}`, "value": "Espíritu crítico"});
        const option_3= document.createElement("option");
        setMultipleAttributes(option_3, {"name":"aptitude", 
        "id": `aptitude${cont_i}`, "value": "Trabajo en equipo"});
        const option_4= document.createElement("option");
        setMultipleAttributes(option_4, {"name":"aptitude", 
        "id": `aptitude${cont_i}`, "value": "Capacidad analítica"});
        const option_5= document.createElement("option");
        setMultipleAttributes(option_5, {"name":"aptitude", 
        "id": `aptitude${cont_i}`, "value": "Comunicación efectiva"});
        const option_6= document.createElement("option");
        setMultipleAttributes(option_6, {"name":"aptitude", 
        "id": `aptitude${cont_i}`, "value": "Aprendizaje fluido"});
        const option_7= document.createElement("option");
        setMultipleAttributes(option_7, {"name":"aptitude", 
        "id": `aptitude${cont_i}`, "value": "Iniciativa"});

      datalist.append(option_1, option_2, option_3, option_4, option_5, option_6,
      option_7);

      const i_aptitud= document.createElement("i");
      i_aptitud.setAttribute("class", "form_validation-state fa-solid fa-circle-xmark");
      div_input_aptitud.append(input_aptitud, datalist, i_aptitud);

    const p_advertencia= document.createElement("p");
    p_advertencia.setAttribute("class", "form_input-wrong");
    p_advertencia.textContent= "Complete este campo por favor.";

    const li= document.createElement('li');
    li.append(div_label_aptitud, div_input_aptitud, p_advertencia);
    document.querySelector('#list-aptitudes').append(li);

    btn_delete_aptitud.onclick = function() {deleteItem(btn_delete_aptitud, cont_a);};

    return false;
  };
});


//--Habilidades----------------------------------------------------
var cont_s= 5;
var find_input_skill= false;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn-add-skill').onclick = () => {
    if(find_input_skill==false){
      find_input_skill= true;
      const aux_btn= document.querySelector("#btn-add-skill");
      document.querySelector("#btn-add-skill").remove();

      const div_label_habilidad= document.createElement("div");
      setMultipleAttributes(div_label_habilidad, {"class": "form_group_label",
      "id": "div-label-skill"});
        const label_habilidad= document.createElement("label");
        setMultipleAttributes(label_habilidad, {"for": `name-skill${cont_i}`, 
        "class":"form_label"});
        label_habilidad.textContent= "Habilidad:";
        const btn_insert_habilidad= document.createElement("button");
        setMultipleAttributes(btn_insert_habilidad, {"type": "button", 
        "id": "btn-insert-skill"});
        btn_insert_habilidad.textContent= "insertar";
        const btn_undo_habilidad= document.createElement("button");
        setMultipleAttributes(btn_undo_habilidad, {"type": "button", 
        "id": "btn-undo-skill"});
        btn_undo_habilidad.textContent= "deshacer";
      div_label_habilidad.append(label_habilidad, btn_insert_habilidad, btn_undo_habilidad); 
      const div_input_habilidad = document.createElement("div");
      div_input_habilidad.setAttribute("class", "form_group_input");
        const input_habilidad= document.createElement("INPUT");
        setMultipleAttributes(input_habilidad, {"class": "form_input", "type": "text",
        "name": "input-skill","id": "input-skill", "placeholder": "Front End"});
        const i_habilidad= document.createElement("i");
        i_habilidad.setAttribute("class", "form_validation-state fa-solid fa-circle-xmark");
        div_input_habilidad.append(input_habilidad, i_habilidad);

      const p_advertencia= document.createElement("p");
      p_advertencia.setAttribute("class", "form_input-wrong");
      p_advertencia.textContent= "Complete este campo por favor.";

      const group_skills= document.querySelector("#group_skills_label");
      group_skills.insertAdjacentElement("afterend", p_advertencia);
      group_skills.insertAdjacentElement("afterend", div_input_habilidad);
      group_skills.insertAdjacentElement("afterend", div_label_habilidad);

      btn_insert_habilidad.onclick = function() {insertItem();};
      btn_undo_habilidad.onclick = function() {undoItem(aux_btn, p_advertencia, div_input_habilidad, div_label_habilidad);};
    }
    return false;
  };
});
