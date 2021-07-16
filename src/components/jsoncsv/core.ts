import { Parser }from 'json2csv';

function getCSV(fields: any, input: string): string {
    try {
        const parser = new Parser(fields);
        return parser.parse(JSON.parse(input)) || '';
    }
    catch (err) {
        console.error(err);
        return '';
    }
}

export {
    getCSV
}
