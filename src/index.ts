import { Constants } from "./constants";

let emp_wage: number = 0;
let empHours: number = 0;
let totalWorkDays: number = 0;
let wageArr: number[] = [];



function printUC(uc: string): string {
  return `------------------------${uc}------------------------`;
}

// UC1
console.log("Welcome to Employee Wage Program");

console.log(printUC("UC1"));
type EmpCheck = {
  is_Absent: number;
  empCheck: number;
};

const user: EmpCheck = {
  is_Absent: 0,
  empCheck: Math.floor(Math.random() * 10) % 2,
};

if (user.empCheck == user.is_Absent) {
  console.log("Employee is Absent");
} else {
  console.log("Employee is Present");
}

// ________________________________________________

function setDutyWage(emp_case: boolean): number {
  switch (emp_case) {
    case true: //fulltime
      return (empHours = Constants.fulltime);

    case false: //parttime
      return (empHours = Constants.parttime);

    // Actually it has no use since we are using booleans in this problem statement
    default:
      return (empHours = 0);
  }
}

function calculateWage(): void {
  emp_wage = empHours * Constants.wageperhour;
  console.log("Employee wage: " + emp_wage);
}

// UC2
console.log(printUC("UC2"));

empHours = setDutyWage(Constants.isFullTime);
calculateWage();
empHours = 0; //reset

// UC3
console.log(printUC("UC3"));
empHours = setDutyWage(Constants.isPartTime);
calculateWage();
empHours = 0; //reset

// UC4
console.log(printUC("UC4"));
let randomBoolean: boolean = Math.random() >= 0.5;
empHours = setDutyWage(randomBoolean);
calculateWage();
empHours = 0; //reset

// UC5
console.log(printUC("UC5"));
for (var d: number = 0; d < Constants.days; d += 1) {
  empHours += setDutyWage(randomBoolean);
}
calculateWage();
empHours = 0; //reset

// UC6
console.log(printUC("UC6"));

while (
  empHours < Constants.maxHrsMonth &&
  totalWorkDays < Constants.maxDaysMonth
) {
  totalWorkDays++;
  empHours += setDutyWage(randomBoolean);
}
calculateWage();
empHours = 0; //reset

// UC7
console.log(printUC("UC7"));
class Employee {
  constructor() {
    let totalWorkDays2: number = 0;

    while (
      empHours < Constants.maxHrsMonth &&
      totalWorkDays2 < Constants.maxDaysMonth
    ) {
      totalWorkDays2++;
      empHours += setDutyWage(randomBoolean);
    }
    calculateWage();
    empHours = 0; //reset
  }
}

let empObj:object = new Employee();

// UC8
console.log(printUC("UC8"));

function setDutyWage2(emp_case: boolean): number {
  switch (emp_case) {
    case true: //fulltime
      empHours = Constants.fulltime;
      break

    case false: //parttime
      empHours = Constants.parttime;
      break

    // Actually it has no use since we are using booleans in this problem statement
    default:
      empHours = 0;
      break
  }
  let dayWage:number = empHours * Constants.wageperhour;
    wageArr.push(dayWage);
    return empHours;
}

let totalWorkDays3: number = 0;
while (
  empHours < Constants.maxHrsMonth &&
  totalWorkDays3 < Constants.maxDaysMonth
) {
  totalWorkDays3++;
  let randomBoolean2: boolean = Math.random() >= 0.5;
  empHours += setDutyWage2(randomBoolean2);
}

wageArr.push(0); //This line is basically added for testing our usecases

calculateWage();
console.log("Wage Array:"+wageArr);
empHours = 0; //reset

// UC9
console.log(printUC("UC9"));

// forEach wageArr
function wageUsingForEach(): number {
  let wage_array: number[] = wageArr;
  let total_wage: number = 0;
  wage_array.forEach((wages) => {
    total_wage += wages;
  });
  return total_wage;
}

console.log(wageUsingForEach());

// wageMap
function wageMap(): object[] {
  let wage_array: number[] = wageArr;
  let daysVar: object[] = wage_array.map((wages, day) => {
    return{
      days: day+1,
      wages,
    }
  });
  return daysVar;
}
console.log(wageMap());

// show only 160
function display160():void{
  let wage_array: number[] = wageArr;
  wage_array.filter((wages:number, day:number) =>{
    if(wages === 160){
      console.log(day + 1 + " \t|\t " + wages);
    }
  });
}
display160();

// first occurence
function find160():void {
  let onlyFirst: boolean = true;
  let wage_array: number[] = wageArr;
  wage_array.find((wages:number, day: number) =>{
    if(wages === 160 && onlyFirst){
      console.log( `First Occurence at day ${day+1} : ` + wages);
      onlyFirst = false;
    }
  });
}
find160();

// check 160
function check160():void{
  let isValid: boolean = true;
  let wage_array: number[] = wageArr;
    for (let i = 0; i < wage_array.length; i++) {
      if (
        wage_array[i] != 160 &&
        wage_array[i] != 80 &&
        wage_array[i] != 0
      ) {
        isValid = false;
        break;
      }
    }
    console.log(
      "Every Element of Full Time Wage is truly holding Full time wage = " +
        isValid
    );
}
check160();

// show only 80
function display80():void{
  let wage_array: number[] = wageArr;
  wage_array.filter((wages:number, day:number) =>{
    if(wages === 80){
      console.log(day + 1 + " \t|\t " + wages);
    }
  });
}
display80();

// show not 0
function displayNot0():void{
  let wage_array: number[] = wageArr;
  wage_array.filter((wages:number, day:number) =>{
    if(wages !== 0){
      console.log(day + 1 + " \t|\t " + wages);
    }
  });
}
displayNot0();