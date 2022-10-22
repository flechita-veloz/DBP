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

function deleteItem2(li, cont) {
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
  document.querySelector('#submit').disabled= true;
  const formulario= document.getElementById('form');
  const inputs= document.querySelectorAll('#form input');
  const text_tarea= document.querySelectorAll('#work-experience');

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
      case "work-experience":
          validarCampo(expresiones.perfil, e.target, 'work-experience', 'perfil');
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
      "name": `name-language${cont_i}`, "id": `name-language${cont_i}`, "placeholder": "Ingles"});
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
      setMultipleAttributes(label_aptitud, {"for": `name-aptitude${cont_a}`, 
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
      `datalist-aptitudes${cont_a}`,"name":`input-aptitude${cont_a}`, "id": 
      `input-aptitude${cont_a}`, "placeholder": "Trabajo en equipo"});
      const datalist= document.createElement("datalist");
      setMultipleAttributes(datalist, {"name": "datalist-aptitudes", 
      "id": `datalist-aptitudes${cont_a}`});
        const option_1= document.createElement("option");
        setMultipleAttributes(option_1, {"name":"aptitude", 
        "id": `aptitude${cont_a}`, "value": "Inteligencia emocional"});
        const option_2= document.createElement("option");
        setMultipleAttributes(option_2, {"name":"aptitude", 
        "id": `aptitude${cont_a}`, "value": "Espíritu crítico"});
        const option_3= document.createElement("option");
        setMultipleAttributes(option_3, {"name":"aptitude", 
        "id": `aptitude${cont_a}`, "value": "Trabajo en equipo"});
        const option_4= document.createElement("option");
        setMultipleAttributes(option_4, {"name":"aptitude", 
        "id": `aptitude${cont_a}`, "value": "Capacidad analítica"});
        const option_5= document.createElement("option");
        setMultipleAttributes(option_5, {"name":"aptitude", 
        "id": `aptitude${cont_a}`, "value": "Comunicación efectiva"});
        const option_6= document.createElement("option");
        setMultipleAttributes(option_6, {"name":"aptitude", 
        "id": `aptitude${cont_a}`, "value": "Aprendizaje fluido"});
        const option_7= document.createElement("option");
        setMultipleAttributes(option_7, {"name":"aptitude", 
        "id": `aptitude${cont_a}`, "value": "Iniciativa"});

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

