
ontology = JSON.parse(`
{
  "_comment" : "Just a test ",
  "header" : {
    "languages" : [ "en", "undefined" ],
    "baseIris" : [ "http://www.w3.org/2000/01/rdf-schema", "http://visualdataweb.de/test_cases_vowl/ontology/72", "wikipedia.org/wiki" ],
    "iri" : "http://visualdataweb.de/example_ontology/"
  },
  "namespace" : [ ],
  "metrics" : {
    "classCount" : 3,
    "datatypeCount" : 3,
    "objectPropertyCount" : 4,
    "datatypePropertyCount" : 2,
    "propertyCount" : 6,
    "nodeCount" : 3,
    "individualCount" : 0
  },
  
  "class" : [
      { "id" : "author",  "type" : "rdfs:Class" }
    ,{ "id" : "work",  "type" : "rdfs:Class" }
    ,{ "id" : "date_of_birth",  "type" : "rdfs:Datatype" }
    ,{ "id" : "pub_date",  "type" : "rdfs:Datatype" }
    ,{ "id" : "camp_theory", "type" : "rdfs:Class"}
    ,{ "id" : "slogan", "type" : "rdfs:Datatype"}
    ,{ "id" : "place", "type" : "rdfs:Datatype"}
    ,{ "id" : "subject", "type" : "rdfs:Datatype"}
  ],
  
  "classAttribute" : [
      { "label" : "Author", "id" : "author"}
    ,{ "label" : "Work", "id" : "work"}
    ,{ "label" : "Date of Birth", "id" : "date_of_birth"}
    ,{ "label" : "Place", "id" : "place"}
    ,{ "label" : "Publication Date", "id" : "pub_date" }
    ,{ "label" : "Camp/Theory", "id" : "camp_theory"}
    ,{ "label" : "In a nutshell", "id" : "slogan"}
    ,{ "label" : "Subject", "id" : "subject"}
  ],
  
  "property" : [
      { "id" : "was_born_in",  "type" : "owl:datatypeProperty"   }
    ,{ "id" : "worked_in", "type" : "owl:datatypeProperty"}
    ,{ "id" : "was_published_in_year",  "type" : "owl:datatypeProperty"   }
    ,{ "id" : "was_published_in_place",  "type" : "owl:datatypeProperty"   }    
    ,{ "id" : "author_falls_under",  "type" : "owl:objectProperty"   }
    ,{ "id" : "work_falls_under",  "type" : "owl:objectProperty"   }
    ,{ "id" : "wrote",  "type" : "owl:objectProperty"   }
    ,{ "id" : "summarized_by", "type" : "owl:datatypeProperty"}
    ,{ "id" : "built_on", "type" : "owl:objectProperty"}
    ,{ "id" : "went_against",  "type" : "owl:ObjectProperty" }
    ,{ "id" : "introduced_author", "type" : "owl:datatypeProperty"}
    ,{ "id" : "popularized_author", "type" : "owl:datatypeProperty"}
    ,{ "id" : "discussed_author", "type" : "owl:datatypeProperty"}
    ,{ "id" : "introduced_work", "type" : "owl:datatypeProperty"}
    ,{ "id" : "popularized_work", "type" : "owl:datatypeProperty"}
    ,{ "id" : "discussed_work", "type" : "owl:datatypeProperty"}
    ,{ "id" : "was_a_stundent_of", "type" : "owl:objectProperty"}
    ,{ "id" : "inspired", "type" : "owl:objectProperty"}
  ],
  
  "propertyAttribute" : [
      { "id":"was_born_in" , "domain" : "author",  "range" : "date_of_birth", "label": "was born in" }
    ,{ "id":"worked_in" , "domain" : "author",  "range" : "place", "label": "worked in" }
    ,{ "id":"was_published_in_year" , "domain" : "work",  "range" : "pub_date", "label": "was published in the year" }
    ,{ "id":"was_published_in_place" , "domain" : "work",  "range" : "place", "label": "was published in" }
    ,{ "id":"author_falls_under" , "domain" : "author",  "range" : "camp_theory", "label": "supported the theory" }
    ,{ "id":"work_falls_under", "domain" : "work", "range" : "camp_theory", "label": "supported the theory"}
    ,{ "id":"wrote", "domain" : "author", "range" : "work", "label": "wrote"}
    ,{ "id":"summarized_by" , "domain" : "work",  "range" : "slogan", "label": "can be summarized by saying" }
    ,{ "id":"built_on", "domain" : "work", "range" : "work", "label": "built upon"}
    ,{ "id":"went_against", "domain" : "work", "range" : "work", "label": "argued against"}
    ,{ "id" : "introduced_author", "domain" : "author", "range" : "subject", "label" : "introduced"}
    ,{ "id" : "popularized_author", "domain" : "author", "range" : "subject", "label" : "popularized"}
    ,{ "id" : "discussed_author", "domain" : "author", "range" : "subject", "label" : "discussed"}
    ,{ "id" : "introduced_work", "domain" : "work", "range" : "subject", "label" : "introduced"}
    ,{ "id" : "popularized_work", "domain" : "work", "range" : "subject", "label" : "popularized"}
    ,{ "id" : "discussed_work", "domain" : "work", "range" : "subject", "label" : "discussed"}
    ,{ "id" : "was_a_stundent_of", "domain" : "author", "range" : "author", "label" : "was a student of"}
    ,{ "id" : "inspired", "domain" : "author", "range" : "author", "label" : "inspired"}
  ]
  }
  `)

console.log(document.getElementById("existing_nodes"))
var nodes = document.getElementById("existing_nodes")
ontology.classAttribute.forEach(element => {
  console.log(element["label"])
  nodes.insertAdjacentHTML('afterend', "<li>" + element["label"] + "</li>")
});