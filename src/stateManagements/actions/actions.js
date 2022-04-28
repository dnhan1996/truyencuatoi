export function getNovelStore(payload){
    return {type:'GET_ALL_NOVELS',payload}
};

export function getLabelsStore(payload){
    return {type:'GET_ALL_LABELS',payload}
}

export function getChapsStore(payload){
    return {type:'GET_ALL_CHAPS',payload}
}