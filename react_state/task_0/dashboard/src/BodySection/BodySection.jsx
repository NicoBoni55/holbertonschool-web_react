import { css, StyleSheet } from "aphrodite";

function BodySection({title, children}) {
    return (
        <div className={css(styles.bodySection)}>
            <h2 className={css(styles.h2)}>{title}</h2>
            {children}
        </div>
    )
}

const styles = StyleSheet.create({
    bodySection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        paddingTop: '1px',
        paddingleft: '10px',

        borderBottom: '2px solid #e0354b',
        '@media (max-width: 900px)': {
            borderBottom: 'none',
            alignItems: 'left',
        }
    },
    h2: {
        '@media (max-width: 900px)': {
            fontSize: '26px',
            textAlign: 'left',
            padding: '0 10px',
        }
    }
});

export default BodySection;