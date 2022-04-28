import React, { memo, useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import APIServer from "../APIServer";

import store from "../stateManagements/store/store";
import { getLabelsStore, getNovelStore } from '../stateManagements/actions/actions';


 export default function PageHeader(){
     //GET IMAGE FROM LABEL
    const storeLabel = useSelector(state => state.labels)

    //GET IMAGE LABEL
    const [listLabel, setListLabel] = useState([]); 
    
    useEffect(()=>{
        getListLabel()
    },[])
    let listLB = []
    const getListLabel = () => {
        APIServer.getLabel().then((response) => {
            store.dispatch(getLabelsStore(response))
            listLB = response;
            console.log("res label",response)
            setListLabel(listLB)
            
        }).catch((error) => console.log(error));
    }


    //random function
    const getRandom = (arr) => {
        return Math.floor(Math.random() * arr.length ) +1;
    }

    //get list id
    const getId  = storeLabel.map(item => item.id)
    console.log("getIdlabel",getId)
    //get id random 
    const idRadom = getRandom(getId)
    console.log("id label random",idRadom )

    
     //get image by random ID
    const getItemByID = storeLabel.filter(item => item.id === idRadom )
    const imgURL = getItemByID.map(item => item.url);
    console.log("getItemByID",getItemByID.map(item => item.url))
    return <>
        <nav className="nav-header">
            {/* header responsive for PC*/}
            <div className="nav-container">
                <div className="nav-header_menu">
                   <ul className="nav-header_menu_list">
                       <li className="nav-header_menu_logo">
                            <Link to="/index"><img src="https://metruyenchu.com/assets/images/logo.png?130223 2x" alt="#" /></Link>
                       </li>
                       <li className="nav-header_menu_category"><AiOutlineMenu/><span>Thể loại</span>
                       <li className="nav-menu_category_submenu">
                            <ul className="nav-menu_category_list-submenu">
                                <li>Tất cả</li>
                                <li>Tiên Hiệp</li>
                                <li>Huyền Huyễn</li>
                                <li>Khoa Huyễn</li>
                                <li>Võng Du</li>
                                <li>Đô Thị</li>
                                <li>Đồng Nhân</li>
                                <li>Dã Sử</li>
                                <li>Cạnh Kỹ</li>
                                <li>Huyền Nghi</li>
                                <li>Kiếm Hiệp</li>
                                <li>Kỳ Ảo</li>
                            </ul> 
                        </li>         
                       </li>
                       <li className="nav-header_menu_ranked">Bảng Xếp Hạng
                       <li className="nav-header_menu_ranked_submenu">
                            <ul className="nav-header_menu_ranked_list-submenu">
                                <li className="item">Thịnh Hành</li>
                                <li>Đọc Nhiều</li>
                                <li>Tặng Thưởng</li>
                                <li>Đề Cử</li>
                                <li>Yêu Thích</li>
                                <li>Thảo Luận</li>
                            </ul>
                        </li>
                         
                       </li>
                       <li className="inputSearch">
                           <input type="text" placeholder="Tìm kiếm" />
                            <button className="btnSearch"><BiSearch  className="iconSearch"/></button> 
                       </li>
                       <li  className="btnOrange  btnUpload">Đăng Truyện</li>
                       <li className="btnLogin">
                           <Link to="/sign-in"><span className="btnOrange">Đăng Nhập</span></Link>
              
                           <span className="btnOrange">Đăng Ký</span>
                       </li>
                       
                   </ul>
                </div>
                
            </div>

{/*************Image Header*****************/}
            <div className="header-image">
                    <img src={imgURL} alt="#"  />
            </div>
        </nav>

    </>
}

