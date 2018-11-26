import json, re

data = "rdfs:datatype"
obj = "owl:Class"
dataProp = "owl:datatypeProperty"
objProp = "owl:objectProperty"

def main():
	inFile = "C:\\Linguistics\\lx-cartography\\lx-cartography\\lx_cartography_sample.json"
	outFile = "C:\\Linguistics\\lx-cartography\\lx-cartography\\lx_cartography_sample2.json"

	sample = open(inFile, mode="r", encoding = "utf8")
	sampleJSON = json.load(sample)
	sampleJSON["header"]["version"] = "0.1"
	sampleJSON["header"]["author"] = ["Eri Kashima", "Sunny Ananthanarayan", "Siva Kalyan", "Naomi Peck"]
	sampleJSON["desc"] = "Welcome to Linguistic Cartography!"
	#addItem(sampleJSON, "de_saussure_dob", data, "1857")
	#addProperty(sampleJSON, "dob_de_saussure", dataProp, "saussure", "de_saussure_dob", "was born in")
	# addItem(sampleJSON, "daniel_everett", obj, "Daniel Everett", "https://en.wikipedia.org/wiki/Daniel_Everett")
	# addProperty(sampleJSON, "chomsky_wrote_1965", objProp, "chomsky", "aspects_of_the_theory_of_syntax", "wrote")
	# addWork(sampleJSON, "cultural_constraints", "Cultural Constraints on Grammar and Cognition in Pirahã", "daniel_everett", "2005")


	outJSON = open(outFile, mode="w", encoding= "utf8")
	json.dump(sampleJSON, outJSON)


def addWork(json, workID, label, authorID, date):
	addItem(json, workID, obj, label)
	pubID = "pub_date_" + workID
	addItem(json, pubID, data, str(date))
	addProperty(json, "wrote_" + authorID + "_" + date, objProp, authorID, workID, "wrote")
	addProperty(json, "publication_date_" + authorID + "_" + date, objProp, workID, pubID, "was published in the year")

def addItem(json, itemID, typeID, label, iri = False):
	json["class"].append({"id" : itemID, "type" : typeID})
	json["classAttribute"].append({"label" : label, "id" : itemID})
	if iri:
		json["classAttribute"][-1]["iri"] = iri

def addProperty(json, propertyID, typeID, domainID, rangeID, label):
	json["property"].append({"id" : propertyID, "type" : typeID})
	json["propertyAttribute"].append({"id" : propertyID, "domain" : domainID, "range" : rangeID, "label" : label})




main()