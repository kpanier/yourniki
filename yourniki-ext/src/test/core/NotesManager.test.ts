import { equal, ok } from 'assert';
import * as fs from 'fs';
import * as os from 'os';
import { NotesManager } from '../../core/NotesManager';

suite('Notes Manager tests', () => {

    setup('Setup', () => {
        if (fs.existsSync(os.tmpdir() + '/.yournal')) {
            fs.rmdirSync(os.tmpdir() + '/.yournal', { recursive: true });
        }
    })

    test('Get Path to existing file', () => {
        fs.mkdirSync(os.tmpdir() + '/.yournal');
        fs.writeFileSync(os.tmpdir() + '/.yournal/test.md', '');

        equal(os.tmpdir() + '/.yournal/test.md', new NotesManager(os.tmpdir()).getNotePathToTouchedFile('.yournal/test.md'));
    });

    test('Create and get Path to new file', () => {

        equal(os.tmpdir() + '/.yournal/test.md', new NotesManager(os.tmpdir()).getNotePathToTouchedFile('.yournal/test.md'));

        ok(fs.existsSync(os.tmpdir() + '/.yournal/test.md'));
    });

});