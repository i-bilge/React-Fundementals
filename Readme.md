# JavaScript Fundementals for React

## 1-Template Literals (şablon dizileri)

💡 Template literals works with back tick

```javascript
const theName = "Mehmet";
const mesaj = `Hola, ${theName}`;
console.log(mesaj); // Hola, Mehmet
```

💡 Another Eg.:

```javascript
const b_price = 100;
const amount = 3;
const price_b = "TL";

const total_price = `Total: ${b_price * amount} ${price_b}`; // Total: 300 TL
```

## 2-Shorthand Property Names

```javascript
const theName = "Mehmet";
const old = 35;
const user_obj = { theName, old }; // { theName: theName, old: old } is same

console.log(user_obj); // { theName: "Mehmet", old: 35 }
```

💡 React Eg.:

```javascript
function Counter({ firstValue, step }) {
  // Here object destruction.
  const [counter, setCounter] = useCounter({ firstValue, step }); // Burada kısayol kullanım var.
  return <button onClick={setCounter}>{counter}</button>;
}
```

## 3-Arrow Functions

💡 traditionel function:

```javascript
sum(3, 5); // 8 return, because its hoisted

function sum(sayi1, sayi2) {
  return sayi1 + sayi2;
}
```

💡 Arrow function:

```javascript
sum(3, 5); // ReferenceError: Cannot access 'sum' before initialization at <anonymous>:1:1

const sum = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};
```

💡 We can also do implicit return:

```javascript
const sum = (sayi1, sayi2) => sayi1 + sayi2;
```
💡 and when it s just one paramater there.
```javascript
const square = a => a * a;
console.log(square(2)); //4
```



## 4- <a id="destructuring"></a>Object/Array Destructuring

💡 Obj keys and names must be same

```javascript
const user = { theName: "Mehmet", old: 35 };

const { theName, old } = user; // 2 variable created
// its same as below:
// const theName = user.theName;
// const old = user.old;

console.log(theName); // "Mehmet"
console.log(old); // 35
```


```javascript
const kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

const { isim, ...kalanlar } = kullanici; // (...) rest/spread oper.

console.log(isim); // "Mehmet"
console.log(kalanlar); // { yas: 35, sehir: "İstanbul" }
```

💡 React Eg.

```javascript
function showToUser({ isim, yas }) {
  return `${isim} isimli kullanıcı ${yas} yaşındadır.`;
}
```


```javascript
const sayilar = [1, 2, 3, 4, 5];
const [bir, iki, uc, dort, bes] = sayilar; 

console.log({ bir, iki, uc, dort, bes }); // { bir: 1, iki: 2, uc: 3, dort: 4, bes: 5 }
```

💡 when just first element is important for us:

```javascript
const sayilar = [1, 2, 3, 4, 5];
const [bir, ...kalanlar] = sayilar; 

console.log({ bir, kalanlar }); // {bir: 1, kalanlar: [2,3,4,5] }
```


```javascript
const [...ilkler, bes] = sayilar; // Uncaught SyntaxError: Rest element must be last element
```

## 5-Parameter Defaults

💡 We can add defauld values for paramaters:

```javascript
topla(3, 5); // 8 
topla(3); // 3 
topla(); // 0 

function topla(sayi1 = 0, sayi2 = 0) {
  // here we have defined 0 for sayi2
  return sayi1 + sayi2;
}
```

💡 React Eg.:

```javascript
const STATE_BASLANGICI = { yukleniyor: false, yazilar: [] };

const reducer = (state = STATE_BASLANGICI, action) => {
  //STATE_BASLANGICI is defined here as start point
  return state;
};
```

## 6- <a id="rest-spread"></a>Rest/Spread Operator


for Eg. when we want to change the city(sehir) info in object;

```javascript
let kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

kullanici.sehir = "Ankara";

console.log(kullanici); // { isim: "Mehmet", yas: 35, sehir: "Ankara" }
```


```javascript
let kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

kullanici = { ...kullanici, sehir: "Ankara" };
```

Here we firstly created `kullanici`. Then this `kullanici` value defined for another obj. And we spreaden all infos in value `kullanici` Then we have added the city(sehir) `sehir: "Ankara"` NEW OBJ.:

```javascript
kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul", sehir: "Ankara" };
```


Now the same in Redux reducer:

```javascript
INITIAL_STATE = {
  yukleniyor: false,
  hataMesaji: "",
  arabalar: ["Mercedes", "BMW", "Audi"],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ARABA_EKLE":
      return { ...state, arabalar: [...state.arabalar, action.payload] };
    default:
      return state;
  }
};
```

## 7-ESModules (ES modülleri)

It is for using code blocs and doing import/export. There are 2 types: named and default.


### Named Exports & Imports (isimli dışa/içe aktarmalar)


```javascript
export let isim = "Mehmet"; // created and exported
export const kullanici = { isim, yas: 35 }; // created and exported
export function merhaba(isim) {
  // created and exported
  return `Merhaba, ${isim}`;
}
```

💡 we can also export them later:

```javascript
let isim = "Mehmet";
const kullanici = { isim, yas: 35 };
function merhaba(isim) {
  return `Merhaba, ${isim}`;
}

export { isim, kullanici, merhaba };
```

💡 Named exports:

