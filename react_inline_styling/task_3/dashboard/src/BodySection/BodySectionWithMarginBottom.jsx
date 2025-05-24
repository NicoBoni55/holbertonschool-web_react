import BodySection from './BodySection';
import {StyleSheet, css} from 'aphrodite';

function BodySectionWithMarginBottom({title, children}) {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    )
}

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    '@media (max-width: 900px)': {
        alignItems: 'left',
        marginLeft: '10px',
        maxWidth: '100%',
    }
}
});

export default BodySectionWithMarginBottom;