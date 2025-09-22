/* eslint-disable react-hooks/exhaustive-deps */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { api, api_key } from './api/api';
import { useEffect, useState } from 'react';


function App() {
  
  const [country,setCountry]=useState('Mandalay');
  const [data,setData]=useState({});

  const fetchweather=async(country_name)=>{
    
      if(country_name !== undefined){
         setCountry(country_name)
      }
      try{
          const res=await api.get(`/weather?q=${country}&appid=${api_key}`)
          setData(res.data)
      }catch(err){
        console.log("error message")
      }
      
    }

  useEffect(()=>{
    fetchweather()
   },[country])

  return (
   <>
       <div className='w-full min-vh-100 d-flex justify-content-center align-items-center' >
      <div className='shadow-lg bg-light gap-4'>
         <Form fetchweather={fetchweather}/>
         <Card data={data}/>
      </div>
    </div>
   </>
  );
}

export default App;

//d37aa948dc260bc083fdeb6e94b79ae3
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}