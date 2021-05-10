const axios = require('axios');

exports.CREATEVC = (req,res)=>{
    const VC = JSON.stringify({
        "type": "IDDocumentCredentialPersonV1",
        "data": {
          "@type": [
            "Person",
            "PersonE",
            "IDDocumentPerson"
          ],
          "hasIDDocument": {
            "@type": [
              "Role",
              "IDDocumentRole"
            ],
            "authenticationResult": "result",
            "selfieImage": "base64:...",
            "faceMatch": {
              "@type": "IDDocumentFaceMatch",
              "isMatch": true,
              "score": 100,
              "identifier": 1234
            },
            "hasIDDocument": {
              "@type": [
                "CreativeWork",
                "IDDocument"
              ],
              "issuer": {
                "@type": "State",
                "name": "Covid Result"
              },
              "documentType": "covid",
              "issueDate": "5/4/2021",
              "issueType": "health",
              "expirationDate": "date",
              "classificationMethod": "automatic",
              "idClass": "covid_certificate",
              "idClassName": "className",
              "countryCode": "code",
              "frontImage": "base64:...",
              "backImage": "base64:...",
              "generic": true,
              "keesingCode": "code"
            }
          },
          "name": req.body.username
        },
      "holderDid": req.body.did});

      
      
      var config = {
        method: 'post',
        url: 'https://affinity-issuer.prod.affinity-project.org/api/v1/vc/build-unsigned',
        headers: { 
          'Content-Type': 'application/json', 
          'Api-Key': '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41', 
          '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41': 'true'
        },
        data : VC
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data)
      })
      .catch(function (error) {
        console.log(error);
        return res.status(500).send(error)
      });
      
}