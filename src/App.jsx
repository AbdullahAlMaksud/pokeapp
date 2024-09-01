import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBox from './components/SearchBox';
// import './styles.css';
import loadingImg from '../public/favicon_outline.svg'

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const results = response.data.results;

      const pokemonData = await Promise.all(
        results.map(async (pokemon) => {
          const pokeResponse = await axios.get(pokemon.url);
          return pokeResponse.data;
        })
      );

      setPokemons(pokemonData);
      setLoading(false); // Set loading to false when data is fetched
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto container">
      <div className='flex justify-center mt-5'>
        <h1 className='bg-yellow-500 text-center py-2 px-5 rounded-t-lg text-xl font-semibold '>Pokémon List</h1>
      </div>
      <SearchBox placeholder="Search Pokémon" handleSearchChange={handleSearchChange} />

      {loading ? (
        <div className="flex justify-center mt-10">
          <img src={loadingImg} alt="" className='w-20 motion-safe:animate-spin' />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
