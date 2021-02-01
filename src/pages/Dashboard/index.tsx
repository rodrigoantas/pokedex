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

const Dashboard: React.FC = () => {
  const [pokemonsUrl, setPokemonsUrl] = useState<IPokemonsURL[]>([])
  const [pokemons, setPokemons] = useState<IPokemons[]>([])

  useEffect(()=> {
    async function loadApi() {
      const { data } = await api.get('/pokemon?limit=898');
      const results = data.results
      
      setPokemonsUrl(results)

    }

    loadApi();
  },[])

  useEffect(() => {
      async function loadPokemons() {
        Promise.all(pokemonsUrl.map(async (pokemon) => {
          const urlReplaced = pokemon.url.replace('https://pokeapi.co/api/v2/', '')
          const { data } = await api.get(urlReplaced)
          return data
        })).then(response => setPokemons(response))
      
      }
      
      loadPokemons()

     },[pokemonsUrl])

  const formatId = useCallback((number)=> {
      const stringNumber = number.toString()
      if (stringNumber.length === 1) {
        return `00${stringNumber}`
      }
      if (stringNumber.length === 2) {
        return `0${stringNumber}`
      }
      if (stringNumber.length === 3) {
        return stringNumber
      }

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
          </Link>)})
          }

  </Content>
  

  </>
  )
}

export default Dashboard