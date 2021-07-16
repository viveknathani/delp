import csvtojsonv2 from 'csvtojson';

async function getJSON(input: string): Promise<any> {

    try {
        const res = await csvtojsonv2().fromString(input);
        return res;
    } 
    catch (err) {
        console.error(err);
    }
}

export {
    getJSON
}
