const freq = Array.from('123313123213').map((x) => {
  return parseInt(x);
});
console.log(freq);

[{a:"0",b:1},{a:"0",b:1},{a:"2",b:1}].reduce((prev, curr)=> {
  if (prev.find((x)=> x.a === curr.a)) {
    
  }
}, [])