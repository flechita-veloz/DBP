from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
	return render_template("index.html")

"""el request es de tipo POST"""
@app.route("/hello", methods=["POST"]) 
def login():
	"""busca de nuestro form el atributo name es cual es igual a pais"""
	pais = request.form.get("pais")  #Var
	nombres = request.form.get("nombres") 
	apellidos = request.form.get("apellidos") 
	direccion = request.form.get("direccion") 
	ciudad = request.form.get("ciudad")
	provincia = request.form.get("provincia") 
	codigo_postal = request.form.get("codigo_postal")
	telefono = request.form.get("telefono")
	email = request.form.get("email") 
	password = request.form.get("password")

	return render_template(
		"session.html",
		pais=pais, #establece la variable pais de session y lo iguala a var
		nombres=nombres,
		apellidos=apellidos,
		direccion=direccion,
		ciudad=ciudad,
		provincia=provincia,
		telefono= telefono,
		codigo_postal=codigo_postal,
		email=email,
		password=password,
		)
