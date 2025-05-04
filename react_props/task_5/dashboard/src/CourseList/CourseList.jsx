import CourseListRow from "./CourseListRow"
import './CourseList.css'

export default function CourseList({courses=[]}) {
    return (
        <table id="CourseList">
            {courses.length > 0 && (
                <thead>
                    <CourseListRow isHeader={false} textFirstCell={"Available courses"} />
                    <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
                </thead>
            )}
            <tbody>
                {courses.length === 0 ? (
                    <CourseListRow isHeader={false} textFirstCell={"No course available yet"} textSecondCell={null} />
                ) : (
                    courses.map((course, index) => (
                        <CourseListRow key={index} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
                    ))
                )}
            </tbody>
        </table>
    )
}