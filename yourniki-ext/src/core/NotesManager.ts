import * as fs from 'fs';

export class NotesManager {

    constructor(private basePath: string) {
    }

    getNotePathToTouchedFile(id: string): string {
        let result = this.basePath + '/' + id;
        if (!fs.existsSync(result)) {
            let pathDir = result.substr(0, result.lastIndexOf('/'));
            if (!fs.existsSync(pathDir)) {
                fs.mkdirSync(pathDir, { recursive: true });
            }
            fs.writeFileSync(result, '');
        }
        return result;
    }

}