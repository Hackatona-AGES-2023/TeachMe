import { Book, BookOpen, PlusCircle } from '@phosphor-icons/react';
import React, { useCallback, useState } from 'react';


function Trail (props:{isTrailOpen:boolean,topic: string,progress:{done:number,total:number},trailId:string,onPress:(id:string)=>Promise<void>}){

  return (
    <div onClick={async ()=>{props.onPress(props.trailId)}} className='rounded-lg flex flex-row p-5 bg-bgreen-1 hover:opacity-80'> 
      {props.topic} {props.progress.done}/{props.progress.total}
      {props.isTrailOpen?<BookOpen className = "pl-1" size={30}/>:<Book className = "pl-1" size={30}/>}
    </div>
  )
}

const Trails = (props:{trails:Array<{open:boolean,id:string,topic:string,progress:{done:number,total:number}}>,onPress:(id:string)=>Promise<void>,addTrailPress:()=>void}) => {
  const [trails,setTrails] = useState<Array<{open:boolean,id:string,topic:string,progress:{done:number,total:number}}>>(props.trails) 
  const onPress =async(id:string)=>{
    const aux = [...trails]

    aux.forEach((trail,i)=>{
      if (trail.id == id){
        aux[i].open = true;
      }else{
        aux[i].open = false;
      }
    })

    await props.onPress(id)

    setTrails(aux)
}




  return (
    
    <div className="grid pl-2 grid-flow-row gap-4 h-full bg-white ">
    <div/>
    {trails.map((trail)=>{
      return(
        <Trail onPress={onPress} isTrailOpen={trail.open} trailId={trail.id} topic={trail.topic}  progress={trail.progress}/>
      )
    })}

<div onClick={()=>{
  onPress("");
  props.addTrailPress()}} className='rounded-lg flex flex-row p-5 bg-bgreen-1   justify-center   hover:opacity-80 '> 
      <PlusCircle size={32} weight={"regular"} />
    </div>

    </div>
  );
};

export default Trails;
