import {mineTypeMap} from './db';

export const mineType2extname = (mineType: string): string => {
    const findExtname = mineTypeMap[mineType];
    if(findExtname?.length > 0){
        return `.${findExtname[0]}`;
    }
    return '';
};
export const extname2mineType = (extname: string): string => {
    const parse = Object.entries(mineTypeMap);
    const active = parse.find(row => {
        return row[1].find(extnameRow => extnameRow === extname);
    });
    if(active){
        return active[0];
    }
    return '';
};
