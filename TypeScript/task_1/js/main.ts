interface Teacher {
    firstName: string;
    lastName: string;
    FullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>{
    return `${firstName[0]}. ${lastName}`;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }

}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface Student extends StudentClass {
    workOnHomework: () => string;
    displayName: () => string;
}