//--Experiencia Laboral------------------------------------------------------------------------------
var cont_we= 0;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn-add-work-experience').onclick = () => {
    cont_we= cont_we+1;
    div_sub_form= document.createElement("div");
    setMultipleAttributes(div_sub_form, {"class": "sub_form_group", "id": "sub_group_work-experience"});
      div_head= document.createElement("div");
      div_head.setAttribute("class", "sub_form_label_head");
        label_head= document.createElement("label");
        label_head.setAttribute("class", "sub_form_label");
        label_head.textContent= "Experiencia Laboral";
        btn_delete= document.createElement("button");
        setMultipleAttributes(btn_delete, {"type": "button","id": "btn-delete-work-experience"});
        btn_delete.textContent= "eliminar experiencia laboral";
      div_head.append(label_head, btn_delete);

      //---Empleo------------------------------------------------------------------
      div_job= document.createElement("div");
      div_job.setAttribute("class", "sub_form_group_job");
      label_job= document.createElement("label");
      setMultipleAttributes(label_job, {"for": `job${cont_we}`, "class": "sub_form_label",
      "name": `work-experience_job${cont_we}`, "id": `work-experience_job${cont_we}`});
      label_job.textContent= "Título del empleo";
      input_job= document.createElement("INPUT");
      setMultipleAttributes(input_job, {"type": "text", "class": "sub_form_input",
      "name": `job${cont_we}`, "id": `job${cont_we}`,
      "placeholder": "Título del empleo"});
      div_job.append(label_job, input_job);

      //---Empresa------------------------------------------------------------------
      div_company= document.createElement("div");
      div_company.setAttribute("class", "sub_form_group_company");
      label_company= document.createElement("label");
      setMultipleAttributes(label_company, {"for": `company${cont_we}`, "class": "sub_form_label",
      "name": `work-experience_company${cont_we}`, "id": `work-experience_company${cont_we}`});
      label_company.textContent= "Empresa";
      input_company= document.createElement("INPUT");
      setMultipleAttributes(input_company, {"type": "text", "class": "sub_form_input",
      "name": `company${cont_we}`, "id": `company${cont_we}`,
      "placeholder": "nombre de la empresa"});
      div_company.append(label_company, input_company);

      //---ciudad------------------------------------------------------------------
      div_city= document.createElement("div");
      div_city.setAttribute("class", "sub_form_group_city");
      label_city= document.createElement("label");
      setMultipleAttributes(label_city, {"for": `city${cont_we}`, "class": "sub_form_label",
      "name": `work-experience_city${cont_we}`, "id": `work-experience_city${cont_we}`});
      label_city.textContent= "Ciudad";
      input_city= document.createElement("INPUT");
      setMultipleAttributes(input_city, {"type": "text", "class": "sub_form_input",
      "name": `city${cont_we}`, "id": `city${cont_we}`,
      "placeholder": "Nombre de la ciudad"});
      div_city.append(label_city, input_city);

      //---periodo------------------------------------------------------------------
      div_period= document.createElement("div");
      div_period.setAttribute("class", "sub_form_group_period");
        label_period= document.createElement("label");
        setMultipleAttributes(label_period, {"class": "sub_form_label",
        "name": `work-experience_period${cont_we}`, "id": `work-experience_period${cont_we}`});
        label_period.textContent= "Periodo";
        div_period_inputs= document.createElement("div");
        div_period_inputs.setAttribute("class", "sub_form_group_period_inputs");
          div_period_begin= document.createElement("div");
          div_period_begin.setAttribute("class", "sub_form_group_period_begin");
          input_period_begin= document.createElement("INPUT");
          setMultipleAttributes(input_period_begin, {"type": "text", "class": "sub_form_input",
          "name": `period-begin${cont_we}`, "id": `period-begin${cont_we}`,
          "placeholder": "2010"});
          div_period_begin.append(input_period_begin);
          div_period_end= document.createElement("div");
          div_period_end.setAttribute("class", "sub_form_group_period_end");
          input_period_end= document.createElement("INPUT");
          setMultipleAttributes(input_period_end, {"type": "text", "class": "sub_form_input",
          "name": `period-end${cont_we}`, "id": `period-end${cont_we}`,
          "placeholder": "2022"});
          div_period_end.append(input_period_end);
        div_period_inputs.append(div_period_begin, div_period_end);
      div_period.append(label_period, div_period_inputs);

      //----content--------------------------------------------------------
      div_content= document.createElement("div");
      div_content.setAttribute("class", "sub_form_group_content");
      label_content= document.createElement("label");
      setMultipleAttributes(label_content, {"for": `experience${cont_we}`,
       "class": "sub_form_label","name": `work-experience_content${cont_we}`, "id": `work-experience_content${cont_we}`});
      label_content.textContent= "Descripción";
      input_content= document.createElement("textarea");
      setMultipleAttributes(input_content, {"class": "form_input_content",
      "name": `content${cont_we}`, "id": `content${cont_we}`,
      "placeholder": "Ingresa tu experiencia e hitos aquí. Por ejemplo: Era responsable de hacer los informes mensuales."});
      div_content.append(label_content, input_content);

    div_sub_form.append(div_head, div_job, div_company, div_city, div_period, div_content);
    const li= document.createElement('li');
    li.append(div_sub_form);
    document.querySelector("#work-experiences").append(li);
    btn_delete.onclick = function() {deleteItem2(li, cont_we);};
    return false;
  };
});

