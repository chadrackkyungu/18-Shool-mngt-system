import React, { useState } from "react";
// import Image from 'next/image';
import styles from '../css/Write.module.css';
// import Upload_Img from '../images/Home.jpg';
// import Upload_icon from '../images/1741345.png';
import axios from "axios";

function admin() {
 
  // const [title, setTitle] = useState("");
  // const [authorname, setAuthorName] = useState("");
  // const [category, setCategory] = useState("");
  // const [article, setArticle] = useState("");
  const [fileName, setFileName] = useState("");

  console.log(fileName);

  const [error, setError] = useState(false);
  const [message, setMessage] = useState(""); 

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
       <p style={{color:"brown", textAlign:"center", marginBottom:"2em"}}>{message}</p>

       
      {
        fileName && (
          <img
            className="writeImg"
            src={URL.createObjectURL(fileName)}
            alt=""
          />
        )
      }

{error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}

      {/* this -> encType="multipart/form-data"  it is very importante */}
    <form className={styles.writeForm} onSubmit={handleSubmit} encType="multipart/form-data">
      <div className={styles.writeFormGroup}>

      <div className={styles.upload}>
        <h1>Upload Image</h1>
        <img className={styles.img_upload} src={Upload_icon} alt="banner"/>
       </div>

        <input
          // className={styles.uploadInput}
          type="file" id="fileInput" 
          fileName="articleImage"
          onChange={(e) => setFileName(e.target.files[0])}
        />

    <div className={styles.title_container}>
        <input type="text" placeholder="Enter News Title" className={styles.writeInput} autoFocus={true} value={title}
          onChange={e=>setTitle(e.target.value)}
        />
        <br />
        <br />
        <input type="text" placeholder="Your name" className={styles.writeInput} autoFocus={true} value={authorname}
          onChange={e=>setAuthorName(e.target.value)}
        />
        <br />
        <br />
        <input type="text" placeholder="Category" className={styles.writeInput} autoFocus={true} value={category}
          onChange={e=>setCategory(e.target.value)}
        />
    </div>

      </div>

     <div className={styles.write_container}>
      <div className={styles.writeFormGroup}>
        <textarea
          placeholder="Tell your story..." type="text" className={styles.writeInput}
          onChange={e=>setArticle(e.target.value)} rows="20" cols="50"
          value={article}
          ></textarea>
      </div>

      <button className={styles.writeSubmit} type="submit">Publish</button>
      </div>
    </form>
  </div>
  )
}



export default admin;


