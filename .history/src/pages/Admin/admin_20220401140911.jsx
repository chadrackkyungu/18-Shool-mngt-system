import React, { useState } from "react";
import axios from "axios";

function admin() {
  const [fileName, setFileName] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('articleImage', fileName);
    const url = "http://localhost:5500/api/add";

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
      })
      .then(json)
      .then(function (data) {
      console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
      console.log('Request failed', error);
      });
  };

  return(
    <div >
       <h1 style={{textAlign:"center", margin: "2em"}}>CREATE NEW POST</h1>

      <form  onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="file" id="fileInput" 
            // name="articleImage"
            fileName="articleImage"
            onChange={(e) => setFileName(e.target.files[0])}
          />
        <button  type="submit">Publish</button>
      </form>
      
  </div>
  )
}

export default admin;