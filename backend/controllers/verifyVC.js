const axios = require("axios")
exports.VERIFYVC = (req,res) =>{
    const VC = {
        "verifiableCredentials":[
            req.body.signedCredential
        ]
    }

    var config = {
        method: 'post',
        url: 'https://affinity-verifier.prod.affinity-project.org/api/v1/verifier/verify-vcs',
        headers: { 
          'Api-Key': '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41', 
          'Content-Type': 'application/json', 
          'Authorization': req.body.accessToken
        },
        data : VC
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
        return res.send(error)
      });
}