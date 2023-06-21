const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  //Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;
  //Combine the Pokeapi url with pokemon id
  const finalUrl = url + id;
  //Fetch Generated URL
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
};

//Generate Card

let generateCard = (data) => {
  //Generate necessary data and assign it to variables
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  card.innerHTML = `  <p class="hp">
<span>HP</span>
${hp}
</p>
<img
alt=""
src="${imgSrc}"
/>
<h2 class="poke-name">${pokeName}</h2>
<div class="types">
<span>type 1</span>
<span>type 2</span>
</div>
<div class="stats">
<div>
  <h3>${statAttack}</h3>
  <p>Attack</p>
</div>
<div>
  <h3>${statDefense}</h3>
  <p>Defense</p>
</div>
<div>
  <h3>${statSpeed}</h3>
  <p>Speed</p>
</div>
</div>`;
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