//--Formation------------------------------------------------------------------------------
var cont_f= 0;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#btn-add-formation').onclick = () => {
    cont_f= cont_f+1;
    div_sub_form= document.createElement("div");
    setMultipleAttributes(div_sub_form, {"class": "sub_form_group", "id": `sub_group_formation${cont_f}`});
      div_head= document.createElement("div");
      div_head.setAttribute("class", "sub_form_label_head");
        label_head= document.createElement("label");
        label_head.setAttribute("class", "sub_form_label");
        label_head.textContent= "Formación";
        btn_delete= document.createElement("button");
        setMultipleAttributes(btn_delete, {"type": "button","id": "btn-delete-formation"});
        btn_delete.textContent= "eliminar formación";
      div_head.append(label_head, btn_delete);

      //---universidad------------------------------------------------------------------
      div_university= document.createElement("div");
      div_university.setAttribute("class", "sub_form_group_university");
      label_university= document.createElement("label");
      setMultipleAttributes(label_university, {"for": "university", "class": "sub_form_label",
      "name": `profile_university${cont_f}`, "id": `profile_university${cont_f}`});
      label_university.textContent= "Universidad";
      input_university= document.createElement("INPUT");
      setMultipleAttributes(input_university, {"type": "text", "class": "sub_form_input",
      "name": `university${cont_f}`, "id": `university${cont_f}`,
      "placeholder": "Nombre de la universidad"});
      div_university.append(label_university, input_university);

      //---grado------------------------------------------------------------------
      div_degree= document.createElement("div");
      div_degree.setAttribute("class", "sub_form_group_degree");
      label_degree= document.createElement("label");
      setMultipleAttributes(label_degree, {"for": "degree", "class": "sub_form_label",
      "name": `profile_degree${cont_f}`, "id": `profile_degree${cont_f}`});
      label_degree.textContent= "Grado";
      input_degree= document.createElement("INPUT");
      setMultipleAttributes(input_degree, {"type": "text", "class": "sub_form_input",
      "name": `degree${cont_f}`, "id": `degree${cont_f}`,
      "placeholder": "Ingresa tu grado"});
      div_degree.append(label_degree, input_degree);

      //---ciudad------------------------------------------------------------------
      div_city= document.createElement("div");
      div_city.setAttribute("class", "sub_form_group_city");
      label_city= document.createElement("label");
      setMultipleAttributes(label_city, {"for": "city", "class": "sub_form_label",
      "name": `profile_city${cont_f}`, "id": `profile_city${cont_f}`});
      label_city.textContent= "Ciudad";
      input_city= document.createElement("INPUT");
      setMultipleAttributes(input_city, {"type": "text", "class": "sub_form_input",
      "name": `fcity${cont_f}`, "id": `fcity${cont_f}`,
      "placeholder": "Nombre de la ciudad"});
      div_city.append(label_city, input_city);

      //---periodo------------------------------------------------------------------
      div_period= document.createElement("div");
      div_period.setAttribute("class", "sub_form_group_period");
        label_period= document.createElement("label");
        setMultipleAttributes(label_period, {"for": "period", "class": "sub_form_label",
        "name": `profile_period${cont_f}`, "id": `profile_period${cont_f}`});
        label_period.textContent= "Periodo";
        div_period_inputs= document.createElement("div");
        div_period_inputs.setAttribute("class", "sub_form_group_period_inputs");
          div_period_begin= document.createElement("div");
          div_period_begin.setAttribute("class", "sub_form_group_period_begin");
          input_period_begin= document.createElement("INPUT");
          setMultipleAttributes(input_period_begin, {"type": "text", "class": "sub_form_input",
          "name": `fperiod-begin${cont_f}`, "id": `fperiod-begin${cont_f}`,
          "placeholder": "2010"});
          div_period_begin.append(input_period_begin);
          div_period_end= document.createElement("div");
          div_period_end.setAttribute("class", "sub_form_group_period_end");
          input_period_end= document.createElement("INPUT");
          setMultipleAttributes(input_period_end, {"type": "text", "class": "sub_form_input",
          "name": `fperiod-end${cont_f}`, "id": `fperiod-end${cont_f}`,
          "placeholder": "2022"});
          div_period_end.append(input_period_end);
        div_period_inputs.append(div_period_begin, div_period_end);
      div_period.append(label_period, div_period_inputs);

    div_sub_form.append(div_head, div_university, div_degree, div_city, div_period);
    const li= document.createElement('li');
    li.append(div_sub_form);
    document.querySelector("#formations").append(li);
    btn_delete.onclick = function() {deleteItem2(li, cont_f);};
    return false;    
  };
});
