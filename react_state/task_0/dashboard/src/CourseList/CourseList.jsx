import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
    courseList: {
        marginTop: '20px',
        width: '100%',
        borderTop: '1px solid gray',
        borderLeft: '1px solid gray',
    },
    noCourses: {
        borderBottom: '1px solid gray',
    },
});

const CourseList = ({ courses = [] }) => {
    return (
        <table id="CourseList" className={css(styles.courseList)}>
            {courses.length > 0 ? (
                <>
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell={"Available courses"} />
                        <CourseListRow isHeader={true} textFirstCell={"Course Name"} textSecondCell="Credit" />
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                            />
                        ))}
                    </tbody>
                </>
            ) : (
                <tbody className={css(styles.noCourses)}>
                    <tr>
                        <td>No course available yet</td>
                    </tr>
                </tbody>
            )}
        </table>
    );
};

export default CourseList;
