const s1 = new Set();

s1.add("a" + null);
s1.add("a" + null);
s1.add("b" + null);
console.log(s1, s1.size);
