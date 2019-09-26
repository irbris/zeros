module.exports = function zeros(expression) {
  const arr = expression.split('*');
  const arrSimpleFactorial = [];
  const arrDoubleFactorial = [];
  let numberOfZero = 0;
  let even = 0;
  
  arr.map(element => {
    if(element.endsWith('!!')) {
      arrDoubleFactorial.push(element.slice(0, -2));
    } else {
      arrSimpleFactorial.push(element.slice(0, -1));
    }
  })
  
  arrDoubleFactorial.map(number => {
    if (number % 2 === 0) {
        even += 1;
      }
      for (let i = number; i > 0; i -= 2) {
        if (i % 5 === 0) {
          numberOfZero += 1;
          if (i % 25 === 0) {
            numberOfZero += 1;
          }
        }
      }
  })
  
  arrSimpleFactorial.map(number => {
    numberOfZero += Math.floor(number / 5) + Math.floor(number / 25);
    even += 1;
  })      

  
  if(!even) return 0;
  return numberOfZero;
}