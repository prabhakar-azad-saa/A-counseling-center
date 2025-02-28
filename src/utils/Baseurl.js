// axiosInstance.js
import axios from 'axios';


const Baseurl = axios.create({
  baseURL: 'https://185.127.17.209/Hospital/swagger/index.html', 
  
  headers: {
    'Content-Type': 'application/json',
   
  }
});

export default Baseurl;
