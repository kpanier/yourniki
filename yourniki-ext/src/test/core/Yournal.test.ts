import { equal } from "assert";
import { createTodayYournalID, dateToYournalIDString } from "../../core/Yournal";

suite('Yournal util tests', () => {

    test('Test create today yournal id', () => {
        let d = new Date();
        let month = '' + (d.getMonth() + 1);
        if (d.getMonth() + 1 < 10) {
            month = '0' + month;
        }
        let day = '' + d.getDate();
        if (d.getDate() < 10) {
            day = '0' + day;
        }
        equal('.yournal/' + d.getFullYear() + '_' + month + '_' + day + '.md', createTodayYournalID());
    });

    test('Create yournal ID from date', () => {
        let d = new Date();
        d.setDate(10);
        d.setFullYear(2019);
        d.setMonth(9);

        equal('.yournal/2019_10_10.md', dateToYournalIDString(d));
    });

    test('Create yournal ID from date with prefix 0', () => {
        let d = new Date();
        d.setDate(8);
        d.setFullYear(2019);
        d.setMonth(3);

        equal('.yournal/2019_04_08.md', dateToYournalIDString(d));
    });

});