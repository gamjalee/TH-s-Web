const product=Object.freeze({desc:null, price:0});
const product2={desc:null, price: 0};   // const Array

product.desc=product.desc ?? '상품명을 입력하세요';
product2.desc=product2.desc ?? '상품명을 입력하세요';
product.price=product.price??1000;

console.log(product.desc);
console.log(product2.desc); // its const array, but why change?
// because Array's _proto_ is Object!