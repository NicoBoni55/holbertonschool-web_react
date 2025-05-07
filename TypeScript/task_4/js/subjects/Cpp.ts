/// <reference path="Subject.ts" />
/// <reference path="Teacher.ts" />


namespace Subjects {
    export class Cpp extends Subject {
        experienceTeachingC?: number;

        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (!this.teacher || !this.experienceTeachingC || this.experienceTeachingC === 0) {
                return 'No available teacher'
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }

        
    }
}