import CourseListRow from "./CourseListRow"
import { StyleSheet, css } from "aphrodite"

export default function CourseList({courses=[]}) {
    return (
        <table className={css(styles.table)} id="CourseList">
            {courses.length > 0 && (
                <thead>
                    <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
                    <CourseListRow isHeader={true} textFirstCell={"Course name"} textSecondCell={"Credit"} />
                </thead>
            )}
            <tbody>
                {courses.length === 0 ? (
                    <tr className={css(styles.noCourse)}>
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

const styles = StyleSheet.create({
    table: {
        border: '1px solid black',
        borderCollapse: 'collapse',
        width: '100%',
        margin_top: '20px',
    },
    noCourse: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
})