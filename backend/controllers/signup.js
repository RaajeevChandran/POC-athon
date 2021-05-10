const axios = require("axios")


exports.SIGNUP = (req,res) => {
    var data = JSON.stringify({
        "username": req.body.username,
        "password": req.body.password,
        "options": {
          "didMethod": "elem"
        },
        "messageParameters": {
          "message": "<string>",
          "subject": "<string>",
          "htmlMessage": "<string>"
        }
      });
      
      var config = {
        method: 'post',
        url: 'https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/signup',
        headers: { 
          'Api-Key': '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41', 
          'Content-Type': 'application/json', 
          '4b72e3fb03d3f6de8dd146b4034c9bac596f98d29d9ea6bc7c8b7d8ac7762b41': 'true'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        return res.status(500).send(error);
      });
 
      
}