import { memo, useState } from "react";
import { useSelector } from "react-redux";
import SliderImages from "./SliderImages";
import { BsPerson } from "react-icons/bs"

function MainSlider(){
    const storeNovels = useSelector(state => state.novels)
    //GET id from slider 
    const [idSlider, setIdSlider] = useState(1)

    const getIdFromSlider = (value) => {
        console.log("value",value)
        setIdSlider(value)
    }

    const getItemById = storeNovels.filter(item => item.id === idSlider)
    console.log("getItem",getItemById)


   console.log()

    return <>
          <div className="slider_new-novels">
            <SliderImages idFromSlider = {(value) => getIdFromSlider(value)}/>
        </div>     
        <div className="slider_new-novels_content">
            {
                getItemById.map(item => <div key={item.id} className="novel_content-item_active">
                        <p  className="name_item-active">{item.nameTruyen}</p>
                        <p className="intro_item-active">{item.intro}</p>
                        <div className="content_item-active">
                            <span className="content_item-active_author"><BsPerson/>{item.author}</span>
                            <span className="tag_item-active">{item.tag}</span>
                        </div>
                        <div className="btn-continue">
                            <a href="index.html" className="btnReading">Đọc ngay</a>
                        </div>
                </div>)    
            }
        </div> 
    </>
}


export default MainSlider