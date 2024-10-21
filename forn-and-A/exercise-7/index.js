// Destructuring (Array)
let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5

// Destructuring (Object)
let obj = { nama: 'John', umur: 30, alamat: 'Jakarta' };
let { nama, umur, alamat } = obj;
console.log(nama); // John
console.log(umur); // 30
console.log(alamat); // Jakarta

// Destructuring dengan mengambil sebagian item (Array)
let arr2 = [1, 2, 3, 4, 5];
let [a2, , c2, , e2] = arr2;
console.log(a2); // 1
console.log(c2); // 3
console.log(e2); // 5

// Destructuring dengan mengambil sebagian item (Object)
let obj2 = { nama: 'John', umur: 30, alamat: 'Jakarta' };
let { nama: nama2, alamat: alamat2 } = obj2;
console.log(nama2); // John
console.log(alamat2); // Jakarta

// Destructuring dengan menggunakan default value (Array)
let arr3 = [1, 2];
let [a3, b3, c3 = 3] = arr3;
console.log(a3); // 1
console.log(b3); // 2
console.log(c3); // 3

// Destructuring dengan menggunakan default value (Object)
let obj3 = { nama: 'John' };
let { nama: nama3, umur: umur3 = 30 } = obj3;
console.log(nama3); // John
console.log(umur3); // 30

// Destructuring dengan menggunakan rest operator (Array)
let arr4 = [1, 2, 3, 4, 5];
let [a4, ...rest4] = arr4;
console.log(a4); // 1
console.log(rest4); // [2, 3, 4, 5]

// Destructuring dengan menggunakan rest operator (Object)
let obj4 = { nama: 'John', umur: 30, alamat: 'Jakarta' };
let { nama: nama4, ...rest5 } = obj4;
console.log(nama4); // John
console.log(rest4); // { umur: 30, alamat: 'Jakarta' }