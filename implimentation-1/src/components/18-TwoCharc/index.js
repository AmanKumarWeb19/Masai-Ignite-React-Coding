/** Create an animal inventor app that combines the names of two animals in an array. To complete this task you must: Remove the last two characters of the first animal’s name, Remove the first two characters of the second animal’s name, Ensure that the same animal name is not used twice. Example output: panbra (panda+zebra) */


function CombineAnimalsNames(animals) {
  let combinebox = [];
  for (let i = 0; i < animals.length; i++) {
    for (let j = i + 1; j < animals.length; j++) {
      let animal1 = animals[i].slice(0, -2);
      let animal2 = animals[j].slice(2);
      let combine = `${animal1}${animal2}`;

      combinebox.push(`${combine} (${animal1}+${animal2})`);
    }
  }
  return combinebox;
}
const AnimalList = ["panda", "zebra", "lion", "tiger", "elephant"];
console.log(CombineAnimalsNames(AnimalList));



// function CombineAnimalsNames(animals) {
//   let combinebox = [];
//   for (let i = 0; i < animals.length; i++) {
//     for (let j = i + 1; j < animals.length; j++) {
//       let animal1 = animals[i].slice(0, -2);
//       let animal2 = animals[j].slice(2);
//       let combine = `${animal1}${animal2}`;

//       combinebox.push(`${combine} (${animals[i]}+${animals[j]})`);
//     }
//   }
//   return combinebox;
// }
// const AnimalList = ["panda", "zebra", "lion", "tiger", "elephant"];
// console.log(CombineAnimalsNames(AnimalList));
