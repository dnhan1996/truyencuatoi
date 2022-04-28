import React, { memo } from "react"
import { BsJustify } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

 function ResPageHeader({imgURL}){
    return <>
        <nav className="nav-header_mobile">
            <div className="nav-container_mobile">
                <div className="nav-header_menu_logo">
                    <img src="https://metruyenchu.com/assets/images/logo.png?130223 2x" alt="#" />
                </div>  
                <div className="nav-btn_header">
                    <div className="btn_search">
                        <BiSearch/>
                    </div>
                    <div className="btn_burger-menu">
                        <BsJustify/>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default memo(ResPageHeader)