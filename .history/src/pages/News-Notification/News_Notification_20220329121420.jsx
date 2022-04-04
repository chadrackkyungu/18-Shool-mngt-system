import React, {useState, useEffect} from 'react';
import axios from 'axios';

function News_Notification() {
    const [news, setNews] = useState([]);

const getData = async() =>{
    try {
        const response = await fetch('http://localhost:5500/api/');
        const data = await response.json();
        setNews(data);
        
    } catch (error) {
        console.log(error, "message");
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