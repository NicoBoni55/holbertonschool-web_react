import CourseListRow from "./CourseListRow"
import './CourseList.css'

export default function CourseList({courses=[]}) {
    return (
        <table id="CourseList">
            {courses.length > 0 && (
                <thead>
                    <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
                    <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
                </thead>
            )}
            <tbody>
                {courses.length === 0 ? (
                    <tr className="no-course">
                        <td>No course available yet</td>                        
                    </tr>
                    ) : (
                        courses.map((course)=> {
                            return <CourseListRow
                            key={course.id}
                            textFirstCell={course.name} 
                            textSecondCell={course.credit}/>
                        })
                    )}
                </tbody>
        </table>
    )
}