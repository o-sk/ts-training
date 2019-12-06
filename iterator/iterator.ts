let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry);
}

let list = [4, 5, 6];

for (let i in list) {
    console.log(i);
}

for (let i of list) {
    console.log(i);
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet);
}

for (let pet of pets) {
    console.log(pet);
}

let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}