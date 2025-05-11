export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    const HeaderStyle = {backgroundColor: '#deb5b545'};
    const rowStyle = {backgroundColor: '#f5f5f5ab'};
    return (    
        <tr style={isHeader ? HeaderStyle : rowStyle}>
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