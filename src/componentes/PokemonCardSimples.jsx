import "./componentes.css";
import { useState } from "react";

export function PokemonCardSimples(props) {

  const nome = props.nome
  const [shiny, setShiny] = useState(null)
  const imagemAtual = shiny !== null ? props.imagemShiny : props.imagem
  

    function deixarShiny(){
      const ehShiny = shiny === null ? setShiny(props.imagemShiny) : setShiny(null)
      return ehShiny;
    }


  return (
    <section>
      <div className="pokemon">

        <div className="introducao">
          <br />
          <p>
            {props.tipoUm}{props.tipoDois}
          </p>

          <h2>{nome.toUpperCase()}</h2>
          <p>EXP: {props.experiencia}</p>
        </div>

        <div className="pokeImagem">
          <button className="anterior" onClick={props.pokemonAnterior}>ANTERIOR</button>
          <img src={imagemAtual} alt={props.nome} className="imagemPokemon"/>
          <button className="proximo" onClick={props.proximoPokemon}>PRÓXIMO</button>
        </div>
        

        <div className="info">
          <p>Id: #{props.numero}</p>
          <p>Altura: {props.altura/10}m</p>
          <p>Peso: {props.peso/10}Kg</p>
          <br />
          <button className="botaoShiny" onClick={deixarShiny}>
            {shiny ? "   NORMAL  " : "✨ SHINY ✨"}</button>
        </div>

        <hr />

        <div className="habilidades">
          <p className="pokeHabilidade">{props.habilidadeUm}</p>
          {props.habilidadeDois !== "" && (<p className="pokeHabilidade">{props.habilidadeDois}</p>)}
          {props.habilidadeTres !== "" && (<p className="pokeHabilidade">{props.habilidadeTres}</p>)}
          {props.habilidadeQuatro !== "" && (<p className="pokeHabilidade">{props.habilidadeQuatro}</p>)}
        </div>

      </div>
    </section>
  );
}
