import React, {useState, useEffect} from 'react';
import axios from 'axios';

function News_Notification() {
    const [news, setNews] = useState([]);

const getData = async() =>{
    try {
       const res = await axios.get("http://localhost:5500/api/")
        console.log(res.data);
        
    } catch (error) {
        
    }
}
    useEffect(() => {
        getData()
    }, []);


  return (
      
    <div>
        {
            console.log(news)
        }
    </div>
  )
}

export default News_Notification