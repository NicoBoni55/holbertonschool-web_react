/// <reference path="./Subject.ts"/>
/// <reference path="./Teacher.ts"/>

namespace Subjects {
    export class Java extends Subject {
        experienceTeachingJava?: number;

        getRequirements(): string {
            return 'Here is the list of requirements for Java'
        }

        getAvailableTeacher(): string {
            if(!this.teacher || !this.experienceTeachingJava || this.experienceTeachingJava === 0) {
                return 'No available teacher'
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}
