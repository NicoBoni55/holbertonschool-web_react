import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const CourseListRow = ({ isHeader = false, textFirstCell = '', textSecondCell = null }) => {
    const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;

    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr className={css(rowStyle)}>
                    <th colSpan={2} className={css(styles.headerCellSpan)}>
                        {textFirstCell}
                    </th>
                </tr>
            );
        } else {
            return (
                <tr className={css(rowStyle)}>
                    <th className={css(styles.headerCell)}>{textFirstCell}</th>
                    <th className={css(styles.headerCell)}>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr className={css(rowStyle)}>
                <td className={css(styles.defaultCell)}>{textFirstCell}</td>
                <td className={css(styles.defaultCell)}>{textSecondCell}</td>
            </tr>
        );
    }
};

const styles = StyleSheet.create({
    defaultRow: {
        backgroundColor: '#f5f5f5ab',
    },
    headerRow: {
        backgroundColor: '#deb5b545',
    },
    headerCell: {
        borderBottom: '1px solid gray',
        borderRight: '1px solid gray',
        fontWeight: 'bold',
        padding: '0.5em',
    },
    headerCellSpan: {
        borderBottom: '1px solid gray',
        borderRight: '1px solid gray',
        fontWeight: 'bold',
        padding: '0.5em',
        textAlign: 'center',
    },
    defaultCell: {
        borderBottom: '1px solid gray',
        borderRight: '1px solid gray',
        padding: '0.5em',
    },
});

export default CourseListRow;
