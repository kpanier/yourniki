export function createTodayYournalID(): string {
    return dateToYournalIDString(new Date());
}

export function dateToYournalIDString(date: Date): string {
    return `.yournal/${date.getFullYear()}_${createZeroPrefix(date.getMonth() + 1)}${(date.getMonth() + 1)}_${createZeroPrefix(date.getDate())}${date.getDate()}.md`;
}

function createZeroPrefix(n: number): string {
    if (n < 10) {
        return '0';
    }
    return '';
}