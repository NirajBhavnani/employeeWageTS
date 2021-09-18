import { Constants } from "./constants";

let emp_wage: number = 0;
let empHours: number = 0;

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

// UC3
console.log(printUC("UC3"));
empHours = setDutyWage(Constants.isPartTime);
calculateWage();

// UC4
console.log(printUC("UC4"));
let randomBoolean: boolean = Math.random() >= 0.5;
empHours = setDutyWage(randomBoolean);
calculateWage();

// UC5
console.log(printUC("UC5"));
for(var d=0; d<Constants.days; d+=1){
    empHours += setDutyWage(randomBoolean);
}
calculateWage();