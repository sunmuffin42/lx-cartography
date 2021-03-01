filename = ""
items = open(filename, mode="r").readlines()
classes = sorted(
    [i[:i.index("rdf:")] + "\n" 
        for i in items
        if "rdf:type owl:Class" in i
    ]
)

properties = sorted(
    [i[:i.index("rdf:")] + "\n"
        for i in items
        if "rdf:type owl:ObjectProperty" in i
    ]
)

classes = open("Classes-" + filename[:-4] + ".txt", mode="w")
properties = open("Properties-" + filename[:-4] + ".txt", mode="w")

for i in classes:
    classes.writelines(i)
classes.close()

for i in properties:
    properties.writelines(i)
properties.close()
