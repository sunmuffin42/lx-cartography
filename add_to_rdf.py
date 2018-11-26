import json

datatype = "rdfs:Datatype"
owlClass = "owl:Class"
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
	#addItem(sampleJSON, "de_saussure_dob", datatype, "1857")
	#addProperty(sampleJSON, "dob_de_saussure", dataProp, "saussure", "de_saussure_dob", "was born in")
	#addItem(sampleJSON, "daniel_everett", owlClass, "Daniel Everett", "https://en.wikipedia.org/wiki/Daniel_Everett")
	addProperty(sampleJSON, "chomsky_wrote_1965", objProp, "chomsky", "aspects_of_the_theory_of_syntax", "wrote")

	addProperty(sampleJSON, "traditional_grammarians_discussed_pie", dataProp, "traditional_grammarians", "pie", "discussed")

	outJSON = open(outFile, mode="w", encoding= "utf8")
	json.dump(sampleJSON, outJSON)


def addItem(json, itemID, typeID, label, iri = False):
	json["class"].append({"id" : itemID, "type" : typeID})
	json["classAttribute"].append({"label" : label, "id" : itemID})
	if url:
		json["classAttribute"][-1]["iri"] = iri

def addProperty(json, propertyID, typeID, domainID, rangeID, label):
	json["property"].append({"id" : propertyID, "type" : typeID})
	json["propertyAttribute"].append({"id" : propertyID, "domain" : domainID, "range" : rangeID, "label" : label})




main()