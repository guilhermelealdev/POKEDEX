async function randomificar() {
  const nomeRandom = Math.floor(Math.random() * 1026); //1025 pokemons
  const resposta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nomeRandom}`
  );

  if (!resposta.ok) {
    document.getElementById("pokenome").textContent = "Pokemon não encontrado!";
    document.getElementById("pokeimg").src = "";
    document.getElementById("poketipo").textContent = "";
    document.getElementById("pokemoves1").textContent = "";
    document.getElementById("pokemoves2").textContent = "";
    document.getElementById("pokemoves3").textContent = "";
    document.getElementById("pokemoves4").textContent = "";
    return;
  }

  const dados = await resposta.json();
  document.getElementById("pokenome").textContent = dados.name;
  document.getElementById("pokeimg").src = dados.sprites.front_default;
  document.getElementById("poketipo").textContent =
    "Tipo: " + dados.types[0].type.name;
  document.getElementById("pokemove1").textContent = dados.moves[0].move.name;
  document.getElementById("pokemove2").textContent = dados.moves[5].move.name;
  document.getElementById("pokemove3").textContent = dados.moves[6].move.name;
  document.getElementById("pokemove4").textContent = dados.moves[7].move.name;
}
async function buscar() {
  const nome = document.getElementById("nome").value.toLowerCase();
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  if (!resposta.ok) {
    document.getElementById("pokenome").textContent = "Pokemon não encontrado!";
    document.getElementById("pokeimg").src = "";
    document.getElementById("poketipo").textContent = "";
    document.getElementById("pokemoves1").textContent = "";
    document.getElementById("pokemoves2").textContent = "";
    document.getElementById("pokemoves3").textContent = "";
    document.getElementById("pokemoves4").textContent = "";
    return;
  }

  const dados = await resposta.json();
  document.getElementById("pokenome").textContent = dados.name;
  document.getElementById("pokeimg").src = dados.sprites.front_default;
  document.getElementById("poketipo").textContent =
    "Tipo: " + dados.types[0].type.name;
  document.getElementById("pokemove1").textContent = dados.moves[0].move.name;
  document.getElementById("pokemove2").textContent = dados.moves[5].move.name;
  document.getElementById("pokemove3").textContent = dados.moves[6].move.name;
  document.getElementById("pokemove4").textContent = dados.moves[7].move.name;
}
