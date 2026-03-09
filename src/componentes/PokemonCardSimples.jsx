import "./componentes.css";

export function PokemonCardSimples(props) {
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

        <img src={props.imagem} alt={props.nome} className="pokeImagem"/>

        <div className="info">
          <p>Id: #{props.numero}</p>
          <p>Altura: {props.altura}</p>
          <p>Peso: {props.peso}</p>
          <button>shiny</button>
        </div>

        <hr></hr>
        <div className="habilidades">
          <p className="pokeHabilidade">{props.habilidadeUm}</p>
          <p className="pokeHabilidade">{props.habilidadeDois}</p>
          <p className="pokeHabilidade">{props.habilidadeUm}</p>
          <p className="pokeHabilidade">{props.habilidadeDois}</p>
        </div>
      </div>
    </section>
  );
}
