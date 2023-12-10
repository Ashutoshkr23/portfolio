import React from 'react';
import Image from 'next/image';

function SkillComp({ img, name }) {
  return (
    <div className='h-60 w-60 bg-black flex justify-center items-center'>
      <div className='h-[220px] w-[200px] relative  bg-black border-green-2 border rounded-md '>
        <div className='flex flex-col items-center'>
        <img src={img} alt="name" className='h-40 w-40' />
        <p className='text-3xl font-bold bg-gradient-to-r from-green to-green-2 bg-clip-text text-transparent'>
          {name}
        </p>
        </div>
      </div>
    </div>
  );
}

export default SkillComp;
