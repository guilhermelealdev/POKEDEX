import "./componentes.css";
import { useState } from "react";

export function PokemonCardSimples(props) {

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

          <p>
            {props.tipoUm}{props.tipoDois}
          </p>

          <h2>{props.nome}</h2>
          <p>EXP: {props.experiencia}</p>
        </div>

        <img src={imagemAtual} alt={props.nome} className="pokeImagem"/>

        <div className="info">
          <p>Id: #{props.numero}</p>
          <p>Altura: {props.altura}</p>
          <p>Peso: {props.peso}</p>
          <br />
          <button className="botaoShiny" onClick={deixarShiny}>
            {shiny ? "✨ NORMAL ✨" : "✨ SHINY ✨"}</button>
        </div>

        <hr></hr>
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
