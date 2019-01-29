import os
from flask import Flask, request, render_template
from flask_cors import CORS
from json import load, dumps, dump, loads
app = Flask(__name__)
app.jinja_env.filters['zip'] = zip
file_to_update = 'myjson2.json'

@app.route('/json/', methods=['GET'])
def get_json():
	print(os.getcwd())
	with open(file_to_update, encoding="utf8") as f:
		return dumps(load(f))

@app.route('/json/update', methods=['GET'])
def update_json():
	data = request.args['new_json']
	with open(file_to_update, 'w', encoding="utf8") as f:
		dump(data, f)

@app.route('/json_process', methods=['GET'])
def json_process():
	print("poop")
	return "Poop"

@app.route('/json/add', methods=['GET'])
def add_json():
	with open(file_to_update, 'r', encoding="utf8") as f:
		new_f=load(f)
		return render_template('flask-form.html', classAttribute=new_f['classAttribute'])

@app.route('/view_ontology', methods=['GET'])
def view_ontology():
	return render_template('webvowl.html')

@app.route('/data/foaf.json', methods=['GET'])
def test_json():
	return dumps(load(open(file_to_update, "r", encoding="utf8")))

def addWork(json, workID, label, authorID, date):
	addItem(json, workID, obj, label)
	pubID = "pub_date_" + workID
	addItem(json, pubID, data, str(date))
	addProperty(json, "wrote_" + authorID + "_" + date, objProp, authorID, workID, "wrote")
	addProperty(json, "publication_date_" + authorID + "_" + date, objProp, workID, pubID, "was published in the year")