//no 1
function cetakFunction(a){
    return `hallo nama saya` + a
}

console.log(cetakFunction("adira"));

//no 2
let angka1 = 20;
let angka2 = 7;

function myFuntion (angka1, angka2) {
    return angka1 + angka2;
}
let output= myFuntion (angka1 , angka2);
console.log(output);

//no 3
function hello (){
    let a = "hello";
    return "hello ";
}
 let jim = hello((bang) => bang.a === "hello");
 console.log(jim);

//no 4
let obj = {
    nama : "john",
    umur : "22",
    bahasa : "indonesia",
}
  console.log(obj.bahasa);

//no 5
let arrayDaftarPeserta = ["john doe", "laki laki", "baca buku", 1992];
let objectDaftarPeserta ={
    nama : arrayDaftarPeserta [0],
    jenisKelamin : arrayDaftarPeserta [1],
    hobi : arrayDaftarPeserta [2],
    lahir : arrayDaftarPeserta[3],
}
console.log(objectDaftarPeserta);

//no 6
const buah = [{
    nama : 'nanas',
    warna : 'kuning',
    adaBijinya : 'tidak',
    harga : 9000,
},
{
    nama : 'jeruk',
    warna : 'oranye',
    adaBijinya : 'ada',
    harga : 8000,
},
{
    nama: 'semangka',
    warna: 'merah & hijau',
    adaBijinya : 'ada',
    harga: 9000,
},
{
    nama : 'pisang',
    warna : 'kuning',
    adaBijinya : 'tidak',
    harga : 10000,
},
];

let berbiji = buah.filter((buah) => buah.adaBijinya === 'tidak');

console.log(berbiji);