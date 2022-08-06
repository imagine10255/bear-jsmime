import {mineTypeMap} from './db';

export const mineType2extname = (mineType: string): string => {
    const findExtname = mineTypeMap[mineType];
    if(findExtname?.length > 0){
        return `.${findExtname[0]}`;
    }
    return '';
};