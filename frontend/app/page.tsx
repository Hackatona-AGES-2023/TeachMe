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

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [topics, setTopics] = useState<Array<ITopic>>([]);
  const [step,setStep] = useState(0);
const [loading,setLoading] = useState(false);
  const onSubmit = async () => {
    //todo:call backend
    const trail_ :ITrail = {id:"",title:"sdfsdfsdfsdfsdf",progress:{done:0,total:10,pending:10},steps:[{title:"sdfsdfsdfsd ",topics:[{content:"sdfsdfsdfsdfs",title:'sdfsdfsdfdsfs'}]}]}

    setTopics(trail_.steps[step].topics) 

    setSubmitted(true);
  
  };


   
  const handleClick = async () => {};

  const trails:Array<{open:boolean,id:string,topic:string,progress:{done:number,total:number}}> = [
    {open:false,id:"eeee",topic:"teste",progress:{done:0,total:10}},
    {open:false,id:"234234234",topic:"teste",progress:{done:0,total:10}}
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
    <div className="flex flex-col justify-center">
      <Header />
      <div className="flex">
        
       <Trails onPress={onTrailPress} trails={trails} addTrailPress={addTrailPress}/>
      
        {loading?<LoadingPage />:(submitted ? (
          <TrailPage topics={topics} handleClick={handleClick} />
        ) : (
          <LandingPage onSubmit={onSubmit} />
        ))}
      </div>
    </div>
  );
}
