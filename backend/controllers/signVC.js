const axios = require("axios")

exports.SIGNVC = (req,res) => {
    const VC = {
        "unsignedCredential" : req.body.unsignedCredential
    }
    
    var config = {
        method: 'post',
        url: 'https://cloud-wallet-api.prod.affinity-project.org/api/v1/wallet/sign-credential',
        headers: { 
          'Api-Key': '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41', 
          'Content-Type': 'application/json', 
          '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41': 'true',
          'Authorization': `${req.body.accessToken}`

        },
        data : VC
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        return res.send(error)
      });
}