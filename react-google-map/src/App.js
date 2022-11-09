import React from 'react'
import { useLoadScript, GoogleMap, Marker} from '@react-google-maps/api'
import data from "./server.json"
import "./App.css"


const containerStyle = {
  width: '100%',
  height: '100%'
};
const center = {
  lat: 35.467234,
  lng: -119.2093876
};

function App() {
  //console.log(data);
  const { isLoaded} = useLoadScript({
    //googleMapsApiKey: "AIzaSyD3Cjx1GCbOWpt9atq1QMbUfOyxsLPoIIs" // ,
    id: "google-map-script",
     googleMapsApiKey: "AIzaSyDykLcSVPpD9Kw0VoZUkrlpMOCKOVWs7Bg",
    // ...otherOptions
  })
  if (!isLoaded) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }
  return(
      <>
      <div className='map'>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            options={{
              streetViewControl:false
            }}
           >
            {data.map((item,index) => (
                <Marker
                key={index}
                position={{
                    lat: item.latitude,
                    lng: item.longitude
                  }}
             >
             </Marker>
              ))}
               
            </GoogleMap> 
          
      </div>
      </>
  );
}
export default App