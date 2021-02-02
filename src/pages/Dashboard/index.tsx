import React, {useState, useEffect, useCallback } from 'react'

import api from './../../services/api';

import Header from '../../components/Header'
import { Content, Card } from './styles';

import { Link } from 'react-router-dom'


interface IPokemonsURL {
    url: string;
}

interface IPokemons {
  name: string;
  id: number;
  types: Array<IPokemonsType>;
  sprites: {
    other: IOther;
    }
  }

interface IPokemonsType {
  slot: number;
  type: {
    name: string;
  }
}

interface IOther {
  'official-artwork': {
    front_default: string;
  }
}
// homepage
const Dashboard: React.FC = () => {
  // the state of an array of the pokemons' url
  const [pokemonsUrl, setPokemonsUrl] = useState<IPokemonsURL[]>([])
  // the state where all the pokemons are stored
  const [pokemons, setPokemons] = useState<IPokemons[]>([])

  // the first load of the api, since the data is not complete if you just load the pokemons.
  useEffect(()=> {
    // creating a async function cause useEffect does not recommend using async.
    async function loadApi() {
      // load all 898 pokemons
      const { data } = await api.get('/pokemon?limit=898');
      // get the results and filter bibarel, because he's now bugging the api. an issue has been sent to pokeapi github.
      const results = data.results.filter((pokemon: { name: any; }) => pokemon.name !== 'bibarel')
      //set pokemons url in the state
      setPokemonsUrl(results)
    }

    loadApi();
  },[])

  useEffect(() => {
      async function loadPokemons() {
        // promise.all because is setting a long array in a state, otherwhiste it will cause the array to bem a Promise<fullfilled>
        Promise.all(pokemonsUrl.map(async (pokemon) => {
          // since the url return the complete url i'm removing the part where the api starts.
          const urlReplaced = pokemon.url.replace('https://pokeapi.co/api/v2/', '')
          const { data } = await api.get(urlReplaced)
          return data
          // storing all the pokemon in that state.
        })).then(response => setPokemons(response))
      
      }
      
      loadPokemons()

     },[pokemonsUrl])

     // formating the id to be #001 or #010 or #100
  const formatId = useCallback((number)=> {
      return String(number).padStart(3, '0')

     },[])


  return (
  <>
  <Header/>

  <Content>

{pokemons && pokemons.map(pokemon => {
  return (
      <Link to={`/pokemons/${pokemon.name}`} >
          <Card key={pokemon.id} className={pokemon.types[0].type.name}>
            
            <section>
              <img loading="lazy" src={pokemon.sprites.other['official-artwork'].front_default} alt=""/>
            </section>
            <section>
              <p>#{formatId(pokemon.id)}</p>
              <div>
                <span className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</span>
                 {pokemon.types[1] && <span className={pokemon.types[1].type.name}> {pokemon.types[1].type.name} </span>}
              </div>
            </section>
            <section>
              <h1>{pokemon.name}</h1>
  
            </section>
          </Card>
          </Link>
          
          )})
          }

  </Content>
  

  </>
  )
}

export default Dashboard