import {screen, render} from '@testing-library/react';
import CourseList from './CourseList'
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const coursesArray = [
    {id: 1, name: 'ES6', credit: 60 },
    {id: 2, name: 'Webpack', credit: 20 },
    {id: 3, name: 'React', credit: 40 },
]

test ('render 5 rows when it receive an array', () =>{
    render(<CourseList courses={coursesArray} />)
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(5);
})

test('render 1 row whenever it receive an empty array', () => {
    render(<CourseList courses={[]} />)
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(1);
})