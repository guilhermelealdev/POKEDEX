import { useEffect, useState } from "react";
import "./componentes.css";
import { PokemonCardSimples } from "./PokemonCardSimples";

export function PokemonContainer() {
  const [pokemon, setPokemon] = useState(null);
  let [idPokemon, setIdPokemon] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemon(dados);
      });
  }, []);

  if (!pokemon) {
    return <p>Carregando pokemon. . .</p>;
  }

  function proximoPokemon() {
    setIdPokemon(++idPokemon);
     fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemon(dados);
      });
  }
    function pokemonAnterior() {
    if(idPokemon === 1){
      return;
    }
    setIdPokemon(--idPokemon);
     fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemon(dados);
      });
  }

  return (
    <PokemonCardSimples
      nome={pokemon.name}
      imagem={
        pokemon.sprites.versions["generation-v"]["black-white"]["animated"]
          .front_default
      }
      imagemShiny={
        pokemon.sprites.versions["generation-v"]["black-white"]["animated"]
          .front_shiny
      }
      numero={pokemon.id}
      altura={pokemon.height}
      peso={pokemon.weight}
      tipoUm={pokemon.types[0].type.name}
      tipoDois={pokemon.types[1] ? " / " + pokemon.types[1].type.name : ""}
      habilidadeUm={pokemon.moves[0].move.name}
      habilidadeDois={pokemon.moves[1] ? pokemon.moves[1].move.name : ""}
      habilidadeTres={pokemon.moves[2] ? pokemon.moves[2].move.name : ""}
      habilidadeQuatro={pokemon.moves[3] ? pokemon.moves[3].move.name : ""}
      experiencia={pokemon.base_experience}
      proximoPokemon={proximoPokemon}
      pokemonAnterior={pokemonAnterior}
    />
  );
}
