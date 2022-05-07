import { Container } from "@mui/material";
import PageHeader from "../components/PageHeader";


import { FaGlasses } from 'react-icons/fa';

import { FcCloseUpMode,FcLike } from "react-icons/fc";


import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


import APIServer from "../APIServer";

import { getChapsStore, getNovelStore } from '../stateManagements/actions/actions';

import store from "../stateManagements/store/store";
import Swal from "sweetalert2";


export default function Details(){
    
    const storeNovels = useSelector(state => state.novels)
    const storeChaps = useSelector(state => state.chaps)

    const [lstNovel, setLstNovels] = useState([])
    const [lstChaps, setLstChaps] = useState([])
    const [numberFlower, setNumberFlower] = useState()

//useNavigate 
let navigate  = useNavigate(); 

const sendIdFromDetail = (id) => {
    navigate(`/chuong/${id}`)
}


//Call API
    useEffect(() => {
        getAllNovels();
        getAllChaps();
    },[])
    //list novels
    const getAllNovels = () => {
        APIServer.getNovel().then((response) => {
            store.dispatch(getNovelStore(response))
            setLstNovels(response)
        }
        ).catch( (error) => console.log(error))
    }
    //list chaps
    const getAllChaps = () => {
        APIServer.getChap().then((response) => {
            store.dispatch(getChapsStore(response))
            setLstChaps(response)
            
        }).catch((error)=>{
            console.log(error)
        })
    }

    console.log("store chap", storeChaps)
//GET novels by param
    let param = useParams();
    const {novelId}  = param
    console.log("novelId",novelId)

    const itemGot = storeNovels.filter(item => item.id === Number(novelId))

//GET number of chaps
    //get chaps by id novel
    const listChapItem = storeChaps.filter(item => item.idNovels === Number(novelId))
    console.log("listChapItem",listChapItem)
    //get number of list
    const numberChaps = listChapItem.length 
    console.log("numberChaps",numberChaps)
    //get max Id of chap
    const lstIdChap = listChapItem.map(item => item.id)
    const maxChap = Math.max.apply(Math, lstIdChap)
    //get min if of chap
    const minChap = Math.min.apply(Math, lstIdChap)
        //get newest chap
    const newestChap = listChapItem.filter(item => item.id === maxChap)
        //get first chap (min)
    const firstChap = listChapItem.filter(item => item.id === minChap)
    const firstId = firstChap.map(item => item.id)
    
//Sweet Alert 
const updateSuccess = () => {
    Swal.fire(
        'Amazing!',
        'Tặng hoa thành công!',
        ' Good job em!'
      )
}
//UPDATE flower
const onHandleUpdate = (id) => {
    const flower = storeNovels.map(item => item.id === id ? {...item, flower: item.flower += 100 } : item)

    const dataCandyUpdate = flower.find(item => item.id === id)
    delete dataCandyUpdate.id

    console.log("dataCandyUpdate",dataCandyUpdate)
    APIServer.addCanDy(id,dataCandyUpdate).then(response => {
        setNumberFlower(response)
})
updateSuccess()
}



    return <>
<PageHeader/>
<div className="main-body">
     <div className="index">  
        <Container fixed>
            <section id="appoint">      
               <div className="details">
                    <div className="detail-header">
                        {
                            itemGot.map(item => <div key={item.id} className="main-detail">
                                                    <div className="detail-header-left">
                                                        <img src={item.img} alt="#" />
                                                    </div>
                                                    <div className="detail-header-right">
                                                        <h3>{item.nameTruyen}</h3>
                                                        <div className="d-flex">
                                                            <span>{item.author}</span>
                                                            <p>{item.tag}</p>
                                                        </div>
                                                        <div className="novel_details">
                                                            <p className="total_chaps"> 
                                                                <span className="total_chaps_number">{numberChaps}</span>
                                                                <span>Chương</span>
                                                            </p>
                                                            <p className="total_views">
                                                                <span className="total_chaps_view">{item.popular}</span>
                                                                <span>lượt xem</span>
                                                            </p>
                                                        </div>
                                                        <div className="detail-header-right_bottom">
                                                             <p className="btn_item btn_read">
                                                                 <FaGlasses/>
                                                                <span onClick={() => sendIdFromDetail(firstId)}>Đọc truyện</span>
                                                             </p>
                                                             <p className="btn_item btn_ticker">
                                                                 <FaGlasses/>
                                                                 <span>Đánh dấu</span> 
                                                             </p >
                                                             <p className="btn_item btn_nominations">
                                                                 <FaGlasses/>
                                                                 <span onClick={() => onHandleUpdate(item.id)}>Đề cử</span> 
                                                             </p>
                                                        </div>
                                                     </div>

                            </div> )
                        }

                    </div>

                    {/* body header */}
                    <div className="lst-menu">
                        <ul className="ul-menu">
                            <li className="introducer" > Giới thiệu </li>
                            <li className="rate1">Đánh giá</li>
                            <li className="list-chap">D.S chương()</li>
                            <li className="comments" style={{textAlign:"center"}} >Bình luận</li>
                            <li className="fans" style={{textAlign:"center"}}  >Hâm mộ</li>
                        </ul>
                        <div className="list-menu_bottom">
                            <div className="introduce">
                                {
                                    itemGot.map(item => <p key={item.id}>{item.intro}</p>)
                                }
                                <div className="bottoom-detail">
                                    <ul className="lst-Intro">
                                        <li><span style={{fontWeight:"600"}}>Cảm xúc</span>
                                        <span style={{paddingLeft: "5%"}}><FcLike/>1325</span>
                                        </li>
                                        <li> <span style={{fontWeight:"600"}}>Đề cử</span> <span style={{paddingLeft: "5%"}}><FcCloseUpMode/>{
                                            itemGot.map(item => <span key={item.id}>{item.flower}</span>)
                                        }</span></li>
                                        <li>Chương mới nhất : {
                                            newestChap.map(item => item.nameChap)
                                            }</li>
                                    </ul>
                           </div>       
                            </div>
                            
                        </div>
                    </div>
               </div>
            </section>
        </Container>
     </div>
</div>       
    </>
}