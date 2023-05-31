export async function pokemonName(name:string) {
  const response=await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
)
console.log(response);
if(!response.ok){
    throw new Error('Failed to fetch Pokemon');
}
const results=await response.json();
console.log(results);
const pokemon={
    name:results.name,
    id:results.id,
    imgsrc:`https://img.pokemondb.net/sprites/black-white/anim/normal/${results.name.toLowerCase()}.gif`,
    attack:results.stats[1].base_stat,
    defense:results.stats[2].base_stat,
    hp:results.stats[0].base_stat,
    spAttack:results.stats[3].base_stat,
    spDefense:results.stats[4].base_stat,
    speed:results.stats[5].base_stat,
    types:results.types.map((type: any) => type.type.name)
};

return pokemon;
}