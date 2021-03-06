{\rtf1\ansi\ansicpg1252\deff0\deflang1033\deflangfe1033{\fonttbl{\f0\fswiss\fprq2\fcharset0 Calibri;}}
{\colortbl ;\red0\green0\blue255;}
{\*\generator Msftedit 5.41.21.2510;}\viewkind4\uc1\pard\nowidctlpar\sa200\sl276\slmult1\lang9\b\f0\fs22 To get the list of services exposed\par
\b0{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/services"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/services}}}\f0\fs22\par
\par
To get the services and their path with actions\par
{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/api/list-aliases"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/api/list-aliases}}}\f0\fs22\par
\b To get the list of nodes\par
\b0   {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/list"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/list}}}\f0\fs22\par
\b Formatted output with curl\par
\b0 Install json formatter\par
>npm i -g json\par
curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/list"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/list}}}\f0\fs22  | json\par
\par
Curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/services"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/services}}}\f0\fs22  | json\par
\b Get the list of actions in services\par
\par
\b0{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/actions"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/actions}}}\lang1033\f0\fs22\par
\lang9\b With curl from cmd line\par
\b0 Curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/actions"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/actions}}}\f0\fs22  | json\par
\par
\b Get the list of events\par
\b0{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/events"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/events}}}\f0\fs22\par
\par
Get the healthe status\par
{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/health"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/health}}}\f0\fs22\par
\par
\b Get the list of options\par
\b0{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/options"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/options}}}\f0\fs22\par
\par
\b Get the service metrices\par
\b0{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/~node/metrics"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/~node/metrics}}}\f0\fs22\par
\par
\par
\par
\par
\par
\par
\par
\ul\b Test REST API with Curl tool\par
Get all the records\par
\ulnone\b0 curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/}}}\f0\fs22\par
To get formmated output\lang1033\par
\lang9 curl -i  {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/}}}\f0\fs22\par
curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products}}}\f0\fs22  | python -m json.tool\par
Install json formatter\par
>npm i -g json\par
curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products}}}\f0\fs22  | json\par
Get the record for item with id\par
curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/LAm5VVZwvD1JUOut"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/LAm5VVZwvD1JUOut}}}\f0\fs22\par
curl {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/LAm5VVZwvD1JUOut"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/LAm5VVZwvD1JUOut}}}\f0\fs22  | json\par
with user and password in HTTP URL\par
curl {\field{\*\fldinst{HYPERLINK "http://name:passwd@localhost:3000/api/products/LAm5VVZwvD1JUOut"}}{\fldrslt{\ul\cf1 http://name:passwd@localhost:3000/api/products/LAm5VVZwvD1JUOut}}}\f0\fs22\par
\b POST new Data\par
\b0 curl --header "Content-Type: application/json"   --request POST   --data "\{\\"name\\":\\"xyz\\",\\"price\\": 23, \\"quantity\\":67\}" {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/}}}\f0\fs22\par
\par
curl --header "Content-Type: application/json"   --request POST   --data "\{\\"name\\":\\"MoTo\\",\\"price\\": 133, \\"quantity\\":33\}" {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/}}}\f0\fs22\par
\par
\b POST new Data from File\par
\b0 curl -X POST -H "Content-Type: application/json" -d @model.json \lang1033\fs24{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products}}}\f0\fs24\par
\b Update data with PUT method\par
\lang9\b0\fs22 curl --header "Content-Type: application/json"   --request PUT   --data "\{\\"name\\":\\"Bania\\",\\"price\\": 176, \\"quantity\\":109\}" {\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/34tn134p46tPAC7y"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/34tn134p46tPAC7y}}}\f0\fs22\par
\lang1033\fs24\par
\b Update with method : \lang9\fs22 PUT new Data from File\par
\b0 curl -X PUT -H "Content-Type: application/json" -d @model.json \lang1033\fs24{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/34tn134p46tPAC7y"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/\lang9\fs22 34tn134p46tPAC7y}}}\cf1\ul\f0\fs22\par
\ulnone\b Delete the existing fecord\par
\cf0\b0 curl -X DELETE  \lang1033\fs24{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/products/34tn134p46tPAC7y"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/products/\lang9\fs22 34tn134p46tPAC7y}}}\lang1033\f0\fs24\par
Test with api service\par
\lang9\fs22{\field{\*\fldinst{HYPERLINK "http://localhost:3000/api/nodes/"}}{\fldrslt{\ul\cf1 http://localhost:3000/api/nodes/}}}\cf1\ul\f0\fs22\par
\ulnone                                                                      ***********\ul\par
\par
\cf0\lang1033\ulnone\fs24\par
\par
\par
\par
\lang9\fs22\par
\par
 \par
\par
}
 