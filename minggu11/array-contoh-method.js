// Method filter
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ambil data yang hanya habis dibagi dua 
const filteredArray = angka.filter(item => item % 2 === 0);

console.log(filteredArray) // -> [2, 4, 6, 8]

// Method Includes
var tanaman = ["Padi", "Kacang", "Jagung", "Kedelai"];

// apakah kacang sudah ada di dalam array tanaman?
var adaKacang = tanaman.includes("Kacang");

console.log(adaKacang); // -> true

// apakah bayam ada?
var adaBayam = tanaman.includes("Bayam");

console.log(adaBayam); // -> false

//Method Short
var alfabet = ['a','f','z','e','r','g'];
var angka = [3,1,2,6,8,5];

console.log(alfabet.sort()); //-> ["a", "e", "f", "g", "r", "z"]
console.log(angka.sort()); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]