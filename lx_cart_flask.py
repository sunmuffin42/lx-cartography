import os
from flask import Flask, request, render_template
from flask_cors import CORS
from json import load, dumps, dump, loads
app = Flask(__name__)
app.jinja_env.filters['zip'] = zip
inFile = 'myjson.json'
outFile = 'myjson3.json'
minorAttributes = [{"type":"owl:DatatypeProperty", "id":"pub_date_", "label":"was published in year"},
					{"type":"owl:DatatypeProperty", "id":"birth_date_", "label":"was born in the year"}, 
					{"type":"owl:DatatypeProperty", "id":"described_followed_was_", "label":"described and/or followed and/or was a"}, 
					{"type":"owl:DatatypeProperty", "id":"opposed_", "label":"opposed"},
					{"type":"owl:DatatypeProperty", "id":"got_phd_from_", "label":"got their PhD from"},
					{"type":"owl:DatatypeProperty", "id":"grad_date_", "label":"got their PhD in the year"},
					{"type":"owl:DatatypeProperty", "id":"taught_worked_at_", "label":"taught/worked at"},
					{"type":"owl:DatatypeProperty", "id":"studied_at_", "label":"studied at"},
					{"type":"owl:DatatypeProperty", "id":"phd_subject_", "label":"did their PhD on"},
					{"type":"owl:DatatypeProperty", "id":"from_lived_in_", "label":"is/was from or lived in"}]
majorAttributes = [{"type":"owl:objectProperty", "id":"wrote_edited_", "label":"wrote/edited"}, 
					{"type":"owl:objectProperty", "id":"inspired_", "label":"inspired"}, 
					{"type":"owl:objectProperty", "id":"opposed_", "label":"opposed"},
					{"type":"owl:objectProperty", "id":"advised_", "label":"advised"},
					{"type":"owl:objectProperty", "id":"taught_", "label":"taught"},
					{"type":"owl:objectProperty", "id":"committee_member_", "label":"was on the committee for"},
					{"type":"owl:objectProperty", "id":"contributed_", "label":"contributed to"} ]
data = "rdfs:datatype"
obj = "owl:Class"
robj = "rdfs:Class"
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
			iri = False
			if request.form.get('iri1'):
				iri = request.form.get('iri1')
			addItem(myjson2, author.replace(" ", "_").lower(), obj, author, "author", iri=iri)
			if request.form.get('date0'):
				date = request.form.get('date0')
				addItem(myjson2, date, data, date, "date")
				addProperty(myjson2, "birth_date_" + author.replace(" ", "_").lower() + "_" + date, dataProp, author.replace(" ", "_").lower(), date, "was born in the year")
			

		elif request.form.get('work'):
			work = request.form.get('work')
			iri = False
			if request.form.get('author2'):
				authorid = request.form.get('author2')
			else:
				authorid = request.form.get('author3').replace(" ", "_").lower()
				addItem(myjson2, authorid, obj, request.form.get('author3'), "author")
			if request.form.get('date1'):
				date = request.form.get('date1')
			else:
				date = request.form.get('date2')
			if request.form.get('iri2'):
				iri = request.form.get('iri2')
			addWork(myjson2, work.replace(" ", "_").lower(), work, authorid, date, iri=iri)
		elif request.form.get('minor_type'):
			addItem(myjson2, request.form.get("minor_entity").replace(" ", "_").lower(), data, request.form.get("minor_entity"), request.form.get('minor_type'))
		elif request.form.get('link'):
			for i in myjson2["class"]:
				if i["id"] == request.form.get('link'):
					i["iri"] = request.form.get('iri3')
			for i in myjson2["classAttribute"]:
				if i["id"] == request.form.get('link'):
					i["iri"] = request.form.get('iri3')
		elif request.form.get('domain1'):
			domain = request.form.get('domain1')
			attribute = request.form.get('attribute1')
			_range = request.form.get('range1')
			for i in majorAttributes:
				if attribute == i["id"]:
					label = i["label"]
			addProperty(myjson2, attribute + domain + "_" + _range, objProp, domain, _range, label)
		elif request.form.get('domain2'):
			domain = request.form.get('domain2')
			attribute = request.form.get('attribute2')
			if request.form.get('range2'):
				_range = request.form.get('range2')
			elif request.form.get('range3'):
				_range = request.form.get('range3')
				addItem(myjson2, _range.replace(" ", "_").lower(), data, _range, request.form.get('range3_type'))
			for i in minorAttributes:
				if attribute == i["id"]:
					label = i["label"]

			addProperty(myjson2, attribute + domain + "_" + _range.replace(" ", "_").lower(), dataProp, domain, _range.replace(" ", "_").lower(), label)
		dump(myjson2, myjson3, indent="\t")
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

def addWork(json, workID, label, authorID, date, iri=False):
	addItem(json, workID, robj, label, "work", iri=iri)
	# change this so the id is just the number itself, and it can be used for various things
	dateID = date
	addItem(json, str(dateID), data, str(date), "date")
	addProperty(json, "wrote_" + authorID + "_" + date, objProp, authorID, workID, "wrote")
	addProperty(json, "pub_date_" + authorID + "_" + date, dataProp, workID, dateID, "was published in the year")

def addItem(json, itemID, typeID, label, category, iri = False):
	new = True
	for i in json["class"]:
		if i["id"] == itemID:
			new = False
	if new:
		json["class"].append({"id" : itemID, "type" : typeID, "label" : label, "category": category})
		json["classAttribute"].append({"label" : label, "id" : itemID, "type" : typeID, "category": category})
		if iri:
			json["classAttribute"][-1]["iri"] = iri
			json["class"][-1]["iri"] = iri
	else:
		print("this already exists")

def addProperty(json, propertyID, typeID, domainID, rangeID, label):
	json["property"].append({"id" : propertyID, "type" : typeID, "domain" : domainID, "range" : rangeID, "label" : label})
	json["propertyAttribute"].append({"id" : propertyID, "type" : typeID, "domain" : domainID, "range" : rangeID, "label" : label})