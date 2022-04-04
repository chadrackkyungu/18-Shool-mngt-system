import React, { useState } from "react";
import axios from "axios";

function admin() {
 
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //! after image upload code
    const formData = new FormData();
    formData.append('articleImage', fileName);

    //! here am submiting the user input to my database
     axios.post('http://localhost:5500/api/add', formData ) 
    .then(res =>console.log(res.data))
    .catch(err => console.log(err))
  };

  return(
      <form  onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="file" id="fileInput" 
            name="articleImage"
            onChange={(e) => setFileName(e.target.files[0])}
          />
        <button  type="submit">Publish</button>
      </form>
  )
}

export default admin;