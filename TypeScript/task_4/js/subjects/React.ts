/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class React extends Subject {
        experienceTeachingReact?: number;

        getRequirements(): string{
            return 'Here is the list of requirements for React'
        }

        getAvailableTeacher(): string {
            if (!this.teacher || !this.experienceTeachingReact || this.experienceTeachingReact === 0) {
                return 'No available teacher'
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}