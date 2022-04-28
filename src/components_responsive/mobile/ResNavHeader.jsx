import { FaThLarge } from "react-icons/fa"
import { AiFillSignal, AiFillStepForward } from "react-icons/ai"


export default function ResNavHeader(){ 
    return <>
        <div className="nav_menu">
            <p className="nav_menu_clone nav_menu-list"><span className="nav_menu-icon"><FaThLarge/></span>Danh sách</p>
            <p className="nav_menu_clone nav_menu-rank"><span  className="nav_menu-icon"><AiFillSignal/></span>Xếp hạng</p>
            <p className="nav_menu_clone  nav_menu-upload"><span  className="nav_menu-icon"><AiFillStepForward/></span>Đăng truyện</p>
        </div>
    </>
}