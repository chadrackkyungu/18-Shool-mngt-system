import React, { useState } from "react";
import axios from "axios";

function admin() {
 
  // const [title, setTitle] = useState("");
  // const [authorname, setAuthorName] = useState("");
  // const [category, setCategory] = useState("");
  // const [article, setArticle] = useState("");
  const [fileName, setFileName] = useState("");

  console.log(fileName);

  const handleSubmit = (e) => {
    e.preventDefault();

    //!before image upload
    // const post_data = {title, authorname, category, article} //before image upload

    //! after image upload code
    const formData = new FormData();
    // formData.append('title', title);
    // formData.append('authorname', authorname);
    // formData.append('category', category);
    // formData.append('article', article);
    formData.append('articleImage', fileName);

    console.log(formData);

    //! clear input after submitting to the database
    // setTitle("");
    // setAuthorName("");
    // setCategory("");
    // setArticle("");

    //! here am submiting the user input to my database
    // axios.post('http://localhost:5000/api/add', post_data ) before
    axios.post('http://localhost:5000/api/add', formData ) //after image upload codes
    .then(res =>setMessage(res.data))
    .catch(err => setError(err))
  };


  return(
    <div className="write">
       <h1 style={{textAlign:"center", margin: "2em"}}>CREATE NEW POST</h1>

    <form  onSubmit={handleSubmit} encType="multipart/form-data">
      <div>

      <div>
       
       </div>

        <input
          type="file" id="fileInput" 
          fileName="articleImage"
          onChange={(e) => setFileName(e.target.files[0])}
        />

    <div >
        {/* <input type="text" placeholder="Enter News Title"  autoFocus={true} value={title}
          onChange={e=>setTitle(e.target.value)}
        /> */}
        {/* <br />
        <br />
        <input type="text" placeholder="Your name"  autoFocus={true} value={authorname}
          onChange={e=>setAuthorName(e.target.value)}
        /> */}
        {/* <br />
        <br />
        <input type="text" placeholder="Category"  autoFocus={true} value={category}
          onChange={e=>setCategory(e.target.value)}
        /> */}
    </div>

      </div>

     <div >
      {/* <div className={styles.writeFormGroup}>
        <textarea
          placeholder="Tell your story..." type="text"
          onChange={e=>setArticle(e.target.value)} rows="20" cols="50"
          value={article}
          ></textarea>
      </div> */}

      <button  type="submit">Publish</button>
      </div>
    </form>
  </div>
  )
}

export default admin;