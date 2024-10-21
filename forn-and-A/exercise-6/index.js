// 1. let & const, String literal, Arrow Function
function calculateAge(birthYear){
    return 2019 - birthYear;
  }
  
  function yearUntilRetirement(object){
    let age = calculateAge(object.year);
    let retirement = 60 - age;
  
    if(retirement > 0){
      console.log(`${object.firstName} retires in ${retirement} years`);
    } else {
      console.log(`${object.firstName} is already retired.`);
    }
  }
  
  yearUntilRetirement({year: 1987, firstName: 'John'});
  
  // 2. Arrow Function, Default parameter
  const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    return numbers.reduce((sum, current) => sum + current, 0);
  };
  
  console.log(addNumber(1,2,3,4,5,6,7));
  
  // 3. let & const, Arrow Function
  const phi = 3.14;
  const power = 2;
  let radius = 0;
  
  const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);
  
  radius = 21;
  const area21 = calculateArea({ radius: 21 });
  
  radius = 7;
  const area7 = calculateArea({ radius: 7 });
  
  console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
  
  // 4. Default parameter
  const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
  };
  
  makeAjaxRequest('www.google.com');