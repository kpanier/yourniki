import * as fs from "fs";

const YOURNAL_DIR = '.yournal/';

export function getYournalEntryList(notesBasePath: string): string[] {
    return fs.readdirSync(notesBasePath + '/' + YOURNAL_DIR);
}

export function createIDFromFileName(fname: string) {
    return YOURNAL_DIR + fname;
}

export function createTodayYournalID(): string {
    return dateToYournalIDString(new Date());
}

export function dateToYournalIDString(date: Date): string {
    return `${YOURNAL_DIR}${date.getFullYear()}_${createZeroPrefix(date.getMonth() + 1)}${(date.getMonth() + 1)}_${createZeroPrefix(date.getDate())}${date.getDate()}.md`;
}

function createZeroPrefix(n: number): string {
    if (n < 10) {
        return '0';
    }
    return '';
}

