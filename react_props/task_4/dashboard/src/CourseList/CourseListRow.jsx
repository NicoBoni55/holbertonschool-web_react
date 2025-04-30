export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr>
            {isHeader  && textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell}</th>
            ) : isHeader && textSecondCell !== null ? (
                <>
                    <th>
                        {textFirstCell}
                    </th>
                    <th>
                        {textSecondCell}
                    </th>
                </>
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )
        }
        </tr>
    );
}