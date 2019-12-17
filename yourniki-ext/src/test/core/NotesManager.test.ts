import { equal, ok } from 'assert';
import * as fs from 'fs';
import * as os from 'os';
import { NotesManager } from '../../core/NotesManager';



suite('Notes Manager tests', () => {

    function getTempWorkDir(): string {
        return os.tmpdir() + '/.yourwiki';
    }

    setup('Setup', () => {
        if (fs.existsSync(getTempWorkDir())) {
            fs.rmdirSync(getTempWorkDir(), { recursive: true });
        }
    })

    test('Get Path to existing file', () => {
        fs.mkdirSync(getTempWorkDir() + '/.yournal/', { recursive: true });
        fs.writeFileSync(getTempWorkDir() + '/.yournal/test.md', '');

        equal(getTempWorkDir() + '/.yournal/test.md', new NotesManager(getTempWorkDir()).getNotePathToTouchedFile('.yournal/test.md'));
    });

    test('Create and get Path to new file', () => {

        equal(getTempWorkDir() + '/.yournal/test.md', new NotesManager(getTempWorkDir()).getNotePathToTouchedFile('.yournal/test.md'));

        ok(fs.existsSync(getTempWorkDir() + '/.yournal/test.md'));
    });

    test('Get Wiki Pages', () => {
        fs.mkdirSync(getTempWorkDir());
        fs.writeFileSync(getTempWorkDir() + '/test.md', '');
        fs.writeFileSync(getTempWorkDir() + '/second.md', '');

        let pages = new NotesManager(getTempWorkDir()).getWikiPageNames();

        ok(pages);
        equal(2, pages.length);
    });

    test('Get Wiki Pages without hidden directory', () => {
        fs.mkdirSync(getTempWorkDir()+ '/.yournal/',{recursive:true});
        fs.writeFileSync(getTempWorkDir() + '/test.md', '');

        let pages = new NotesManager(getTempWorkDir()).getWikiPageNames();

        ok(pages);
        equal(1, pages.length);
        equal('test.md', pages[0]);
    });

});