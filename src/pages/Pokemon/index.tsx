import React, { useCallback, useEffect, useState } from 'react'

import { useRouteMatch } from 'react-router-dom';
import Header from '../../components/Header'
import api from '../../services/api';

import { Content, Card, CardBottomSide, CardMidSide, CardTitle, CardTopSide, Stat, StatBar, StatLabel, Types, Stats, Info } from './styles';

import { Link } from 'react-router-dom'

import { CgPokemon } from 'react-icons/cg'
import { IoIosArrowForward } from 'react-icons/io'


interface IPokemonParams {
  pokemon: string;
}


interface IPokemon {
  name: string;
  id: number;
  types: Array<IPokemonsType>;
  sprites: {
    other: IOther;
    } 
  weight: number;
  height: number;
  stats: Array<IPokemonStats>;
  abilities: Array<IPokemonAbilities>; 
  }

interface IPokemonAbilities {
  ability: {
    name: string;
  }
}
 
interface IPokemonStats {
  base_stat: number;
  stat: {
    name: string;
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

interface IPokemonEvolutionChain {
  chain: IPokemonEvolvesTo;
}

interface IPokemonEvolvesTo {
  evolves_to: Array<IPokemonEvolvesTo>;
  species: {
      name: string;
      url: string;
    }
}
interface IEvolution {
  name: string;
  id: number;
  sprite: string;
}

const Pokemon: React.FC = () => {

  const { params } = useRouteMatch<IPokemonParams>()

  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [evolutionChain, setEvolutionChain] = useState<IPokemonEvolutionChain>({} as IPokemonEvolutionChain);
  const [evolutions, setEvolutions] = useState<IEvolution[]>();

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

   const formatWeightAndHeight = useCallback((number)=> {
    return number/10
   },[])




  

  useEffect( ()=> {
    async function loadPokemon() {
      const  pokemon = await api.get(`/pokemon/${params.pokemon}`)
      setPokemon(pokemon.data);

      const speciesUrlReplaced = pokemon.data.species.url.replace('https://pokeapi.co/api/v2/', '')

      const getSpecies = await api.get(`/${speciesUrlReplaced}`)
      
      const evolutionChainUrlReplaced = getSpecies.data.evolution_chain.url.replace('https://pokeapi.co/api/v2/', '')
      
      const { data } = await api.get<IPokemonEvolutionChain>(`/${evolutionChainUrlReplaced}`)

      setEvolutionChain(data);

      


    }

    loadPokemon();
  },[params])


useEffect(() => {
  async function loadEvolutions() {
    const evolution = [];
    if (evolutionChain.chain) {
    const {data: firstEvo} = await api(evolutionChain.chain.species.url);

    if (evolutionChain.chain.evolves_to.length > 0) {
      const { data: secondEvo } = await api(
        evolutionChain.chain.evolves_to[0].species.url
      );

      evolution.push({
        id: firstEvo.id,
        name: firstEvo.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${firstEvo.id}.png`
      });

      evolution.push({
        id: secondEvo.id,
        name: secondEvo.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${secondEvo.id}.png`
      });
    }

    if (
      evolutionChain.chain.evolves_to.length > 0 &&
      evolutionChain.chain.evolves_to[0].evolves_to.length > 0
    ) {
      const { data: thirdEvo } = await api(
        evolutionChain.chain.evolves_to[0].evolves_to[0].species.url
      );

      evolution.push({
        id: thirdEvo.id,
        name: thirdEvo.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${thirdEvo.id}.png`
      });
    }

  setEvolutions(evolution)
}


  }

loadEvolutions();
  
},[evolutionChain])


 


  return (
  <>
  <Header/>
  <Content>
    <Card className={pokemon.types ? pokemon.types[0].type.name : ''}>
      <CardTitle>
        <h1>{pokemon.name}</h1>
        <CgPokemon size={40}/>
        <p>#{pokemon.id && formatId(pokemon.id)}</p>
      </CardTitle>
      <CardTopSide>
        <div className="img-div">
          {pokemon.sprites && <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}></img>}
        </div>
        <Info>
          <div>
            <h3>Abilities</h3>
            {pokemon.abilities && <p>{pokemon.abilities[0].ability.name}</p>}
            {pokemon.abilities && pokemon.abilities.length > 1 && <p>{pokemon.abilities[1].ability.name}</p>}
          </div>

          <div>
            <h3>Physical parameters</h3>
             <p>Weight: {formatWeightAndHeight(pokemon.weight)}kg</p>
             <p>Height: {formatWeightAndHeight(pokemon.height)}m</p>
          </div>
        </Info>
      </CardTopSide>
      <CardMidSide>

        <Stats>
          {pokemon.stats && pokemon.stats.map(stat => {
            return (
            <Stat key={stat.stat.name}>
            <StatLabel>{stat.stat.name}</StatLabel>
            <StatBar base_stat={stat.base_stat}></StatBar>
          </Stat>
          )
          })}
        </Stats>
          
        <Types>
          <h3> Types </h3>
          <div>
             {pokemon.types && <span className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</span>}
             {pokemon.types && pokemon.types[1] && <span className={pokemon.types[1].type.name}> {pokemon.types[1].type.name} </span>}
          </div>
          
        </Types>
      </CardMidSide>
      {!!evolutions?.length && <CardBottomSide>
        <h2>Evolutions</h2>
        <div>
          {evolutions?.map(evolution => {
            if (!(evolution === evolutions[evolutions.length - 1])){
              return (
                <>
              <Link key={evolution.id} to={`/pokemons/${evolution.name}`}>
                <div>
                  <img src={evolution.sprite} alt={evolution.name}></img>
                  <p></p>
                </div>
              </Link>
              <IoIosArrowForward size={30}/>
              </>
            )
            } else {
              return (
              <Link key={evolution.id} to={`/pokemons/${evolution.name}`}>
                <div>
                  <img src={evolution.sprite} alt={evolution.name}></img>
                  <p></p>
                </div>
              </Link>
              ) 
            }
          })}
        </div>
        

      </CardBottomSide>}

    </Card>
   
  </Content>
  
  </>
  )
}

export default Pokemon;