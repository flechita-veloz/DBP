from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
    
@app.route("/cv", methods=["POST"])
def create_cv():
    name= request.form.get("name")
    last_name= request.form.get("last-name")
    date_birth= request.form.get("date-birth")
    ocupation= request.form.get("ocupation")
    phone= request.form.get("phone")
    email= request.form.get("email")
    nationality= request.form.get("nationality")

    name_language1= request.form.get("name-language1")
    value_language1= request.form.get("language-level1")
    name_language2= request.form.get("name-language2")
    value_language2= request.form.get("language-level2")
    name_language3= request.form.get("name-language3")
    value_language3= request.form.get("language-level3")
    name_language4= request.form.get("name-language4")
    value_language4= request.form.get("language-level4")
    name_language5= request.form.get("name-language5")
    value_language5= request.form.get("language-level5")

    programming_languages= request.form.getlist("programming-languages")

    aptitude1= request.form.get("input-aptitude1")
    aptitude2= request.form.get("input-aptitude2")
    aptitude3= request.form.get("input-aptitude3")
    aptitude4= request.form.get("input-aptitude4")
    aptitude5= request.form.get("input-aptitude5")

    skill1= request.form.get("skill1")
    skill2= request.form.get("skill2")
    skill3= request.form.get("skill3")
    skill4= request.form.get("skill4")
    skill5= request.form.get("skill5")
    skill6= request.form.get("skill6")
    skill7= request.form.get("skill7")
    skill8= request.form.get("skill8")
    skill9= request.form.get("skill9")
    skill10= request.form.get("skill10")

    empleo1= request.form.get("job1")
    empresa1= request.form.get("company1")
    eciudad1= request.form.get("city1")
    eaño_inicio1= request.form.get("period-begin1")
    eaño_fin1= request.form.get("period-end1")
    descripcion1= request.form.get("content1")

    empleo2= request.form.get("job2")
    empresa2= request.form.get("company2")
    eciudad2= request.form.get("city2")
    eaño_inicio2= request.form.get("period-begin2")
    eaño_fin2= request.form.get("period-end2")
    descripcion2= request.form.get("content2")

    empleo3= request.form.get("job3")
    empresa3= request.form.get("company3")
    eciudad3= request.form.get("city3")
    eaño_inicio3= request.form.get("period-begin3")
    eaño_fin3= request.form.get("period-end3")
    descripcion3= request.form.get("content3")

    empleo4= request.form.get("job4")
    empresa4= request.form.get("company4")
    eciudad4= request.form.get("city4")
    eaño_inicio4= request.form.get("period-begin4")
    eaño_fin4= request.form.get("period-end4")
    descripcion4= request.form.get("content4")

    empleo5= request.form.get("job5")
    empresa5= request.form.get("company5")
    eciudad5= request.form.get("city5")
    eaño_inicio5= request.form.get("period-begin5")
    eaño_fin5= request.form.get("period-end5")
    descripcion5= request.form.get("content5")



    universidad1= request.form.get("university1")
    grado1= request.form.get("degree1")
    fciudad1= request.form.get("fcity1")
    faño_inicio1= request.form.get("fperiod-begin1")
    faño_fin1= request.form.get("fperiod-end1")

    universidad2= request.form.get("university2")
    grado2= request.form.get("degree2")
    fciudad2= request.form.get("fcity2")
    faño_inicio2= request.form.get("fperiod-begin2")
    faño_fin2= request.form.get("fperiod-end2")

    universidad3= request.form.get("university3")
    grado3= request.form.get("degree3")
    fciudad3= request.form.get("fcity3")
    faño_inicio3= request.form.get("fperiod-begin3")
    faño_fin3= request.form.get("fperiod-end3")

    profile= request.form.get("content-profile")
    return render_template("cv.html", nombre=name,apellidos=last_name, fecha_nacimiento=date_birth,ocupacion=ocupation,telefono=phone,
    correo= email,nacionalidad=nationality, lenguajes_programacion=programming_languages,
    hab1= skill1, hab2= skill2, hab3= skill3, hab4= skill4, hab5= skill5, hab6= skill6, hab7= skill7, hab8= skill8, hab9= skill9, hab10= skill10,  
    perfil=profile,
    name_language1= name_language1, value_language1= value_language1, name_language2= name_language2, value_language2= value_language2,
    name_language3= name_language3, value_language3= value_language3, name_language4= name_language4, value_language4= value_language4,
    name_language5= name_language5, value_language5= value_language5, 
    aptitude1= aptitude1, aptitude2= aptitude2, aptitude3= aptitude3, aptitude4= aptitude4, aptitude5= aptitude5, 
    empleo1= empleo1, empresa1= empresa1, eciudad1= eciudad1, eaño_inicio1= eaño_inicio1, eaño_fin1= eaño_fin1, descripcion1= descripcion1,
    empleo2= empleo2, empresa2= empresa2, eciudad2= eciudad2, eaño_inicio2= eaño_inicio2, eaño_fin2= eaño_fin2, descripcion2= descripcion2,
    empleo3= empleo3, empresa3= empresa3, eciudad3= eciudad3, eaño_inicio3= eaño_inicio3, eaño_fin3= eaño_fin3, descripcion3= descripcion3,
    empleo4= empleo4, empresa4= empresa4, eciudad4= eciudad4, eaño_inicio4= eaño_inicio4, eaño_fin4= eaño_fin4, descripcion4= descripcion4,
    empleo5= empleo5, empresa5= empresa5, eciudad5= eciudad5, eaño_inicio5= eaño_inicio5, eaño_fin5= eaño_fin5, descripcion5= descripcion5,
    universidad1= universidad1, grado1= grado1, fciudad1= fciudad1, faño_inicio1= faño_inicio1, faño_fin1= faño_fin1, 
    universidad2= universidad2, grado2= grado2, fciudad2= fciudad2, faño_inicio2= faño_inicio2, faño_fin2= faño_fin2,
    universidad3= universidad3, grado3= grado3, fciudad3= fciudad3, faño_inicio3= faño_inicio3, faño_fin3= faño_fin3)
