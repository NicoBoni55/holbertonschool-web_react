import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe('functions', () => {
    it ('getFullYear should return the current year', () => {
        const date = new Date();
        const year = date.getFullYear();
        expect(year).toBe(getCurrentYear());
    })

    it('getFooterCopy should return the correct string', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    })

    it('getLastestNotification should return the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    })
})
