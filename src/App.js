import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './Url_api/index'
import Details from './componets/Details'
import Photos from "./componets/Photos"

function App() {
   
  const [nasaPhotos, setPhoto]= useState([])
  const[currentPhoto, showPhotoName]=useState(null)



  const openDetails =  async () => {
    const response = await axios.get(
      `${BASE_URL}/?api_key=${API_KEY}`
    );

    showPhotoName(response.data);
  }

  const closeDetails = () => {
    showPhotoName(null)
  }

 useEffect (()=>{
  axios.get(`${BASE_URL}/?api_key=${API_KEY}&date=2012-03-14`)
  .then(res => {
    setPhoto(res.data)
    console.log(res.data)
    
  })
 
  .catch(err => {
    debugger
  }) 
   
 },[])
 
 
 



 console.log(nasaPhotos)
  return (
    <div className="App">
      <header className='main-header'>
        <div className= 'logo'>NASA</div>
      </header>
    <div className='container'>
      <h1>Picture of the day</h1>
      {
        
           <Photos key={nasaPhotos.title} picture={nasaPhotos} open= {openDetails}/>
        
      }
       <button onClick={openDetails}> Learn More </button>
      {
        currentPhoto &&
        <Details key={currentPhoto} picture={currentPhoto} />
        
      }
      <button onClick={closeDetails}> close </button>
    </div>
  
    </div>
  );
}

export default App;
