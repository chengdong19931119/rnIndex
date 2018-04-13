import { environments } from './env';

export const StorageKey = {
    loginState: 'loginState'
};

export const Thumbnail = {
    list: url => url && `${url}?x-oss-process=style/150byh`,
    detail: url => url && `${url}?x-oss-process=style/300byh`
};


export const API = {
    
};