export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    return (
        <tr style={isHeader ? {backgroundColor: "#deb5b545"}: {backgroundColor: "#f5f5f5ab"}}>
           {isHeader ? 
               ( textSecondCell === null ? (
                   <th colSpan={2}>{textFirstCell}</th>
                ) : (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>
                ) 
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
           )}
        </tr>
    );
}