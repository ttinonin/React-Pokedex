import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [post, setPost] = useState([])
  const [pokemon, setPokemon] = useState(1)
  const [sprite, setSprite] = useState("")
  const [type, setType] = useState("")

  useEffect(() => {
    setPokemon(1)
  }, [])

  const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setPost(res.data)
        setSprite(res.data.sprites.front_default)
        setType(res.data.types[0].type.name)
      })
  }, [pokemon])
  
  return (
    <div>
      <div className='header'>
        <h1>React Pokedex!</h1>
      </div>
      <div className='index__body'>
        <h2>{post.name}</h2>
        <img className='img' src={sprite}/>
        <p>Type: {type}</p>
        <input type="number" placeholder="Pokemon No." autoFocus autoComplete='off' className='query' onChange={(e) => setPokemon(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
