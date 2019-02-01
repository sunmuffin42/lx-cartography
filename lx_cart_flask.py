import os
from flask import Flask, request, render_template
from flask_cors import CORS
from json import load, dumps, dump, loads
app = Flask(__name__)
app.jinja_env.filters['zip'] = zip
inFile = 'myjson.json'
outFile = 'myjson3.json'
minorAttributes = [{"type":"owl:DatatypeProperty", "id":"pub_date_", "label":"was published in"}, {"type":"owl:DatatypeProperty", "id":"birth_date_", "label":"was born in"}, {"type":"owl:DatatypeProperty", "id":"described_followed", "label":"described and/or followed"}, {"type":"owl:DatatypeProperty", "id":"opposed_", "label":"opposed"}]
majorAttributes = [{"type":"owl:objectProperty", "id":"wrote_", "label":"wrote"}, {"type":"owl:objectProperty", "id":"inspired_", "label":"inspired"}, {"type":"owl:objectProperty", "id":"opposed_", "label":"opposed"}, ]
data = "rdfs:datatype"
obj = "owl:Class"
dataProp = "owl:datatypeProperty"
objProp = "owl:objectProperty"


@app.route('/json/add', methods=['GET', 'POST'])
def add_json():
	if request.method== 'POST':
		# fuck with the json here and return the same form
		myjson = open(outFile, mode="r", encoding="utf8")
		myjson2 = load(myjson)
		myjson.close()
		myjson3 = open(outFile, mode="w", encoding="utf8")
		if request.form.get('author1'):
			author = request.form.get('author1')
			addItem(myjson2, author.replace(" ", "_").lower(), obj, author, "author")
		elif request.form.get('work'):
			work = request.form.get('work')
			if request.form.get('author2'):
				authorid = request.form.get('author2')
			else:
				authorid = request.form.get('author3').replace(" ", "_").lower()
			if request.form.get('date1'):
				date = request.form.get('date1')
			else:
				date = request.form.get('date2')
			addWork(myjson2, work.replace(" ", "_").lower(), work, authorid, date)
		elif request.form.get('minor_type'):
			addItem(myjson2, request.form.get("minor_entity").replace(" ", "_").lower(), data, request.form.get("minor_entity"), request.form.get('minor_type'))
		elif request.form.get('domain1'):
			domain = request.form.get('domain1')
			attribute = request.form.get('attribute1')
			_range = request.form.get('range1')
			for i in majorAttributes:
				if attribute == i["id"]:
					label = i["label"]
			addProperty(myjson2, attribute + domain + _range, objProp, domain, _range, label)
		elif request.form.get('domain2'):
			domain = request.form.get('domain2')
			attribute = request.form.get('attribute2')
			_range = request.form.get('range2')
			for i in minorAttributes:
				if attribute == i["id"]:
					label = i["label"]
			addProperty(myjson2, attribute + domain + _range, dataProp, domain, _range, label)
		dump(myjson2, myjson3)
		myjson3.close()
		with open(outFile, 'r', encoding="utf8") as f:
			# return str(load(f))
			new_f=load(f)
			return render_template('flask-form.html', classAttribute=new_f['classAttribute'], minorAttributes=minorAttributes, majorAttributes=majorAttributes)
			
	else:
		with open(outFile, 'r', encoding="utf8") as f:
			old_f=load(f)
			return render_template('flask-form.html', classAttribute=old_f['classAttribute'], minorAttributes=minorAttributes, majorAttributes=majorAttributes)

@app.route('/view_ontology', methods=['GET'])
def view_ontology():
	return render_template('webvowl.html')

@app.route('/data/foaf.json', methods=['GET'])
def test_json():
	return dumps(load(open(outFile, "r", encoding="utf8")))

def addWork(json, workID, label, authorID, date):
	addItem(json, workID, obj, label, "work")
	# change this so the id is just the number itself, and it can be used for various things
	dateID = date
	addItem(json, dateID, data, str(date), "date")
	addProperty(json, "wrote_" + authorID + "_" + date, objProp, authorID, workID, "wrote")
	addProperty(json, "pub_date_" + authorID + "_" + date, objProp, workID, dateID, "was published in the year")

def addItem(json, itemID, typeID, label, category, iri = False):
	json["class"].append({"id" : itemID, "type" : typeID, "label" : label, "category": category})
	json["classAttribute"].append({"label" : label, "id" : itemID, "type" : typeID, "category": category})
	if iri:
		json["classAttribute"][-1]["iri"] = iri

def addProperty(json, propertyID, typeID, domainID, rangeID, label):
	json["property"].append({"id" : propertyID, "type" : typeID, "domain" : domainID, "range" : rangeID, "label" : label})
	json["propertyAttribute"].append({"id" : propertyID, "type" : typeID, "domain" : domainID, "range" : rangeID, "label" : label})