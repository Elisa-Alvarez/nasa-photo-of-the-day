import React,{useState, useEffect} from "react";
import Container from './componets/Style_Componets'
import axios from 'axios'
import { BASE_URL, API_KEY } from './Url_api/index'
import Details from './componets/Details'
import Photos from "./componets/Photos"
import image from "./images/favicon-192.png"
import {Button} from "reactstrap"
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
    <Container className="App">
      <header className='main-header' style={{display:`flex`, justifyItems:`center`, alignContent:`center`}}>
        <div className= 'logo' style={{width:`5%`}} >
        <img  style={{width:`95%`, height: `10vh`, marginLeft:`1rem`}}src={image} alt="nasa-logo" />
         </div>
         <h1 style={{fontFamily:`Space Mono, monospace`,marginLeft:`1rem`,  marginTop: `0.8rem`}}> NASA  </h1>
      </header>
    <div className="main-content" style={{display:`flex`, flexDirection:`column `,alignItems:`center`}} >
      <h1 style={{fontFamily:`Space Mono, monospace`, alignItems:`center`,}}>Picture of the day</h1>
      {
        
           <Photos key={nasaPhotos.title} picture={nasaPhotos} open= {openDetails}/>
        
      }
       <button class="btn btn-info btn-lg" style={{marginTop:`1rem`}} onClick={openDetails}> Learn More </button>
      {
        currentPhoto &&
        <Details key={currentPhoto} picture={currentPhoto} />
        
      }
      <button class="btn btn-info btn-lg" style={{marginTop:`1rem`}} onClick={closeDetails}> Close </button>
    </div>
  
    </Container>
  );
}

export default App;
