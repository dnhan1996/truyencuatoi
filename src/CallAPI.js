import { useEffect, useState } from "react";
import APIServer from "./APIServer";
import { getLabelsStore, getNovelStore } from "./stateManagements/actions/actions";
import store from "./stateManagements/store/store";

    const getAllNovels = () => {
        APIServer.getNovel().then((response) => {
            store.dispatch(getNovelStore(response))
        
        }
        ).catch( (error) => console.log(error))
   
    }

//GET IMAGE LABEL
    
    const getListLabel = () => {
        APIServer.getLabel().then((response) => {
            store.dispatch(getLabelsStore(response))
            
        }).catch((error) => console.log(error));
    }
    
const CallAPI = {
    getAllNovels,
    getListLabel
}

export default CallAPI