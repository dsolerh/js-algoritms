class Func {}
Func.f1 = ()=>{}
Func.f2 = function name(){}

const f1 = ()=>{}
const f2 = function name(){}

console.log('f1: ', f1.name);
console.log('f2: ', f2.name);

console.log('Func.f1: ', Func.f1.name);
console.log('Func.f2: ', Func.f2.name);