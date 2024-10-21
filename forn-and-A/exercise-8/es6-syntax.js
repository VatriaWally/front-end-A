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
  
  // 2. Arrow Function, Default parameter
  const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    return numbers.reduce((sum, current) => sum + current, 0);
  };
  
  // 3. let & const, Arrow Function
  const phi = 3.14;
  const power = 2;
  let radius = 0;
  
  const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);
  
  // 4. Default parameter
  const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
  };
  
  // Export module
  export {
    calculateAge,
    yearUntilRetirement,
    addNumber,
    calculateArea,
    makeAjaxRequest
  };