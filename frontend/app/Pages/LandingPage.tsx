import React from 'react';
import Image from 'next/image';
import SearchBar from '../Componentes/SearchBar';

const LandingPage = (props: { onSubmit: () => Promise<void> }) => {
  return (
    <div className="flex flex-1 mt-20 items-center flex-col">
      <div className="text-center text-5xl font-bold mb-20">
        Seja bem vindo, CICLANO!
      </div>
      <SearchBar onSubmit={props.onSubmit} />
      <div className="mt-20">
        <Image src="/fluxo.svg" alt="etapas" width={400} height={400} />
      </div>
    </div>
  );
};

export default LandingPage;
