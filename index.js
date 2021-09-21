import React, { Fragment } from "react";
import axios from "axios";

const App = () => {    
    const pinJSONToIPFS = (JSONBody) => {
      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
      axios 
        .post(url, JSONBody, {
          headers: {
            pinata_api_key: "3bfc7830a2bcfe156bf3",
            pinata_secret_api_key: "8202b4d43e9108df1118dbee63909b544239bed21b3f799e3c2ebe78ed16ecdb",
          }
        })
        .then(function (response) {
          return {
            success: true,
            pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
          };
        })
        .catch(function (error) {
          console.log(error)
          return {
            success: false,
            message: error.message,
          }
        })
    }
    return(
        <Fragment>
          <button onClick={() => pinJSONToIPFS(null, "string")}>
            pinJSONToIPFS
          </button>
        </Fragment>
    )
}

export default App;