interface IEmployee{
    id: number,
    name: string,
    salary: number
}

class EmployeePayrollData implements IEmployee{
    id = 0;
    name = "default";
    salary = 0;
    
    constructor(id: number, name: string, salary: number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get empId():number{
        return this.id;
    }

    get empName():string{
        return this.name;
    }

    get empSalary():number{
        return this.salary;
    }

    set setEmpName(name:string){
        this.name = name;
    }

    set setEmpSalary(salary:number){
        this.salary = salary;
    }
};

let Emp = new EmployeePayrollData(1, 'Niraj', 100000);

Emp.setEmpName = "Niraj Bhavnani";
Emp.setEmpSalary = 150000;

console.log("Employee Details: ");
console.log(`Name => ${Emp.empName}, ID => ${Emp.empId}, Salary => ${Emp.empSalary}`);