/*const array = ["Zelito", "Keylon", "Atumane", "Delfino"];
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
for(let index = 0; index < 10; index += 1)
   console.log(array[random(0, array.length)]);*/




   /*array_elements = ["2", "1", "2","1","2", "3", "4", "3", "3", "3", "5"];

array_elements.sort();

var current = null;
var cnt = 0;

for (var i = 0; i <= array_elements.length; i++) {
    if (array_elements[i] != current) {
        if (cnt > 0) {
            console.log(current + ' comes --> ' + cnt + ' times');
        }
        current = array_elements[i];
        cnt = 1;
    } else {
        cnt++;
    }
}
*/




   let array = [], actual = undefined, count = 0;
   const nomes = ["Keylon", "Abel", "Elias", "Isaquiel", "Vimelio"];
   const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
        for(let index = 0; index < 10; index += 1)
        array[index] = nomes[random(0, nomes.length)];

            for(let index = 0; index < array.length; index += 1){
                array.sort();  
                if(array[index] !== actual){
                    if(count > 0)
                        console.log(array[index] + " aparece "+ count +" vezes no array");     
     
        actual = array[index];
        count = 1; 
   } else
        count += 1;
}                    //HOW DOES IT WORKS??  



