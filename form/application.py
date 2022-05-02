from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
	return render_template("index.html")

@app.route("/<string:name>")
def session(name):
	return render_template(
		"session.html",
		name=name,
		)

"""el request es de tipo POST"""
@app.route("/hello", methods=["POST"]) 
def login():
	name = request.form.get("nombre")
	return render_template(
		"session.html",
		name=name,
		)

@app.route("/users")
def names():
	# Query a DB for users.
	name_list = ["Jose", "Pedro", "Maria", "Luis"]
	return render_template(
		"list.html",
		nombres=name_list,
	)