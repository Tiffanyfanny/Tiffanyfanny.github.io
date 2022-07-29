
const Petter = {
    name: "Petter",
    height: 1.95,
    mass: 92,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };

const Lucas = {
    name : "Lucas",
    height: 1.69,
    mass: 78,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  Lucas.calcBMI();
  Petter.calcBMI();

  if ( Petter.bmi > Lucas.bmi) {
    PartA= `The BMI of ${Petter.name} is ${Petter.bmi.toFixed(1)}, The BMI of ${Lucas.name} is ${Lucas.bmi.toFixed(1)}, Petter's BMI is higher than Lucas's BMI that is True`;
    console.log(`The BMI of ${Petter.name} is ${Petter.bmi.toFixed(1)}, The BMI of ${Lucas.name} is ${Lucas.bmi.toFixed(1)}, Petter's BMI is higher than Lucas's BMI that is True`);
  } else{
  console.log( `The BMI of ${Petter.name} is ${Petter.bmi.toFixed(1)}, The BMI of ${Lucas.name} is ${Lucas.bmi.toFixed(1)}, Petter's BMI is higher than Lucas's BMI that is Fals`);
  PartA=`The BMI of ${Petter.name} is ${Petter.bmi.toFixed(1)}, The BMI of ${Lucas.name} is ${Lucas.bmi.toFixed(1)}, Petter's BMI is higher than Lucas's BMI that is Fals`;
     ;
  }

console.log(`----------------PART B----------------`);
var Celc1 = 19;
var fahrenheit1 = (Celc1*9/5)+32;
var fahrenheit2 = 19;
var Celc2 = (fahrenheit2-32)*5/9;
console.log(` ${Celc1.toFixed(1)}C is ${fahrenheit1.toFixed(1)} F
 ${fahrenheit2.toFixed(1)}F is ${Celc2.toFixed(1)} C`);
 PartB= ` ${Celc1.toFixed(1)}C is ${fahrenheit1.toFixed(1)} F <br>
 ${fahrenheit2.toFixed(1)}F is ${Celc2.toFixed(1)} C`;

console.log( `----------------PART C----------------`);

if (Petter.bmi > Lucas.bmi) {
console.log( `${Petter.name}'s BMI (${Petter.bmi.toFixed(1)}) is higher than ${Lucas.name}'s BMI (${Lucas.bmi.toFixed(1)}`);
PartC `${Petter.name}'s BMI (${Petter.bmi.toFixed(1)}) is higher than ${Lucas.name}'s BMI (${Lucas.bmi.toFixed(1)}`;
} else{
console.log(`${Lucas.name}'s BMI (${Lucas.bmi.toFixed(1)}) is higher than ${Petter.name}'s BMI (${Petter.bmi.toFixed(1)}`);
PartC=`${Lucas.name}'s BMI (${Lucas.bmi.toFixed(1)}) is higher than ${Petter.name}'s BMI (${Petter.bmi.toFixed(1)}`;
}
console.log( `----------------PART D----------------`);

let CovertCelsiusToFahrenheit = (Celcius) =>{
    return `${Celcius}C is ${((Celcius*9/5)+32).toFixed(1)} F`;
  }
console.log(  CovertCelsiusToFahrenheit(100));
console.log( CovertCelsiusToFahrenheit(0));
console.log( CovertCelsiusToFahrenheit(10));
PartD1 = `${ CovertCelsiusToFahrenheit(100)} <br> ${ CovertCelsiusToFahrenheit(100)} <br> ${ CovertCelsiusToFahrenheit(100)}  `;
console.log( ``);
  let CovertFahrenheitToFCelcius = (Fahrenheit) =>{
    return `${Fahrenheit}F is ${((Fahrenheit-32)*5/9).toFixed(1)} C`;
  }
console.log( CovertFahrenheitToFCelcius(32));
console.log( CovertFahrenheitToFCelcius(10));
console.log( CovertFahrenheitToFCelcius(102));
console.log( );
PartD2 = `${ CovertFahrenheitToFCelcius(32)} <br> ${ CovertFahrenheitToFCelcius(10)} <br> ${ CovertFahrenheitToFCelcius(102)}  `;
console.log( ``);

document.body.innerHTML=`
----------------PART A----------------<br>
${PartA} <br>
----------------PART B----------------<br>
${PartB}<br>
----------------PART C----------------<br>
${PartC}<br>
----------------PART D----------------<br>
${PartD1} <br><br>
${PartD2}

<br>
`
