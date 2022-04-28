import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import APIServer from "../APIServer";
import PageHeader from "../components/PageHeader";
import { getChapsStore } from "../stateManagements/actions/actions";
import store from "../stateManagements/store/store";

export default function ChapNovel(){
    const [lstChaps, setLstChaps] = useState([])
    const storeChaps = useSelector(state => state.chaps)
    //CALL API
    useEffect(()=>{
        getAllChaps()
    },[])
        //list chaps
        const getAllChaps = () => {
            APIServer.getChap().then((response) => {
                store.dispatch(getChapsStore(response))
                setLstChaps(response)
                
            }).catch((error)=>{
                console.log(error)
            })
        }

//useNavigate
        const navigate = useNavigate()
    //GET novels by param
    let param = useParams();
    let {chapId}  = param
    console.log("chapId",chapId)

    //GET chap by id
    const chapById =  storeChaps.filter(item => item.id === Number(chapId))   
    console.log("chapById",chapById)

    const onHandleNextChap = (status) => {
            status ?  navigate(`/chuong/${Number(chapId)+1}`) :  navigate(`/chuong/${Number(chapId)-1}`)
     }

     //get number of chaps by id novel
     const idLocal = sessionStorage.getItem("idNovel")
     let listChap = storeChaps.filter(item => item.idNovels === Number(idLocal))
     console.log("listChap",listChap)

    return <>
        <div className="header_chapNovel">
            <PageHeader />
        </div>
        <div className="main">
             <div className="content">
                <Container >
                      <div className="btn_left-right">
                          <p className="btn_item btn_left" onClick={() => onHandleNextChap(false)}>Chương trước</p>
                          <p className="btn_item btn_right" onClick={() => onHandleNextChap(true)} >Chương sau</p>
                      </div>
                      <div className="name_chap">
                            {   
                                chapById.map(item => <p key={item.id}>{item.nameChap}</p> )
                            }
                      </div>
                      <div className="chap_content">
                            {
                                chapById.map(item => <p key={item.id}>{item.content}</p> )
                            }
                      </div>
                </Container>
             </div>
         </div>
    </>
}