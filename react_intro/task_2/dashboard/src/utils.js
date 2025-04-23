export function getCurrentYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex && typeof isIndex === 'boolean') {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}