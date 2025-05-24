import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySection from './BodySection';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },
});

const BodySectionWithMarginBottom = ({ children, title }) => {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
};

export default BodySectionWithMarginBottom;
