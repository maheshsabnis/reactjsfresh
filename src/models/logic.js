class Logic {
    constructor() {
        this.students = [
            { StudentId: 101, StudentName: 'Mahesh', University: 'Pune', Course: 'IT', Fees: 10000 },
            { StudentId: 102, StudentName: 'Tejas', University: 'Amravati', Course: 'MECH', Fees: 6000 },
            { StudentId: 103, StudentName: 'Akash', University: 'Kolhapur', Course: 'CIVL', Fees: 8000 }
        ];
    }
    getStudents() {
        return this.students;
    }
    addStudent(student) {
        this.students.push(student);
        return this.students;
    }
}
export default Logic;