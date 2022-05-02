import { memo } from "react"
import { useNavigate } from "react-router-dom";

 function CardNovel({...props}){

    //useNavigate 
let navigate  = useNavigate(); 

const sendIdFromDetail = (id) => {
    navigate(`/truyen/${id}`)
}

    return <>
        <div className="card">
            <div className="main-card-rate">
                <div className="card-img-rate">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={props.img} alt="#" /></a>
                </div>
                <div className="card-in4-rate">
                    <p className="card-name-rate" onClick={() => sendIdFromDetail(props.idItem)}>{props.name}</p>
                    <p className="card_rate-rate">{props.rating}</p>
                    <p className="card_rate-intro">{props.intro}</p>
                    <div className="card-bottom-rate">
                        <span className="card card-author-rate">{props.author}</span>
                        <span className="card card-tag-rate">{props.tag}</span>
                    </div>
                </div> 
            </div>     
        </div>
    </>
}

export default memo(CardNovel)