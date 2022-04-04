import React, {useState, useEffect} from 'react';
import axios from 'axios';

function News_Notification() {
    const [news, setNews] = useState([]);

    useEffect(() => {
         axios.get("http://localhost:5500/api")
        .then((res) => setNews(res.data))
        .catch(err => console.log("message",err))
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