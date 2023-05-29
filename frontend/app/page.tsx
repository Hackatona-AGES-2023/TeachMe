'use client';

import { useCallback, useState } from 'react';
import Header from './Componentes/Header';

import SearchBar from './Componentes/SearchBar';
import Trails from './Componentes/Trails';
import { ITopic } from './interfaces/topic-interface';
import { ITrail } from './interfaces/trail-interface';
import LandingPage from './Pages/LandingPage';
import LoadingPage from './Pages/LoadingPage';
import TrailPage from './Pages/TrailPage';
import axios from "axios"

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [topics, setTopics] = useState<Array<ITopic>>([]);
  const [step,setStep] = useState(0);
const [loading,setLoading] = useState(false);

  const onSubmit = async (topic:string) => {
    setLoading(true)
  
    try{
      
     const response =  await axios.post("http://localHost:8080/v1/trail/af4d299a-211e-49e4-8212-dfea1ddf6f2ca",{
        topic
      })

      if(response.status != 200){
        throw new Error(response.data.error.message as string)
      }


      const trail:ITrail =response.data

      console.log(JSON.stringify(trail,null,4))

      setTopics(trail.steps[step].topics) 

      setSubmitted(true);

    }catch(err:any){
      console.log(err);
      window.alert(err.message);
    }
 
    setLoading(false)

  
  };


   
  const handleClick = async () => {};

  const trails:Array<{open:boolean,id:string,topic:string,progress:{done:number,total:number}}> = [
    {open:false,id:"eeee",topic:"Biologia química",progress:{done:5,total:10}},
    {open:false,id:"234234234",topic:"Fisica quantica",progress:{done:2,total:10}}
  ]

  const onTrailPress = async (id:string)=>{


    
    const trail_ :ITrail = {id:"",title:"sdfsdfsdfsdfsdf",progress:{done:0,total:10,pending:10},steps:[{title:"sdfsdfsdfsd ",topics:[{content:"sdfsdfsdfsdfs",title:'sdfsdfsdfdsfs'}]}]}

    setTopics(trail_.steps[step].topics)
    setSubmitted(true)
    
  }  


  const addTrailPress = ()=>{
    setSubmitted(false)

  }


  return (
    <>
          <Header />
<div className='h-24'/>
    <div className="flex flex-col justify-center">
      <div className="flex">
        
       <Trails onPress={onTrailPress} trails={trails} addTrailPress={addTrailPress}/>
      
        {loading?<LoadingPage />:(submitted ? (
          <TrailPage topics={topics} handleClick={handleClick} />
        ) : (
          <LandingPage onSubmit={onSubmit} />
        ))}
      </div>
    </div></>
  );
}
