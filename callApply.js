const Person1 = {
    FirstName: "mahmud",
    LastName: "hasan",
    salary: 20000,
    GetFullName: function(){
        // const FullName = this.FirstName + " " + this.LastName;
        console.log(this.FirstName, this.LastName)
        // console.log(FullName);
        // return FullName;
    },
    chargeBill: function (amount, tax){
        this.salary = this.salary - (amount + tax);
        return this.salary;
        // console.log(this.salary);
        // return this.salary;
    }
}

const Person2 = {
    FirstName: "hasan",
    LastName: "mahmud",
    salary: 15000
}

const Person3 = {
    FirstName: "tawhid",
    LastName: "jamil",
    salary: 12000
}
// Person1.GetFullName();
// Person1.chargeBill(1200);

// const Person2charge = Person1.chargeBill.bind(Person2);
// const name2 = Person1.GetFullName.bind(Person2);
// name2();
// Person2charge(1000);

// const Person3charge = Person1.chargeBill.bind(Person3);
// const name3 = Person1.GetFullName.bind(Person3);
// name3();
// Person3charge(1000);

// console.log(Person1.salary);

console.log(Person1);
Person1.chargeBill.call(Person2, 2000, 200);
Person1.chargeBill.call(Person2, 344, 4353);
console.log(Person2);
Person1.chargeBill.apply(Person3, [1000, 200]);
console.log(Person3);
// console.log(Person2.salary);