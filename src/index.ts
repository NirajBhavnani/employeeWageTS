console.log("Welcome to Employee Wage Program");

type EmpCheck = {
    is_Absent: number,
    empCheck: number
};

const user: EmpCheck = {
    is_Absent: 0,
    empCheck: Math.floor(Math.random()* 10)%2
}

if(user.empCheck == user.is_Absent){
    console.log("Employee is Absent")
}
else{
    console.log("Employee is Present")
}