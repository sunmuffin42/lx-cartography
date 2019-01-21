import os
from flask import Flask, request, render_template
from json import load, dumps, dump, loads
app = Flask(__name__)

file_to_update = 'myjson.json'

@app.route('/json/', methods=['GET'])
def get_json():
	print(os.getcwd())
	with open(file_to_update) as f:
		return dumps(load(f))

@app.route('/json/update', methods=['GET'])
def update_json():
	data = request.args['new_json']
	with open(file_to_update, 'w') as f:
		dump(data, f)

@app.route('/json/add', methods=['GET'])
def add_json():
	with open(file_to_update, 'r') as f:
		return render_template('flask-form.html', classAttribute=load(f)['classAttribute'])

@app.route('/view_ontology', methods=['GET'])
def view_ontology():
	return render_template('index.html')

def addWork(json, workID, label, authorID, date):
	addItem(json, workID, obj, label)
	pubID = "pub_date_" + workID
	addItem(json, pubID, data, str(date))
	addProperty(json, "wrote_" + authorID + "_" + date, objProp, authorID, workID, "wrote")
	addProperty(json, "publication_date_" + authorID + "_" + date, objProp, workID, pubID, "was published in the year")