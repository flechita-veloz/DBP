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
    english_level= request.form.get("language-level")
    programming_lenguages= request.form.getlist("programming-lenguages")
    aptitudes= request.form.get("aptitudes")
    skill1= request.form.get("skill1")
    skill2= request.form.get("skill2")
    skill3= request.form.get("skill3")
    skill4= request.form.get("skill4")
    profile= request.form.get("profile")
    return render_template("cv.html", nombre=name,apellidos=last_name,
            fecha_nacimiento=date_birth,ocupacion=ocupation,telefono=phone,
            correo= email,nacionalidad=nationality,nivel_ingles=english_level,
            lenguajes_programacion=programming_lenguages,aptitudes=aptitudes,
            hab1= skill1, hab2= skill2, hab3= skill3, hab4= skill4, perfil=profile)
