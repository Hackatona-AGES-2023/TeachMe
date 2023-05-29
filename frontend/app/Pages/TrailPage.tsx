import React from 'react';
import Image from 'next/image';
import { CaretRight } from '@phosphor-icons/react';


function Card(props:{text:string}){
  console.log(props.text)

  return (  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <p className="text-gray-700 text-base">
      {props.text}
    </p>
  </div>

</div>)
}

const TrailPage = (props: { handleClick: () => Promise<void>,topics:Array<{title:string,content:string}> }) => {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <div className="flex flex-1 mt-10 items-center flex-col">
      <Image src="/Frame1.svg" alt="Fluxo" width={500} height={500} />
      
      {props.topics.filter(topic=>{return topic.content&&topic.content.length>0}).map(topic=>{
        console.log(topic)
        return(<Card text={topic.content}/>)
      })}


<div onClick={handleClick} className='mt-10 rounded-lg flex flex-row p-5 bg-bgreen-1 hover:opacity-80'> 
<CaretRight size={32} weight="regular" />
</div>
    </div>
  );
};

export default TrailPage;