```javascript
import { isim, kullanici, merhaba } from "./nameOfFile.js";
```

💡 the name is changable.

```javascript
import {
  isim as name,
  kullanici as user,
  merhaba as hello,
} from "./nameOfFile.js";
```

### Default Exports & Imports

💡 For each file just 1 default export is possible.

```javascript
export default function merhaba(isim) {
  return `Merhaba, ${isim}!`;
}
```

💡 both in same line:

```javascript
export { merhaba as default, isim, kullanici }; 
```

💡 Without curvy paranthesis

```javascript
// merhaba.js
export default function merhaba(isim) {
  return `Merhaba, ${isim}!`;
}

// mainPage.js
import merhaba from "./merhaba.js";
```


```javascript
import { default as merhaba, isim, kullanici } from "./dosyaadi.js"; 
```

### Immediate re-export


```javascript
export { default as merhaba } from "./dosyaadi.js"; 
export * from "./dosyaadi.js"; 
```

## 8-Ternary Conditional Operators

`condition ? ifTrue : ifFalse`


```javascript
kopruAcikMi
  ? "Anadolu yakasina gecebilirsiniz"
  : "Anadolu yakasina gecisler iptal";
```

💡 falsies:

     null
     NaN
     0
     "" (empty string)
     undefined

```javascript
name ? `Merhaba, ${name}` : `Merhaba misafir`; 
```

## 9-Array Methods

`.find()` `.some()` `.every()` `.includes()` `.map()` `.filter()` `.reduce()`


E.:

```javascript
const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 10 },
  { id: 3, name: "Silgi", fiyat: 2 },
  { id: 4, name: "Kalemtraş", fiyat: 7 },
];
```

### `.find()`


```javascript
urunler.find((urun) => urun.fiyat > 5); // {id: 2, name: "Defter", fiyat: 10}
```

### `.some()`

true/false 

```javascript
urunler.some((urun) => urun.fiyat < 2); 
urunler.some((urun) => urun.fiyat > 9);
```

### `.every()`

search for all and return true/false

```javascript
urunler.every((urun) => urun.fiyat > 1); 
urunler.every((urun) => urun.fiyat < 10);
```

### `.includes()`


```javascript
urunler.some((urun) => urun.name.includes("Kalem")); // true
urunler.every((urun) => urun.name.includes("Kalem")); // false
```

### `.map()`


```javascript
urunler.map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`);
// ["Kalem fiyatı 5 liradır.", "Defter fiyatı 10 liradır.", "Silgi fiyatı 2 liradır.", "Kalemtraş fiyatı 7 liradır."]
```

React:

```javascript
function UrunGoster({ urunListesi }) {
  return urunListesi.map((urun) => <li key={urun.id}>{urun.name}</li>);
}
```

### `.filter()`


```javascript
urunler.filter((urun) => urun.name.includes("Kalem")); // [{id: 1, name: "Kalem", fiyat: 5}, {id: 4, name: "Kalemtraş", fiyat: 7}]
```

💡 `.filter()` ve `.map()` 

```javascript
urunler
  .filter((urun) => urun.name.includes("Kalem")) 
  .map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`); 

// ["Kalem fiyatı 5 liradır.", "Kalemtraş fiyatı 7 liradır."]
```

### `.reduce()`

TR explanation:Verilen dizinin elemanları üzerinde, reducer olarak verilen callback fonksiyonu uygular. Bu fonksiyonun döndürdüğü sonuç her bir döngüde hatırlanır ve bir sonraki döndürülen sonuç bir öncekine eklenir. Reducer fonksiyonu dört adet parametre alır: accumulator (her döngüden çıkan sonucun toplandığı değer), current value (sırası gelen dizi değeri), current index (sırası gelen değerin dizideki konumu), ve source array (üzerinde reduce uygulanan dizi.)

products price sum:

```javascript
urunler.reduce((toplam, urun) => toplam + urun.fiyat, 0); // 24
```

Products name:

```javascript
urunler.reduce((isimler, urun) => isimler + " " + urun.name, "Ürün İsimleri:"); // "Ürün İsimleri: Kalem Defter Silgi Kalemtraş"
```

from these creating a string:

```javascript
urunler.reduce(
  (yeniUrunListesi, urun) => [
    ...yeniUrunListesi,
    `${urun.name} ${urun.fiyat} liradır.`,
  ],
  [] // Başlangıç değeri boş dizi
);
// ["Kalem 5 liradır.", "Defter 10 liradır.", "Silgi 2 liradır.", "Kalemtraş 7 liradır."]
```

## 10-Promises and async/await


```javascript
const veriGetir = new Promise(icraMemuru);
```


```javascript
const veriGetir = new Promise((basarili, basarisiz) => {
  if (veriBasariliBirSekildeGeldiyse) {
    basarili(getirilenVeri);
  } else {
    basarisiz("veriyi getiremedik");
  }
});
```

```javascript
const veri = veriGetir
  .then((veri) => console.log("Basarili bir sekilde gelen veri:", veri))
  .catch((hata) => console.log("Hatadan gelen mesaj:", hata));
```


```javascript
const veri = await veriGetir;
```


```javascript
async function veriDondur() {
  const veri = await veriGetir;
  return veri;
}

// or

const veriDondur = async () => await veriGetir;
```
