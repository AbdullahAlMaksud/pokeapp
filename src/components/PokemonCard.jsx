import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border shadow-sm rounded-md p-5 flex flex-col justify-start items-center shadow-black/20 hover:scale-105 hover:duration-500 hover:ease-in-out ease-in-out duration-500">
      <img src={pokemon.sprites.front_default} className=' h-32 rounded-md' alt={pokemon.name} />
      <div className='mt-2 w-full flex items-center flex-col'>
        <p className='text-xs rounded w-fit bg-yellow-400 px-1'>ID: {pokemon.id}</p>

        <h2 className='text-lg capitalize font-bold'>{pokemon.name}</h2>
        <div className="space-x-1">
          {pokemon.types.map((typeInfo) => (
            <span key={typeInfo.slot} className="text-xs rounded-sm uppercase border border-yellow-400 px-1">
              {typeInfo.type.name}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PokemonCard;
