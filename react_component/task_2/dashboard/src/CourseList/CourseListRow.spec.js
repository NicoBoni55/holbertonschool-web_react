import {screen, render} from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    it('isHeader is true and textSecondCell is null', () => {
        render(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
        const th = screen.getByText('test');
        expect(th).toBeInTheDocument();
        const colspan = th.getAttribute('colSpan');
        expect(colspan).toBe('2');
    })
    it('isHeader is true and textSecondCell is not null', () => {
        render(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
        const th1 = screen.getByText('test');
        const th2 = screen.getByText('test2');
        expect(th1).toBeInTheDocument();
        expect(th2).toBeInTheDocument();
    })
    it('isHeader is false', () => {
        render(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
        const td1 = screen.getByText('test');
        const td2 = screen.getByText('test2');
        expect(td1).toBeInTheDocument();
        expect(td2).toBeInTheDocument();
    })
})