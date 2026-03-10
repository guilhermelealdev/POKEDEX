import { useEffect, useState } from "react";
import "./componentes.css";
import { PokemonCardSimples } from "./PokemonCardSimples";

export function PokemonContainer() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemon(dados);
      });
  }, []);

  if (!pokemon) {
    return <p>Carregando pokemon. . .</p>;
  }
  return (
    <PokemonCardSimples
      nome={pokemon.name}
      imagem={pokemon.sprites.front_default}
      imagemShiny={pokemon.sprites.front_shiny}
      numero={pokemon.id}
      altura={pokemon.height}
      peso={pokemon.weight}
      tipoUm={pokemon.types[0].type.name}
      tipoDois={pokemon.types[1] ? " / " + pokemon.types[1].type.name : ""}
      habilidadeUm={pokemon.abilities[0].ability.name}
      habilidadeDois={
        pokemon.abilities[1] ? pokemon.abilities[1].ability.name : ""
      }
      habilidadeTres={
        pokemon.abilities[2] ? pokemon.abilities[2].ability.name : ""
      }
      habilidadeQuatro={
        pokemon.abilities[3] ? pokemon.abilities[3].ability.name : ""
      }
      experiencia={pokemon.base_experience}
    />
  );
}
