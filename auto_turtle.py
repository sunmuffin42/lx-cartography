infile = [i.split(" "*4) for i in open("auto_turtle_in.txt", mode="r").readlines()]
outfile = open("auto_turtle_out.ttl", mode="a")
outfile.writelines("\n")
for item in infile:
    print(item)
    if item[2] == "Class":
        outfile.writelines(item[0]+":"+item[1]+" rdf:type owl:"+item[2]+" ;\n\trdfs:label \""+item[3]+"\"@en ;\n\trdfs:subClassOf "+item[4]+" ;\n\trdfs:comment \""+item[5].strip()+"\"@en .\n")
    elif item[2] == "ObjectProperty":
        outfile.writelines(item[0]+":"+item[1]+" rdf:type owl:"+item[2]+" ;\n\trdfs:label \""+item[3]+"\"@en ;\n\trdfs:domain "+item[4]+" ;\n\trdfs:range "+item[5]+" ;\n\trdfs:comment \""+item[6].strip()+"\"@en .\n")
    else:
        print("Type mismatch")
        break
outfile.close()
