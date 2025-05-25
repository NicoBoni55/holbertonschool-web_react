import {StyleSheet, css } from "aphrodite";

export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    const HeaderStyle = {backgroundColor: '#deb5b545'};
    const rowStyle = {backgroundColor: '#f5f5f5ab'};
    return (    
        <tr style={isHeader ? HeaderStyle : rowStyle}>
           {isHeader ? 
               ( textSecondCell === null ? (
                   <th className={css(styles.th)} colSpan={2}>{textFirstCell}</th>
                ) : (
                <>
                    <th className={css(styles.th)}>{textFirstCell}</th>
                    <th className={css(styles.th)}>{textSecondCell}</th>
                </>
                ) 
            ) : (
                <>
                    <td className={css(styles.td)}>{textFirstCell}</td>
                    <td className={css(styles.td)}>{textSecondCell}</td>
                </>
           )}
        </tr>
    );
}

const styles = StyleSheet.create({
    th: {
        border: '1px solid black',
        borderCollapse: 'collapse',
    },
    td: {
        border: '1px solid black',
        borderCollapse: 'collapse',
    }
})