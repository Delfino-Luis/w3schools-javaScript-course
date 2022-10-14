
```js
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
```