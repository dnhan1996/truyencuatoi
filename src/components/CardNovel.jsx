import { memo } from "react"

import { useNavigate } from 'react-router-dom';


 function CardNovel({...props}){
     let navigate  = useNavigate(); 

    const sendIdFromDetail = (id) => {
        navigate(`/truyen/${id}`)
    }

    return <>
        <div className="card">
            <div className="main-card">
                <div className="card-img">
                    <img src={props.img} alt="#" />
                </div>
                <div className="card-in4">
                    <p className="card-name" onClick={() => sendIdFromDetail(props.idItem)}>{props.name}</p>
                    <p className="card_rate" style={props.sendID === true ? {display:"flex"} : {display: "none"}}>{props.rating}</p>
                    <p className="card_intro">{props.intro}</p>
                    <div className="card-bottom">
                        <span className="card card-author">{props.author}</span>
                        <span className="card card-tag">{props.tag}</span>
                    </div>
                </div> 
            </div>     
        </div>
    </>
}

export default memo(CardNovel)