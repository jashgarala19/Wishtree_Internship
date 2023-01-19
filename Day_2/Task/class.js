class University {
  UNI_NAME = "Ganpat University";
  UNI_TOTAL_STUDENTS = 1000;
  UNI_TOTAL_BUSES = 20;
  constructor() {
    console.log(this.UNI_NAME);
  }

  getcolleges() {
    return ["UVPCE", "AMPICS", "BSPP"];
  }

  gettotalstudents() {
    console.log(`TOTAL STUDENTS:${this.UNI_TOTAL_STUDENTS}`);
  }
}

class UVPCE extends University {
  constructor() {
    super();
  }

  printcoursename(e) {
    console.log(e);
  }
  printcoursename(e, a) {
    console.log(e, a);
  }
}

let u = new University();

console.log(u.getcolleges());
let uvpce = new UVPCE();

uvpce.gettotalstudents();

uvpce.printcoursename("CE", "IT");
