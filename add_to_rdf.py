import json

datatype = "rdfs:Datatype"
owlClass = "owl:Class"
dataProp = "owl:datatypeProperty"
objProp = "owl:objectProperty"

def main():
	inFile = "C:\\Users\\Sunny Ananth\\Documents\\Programming\\WebVOWL\\lx_cartography_sample.json"
	outFile = "C:\\Users\\Sunny Ananth\\Documents\\Programming\\WebVOWL\\lx_cartography_sample2.json"

	sample = open(inFile, mode="r", encoding = "utf8")
	sampleJSON = json.load(sample)
	#addItem(sampleJSON, "de_saussure_dob", datatype, "1857")
	#addProperty(sampleJSON, "dob_de_saussure", dataProp, "saussure", "de_saussure_dob", "was born in")


	outJSON = open(outFile, mode="w", encoding= "utf8")
	json.dump(sampleJSON, outJSON)

def addItem(json, itemID, typeID, label):
	json["class"].append({"id" : itemID, "type" : typeID})
	json["classAttribute"].append({"label" : label, "id" : itemID})

def addProperty(json, propertyID, typeID, domainID, rangeID, label):
	json["property"].append({"id" : propertyID, "type" : typeID})
	json["propertyAttribute"].append({"id" : propertyID, "domain" : domainID, "range" : rangeID, "label" : label})




main()