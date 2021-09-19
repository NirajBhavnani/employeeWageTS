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
let totalWorkDays: number = 0;

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
