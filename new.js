class student {
    constructor(firstName, lastName, id, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.address = address;
    }
}

const student1 = new student("mahmud", "hasan", 100, "gopalgonj");
console.log(student1);
const student2 = new student("masud", "rana", 100, "pirojpur");
console.log(student2);

function Teachers(schoolName, division, post) {
    this.schoolName = schoolName;
    this.division = division;
    this.post = post;
}

const teacher1 = new Teachers("pgghs", "barishal", "math");
console.log(teacher1);