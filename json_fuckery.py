from json import load, loads, dump, dumps

def main():
	myjson= open("myjson.json", mode="r", encoding="utf8")
	newjson= open("myjson2.json", mode="w", encoding="utf8")
	this = load(myjson)
	for i in this["class"]:
		for j in this["classAttribute"]:
			if i["id"] == j["id"]:
				j["type"] = i["type"]
				j["category"] = i["category"]
				i["label"] = j["label"]
	for i in this["property"]:
			for j in this["propertyAttribute"]:
				if i["id"] == j["id"]:
					j["type"] = i["type"]
					i["domain"] = j["domain"]
					i["range"] = j["range"]
					i["label"] = j["label"]

	dump(this, newjson)
main()