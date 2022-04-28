import { BsPerson } from "react-icons/bs"
import { BiBook } from "react-icons/bi"
import { GiFlowerPot } from "react-icons/gi"

export default function ResCardRank({maxItem,arr, divId}){

    const getDivId = (value) => {
        const flower = document.getElementsByClassName("r_flower")[0]
        const candy = document.getElementsByClassName("r_candy")[0]
        const popular = document.getElementsByClassName("r_popular")[0]
        switch (value) {
            case 1:
                popular.style.display = "none"
                candy.style.display = "block"
                flower.style.display = "none"
                break;
            case 2:
                popular.style.display = "block"
                candy.style.display = "none"
                flower.style.display = "none"
                break;
            case 3:
                popular.style.display = "none"
                candy.style.display = "none"
                flower.style.display = "block"
                break;
            default:
                break;
        }
    }


    getDivId()
    return <>
          <div className="rank__view">
                <div className="rank__view-list">
                    <div className="rank__view-list-content">
                            <div className="maxPopularItem">
                                <ul className='ul-maxPopularItem'>
                                    {
                                        maxItem.map(item => <li  key={item.id}>
                                                                        <div className="item_top-content" >  
                                                                            <div className='item_top-name'>
                                                                                <p className='img_name-index'>
                                                                                    <img src="https://metruyenchu.com/assets/images/icons/medal-1.svg" alt="#"/>
                                                                                </p> 
                                                                                <p className='item_nameTruyen'><a href="http://details" target="_blank" rel="noopener noreferrer">{item.nameTruyen}</a></p>
                                                                            </div>
                                                                            <p className='item-p'>
                                                                                <span className="r_flower">{item.flower.toLocaleString()} </span>
                                                                              
                                                                                
                                                                                <span className='top_popular-icon'><GiFlowerPot className="glasses-icon"/></span>
                                                                            </p>
                                                                            <p className='item-p'>
                                                                                <span><BsPerson/></span>
                                                                                {item.author}
                                                                            </p>
                                                                            <p className='item-p'>
                                                                                <span><BiBook/></span>
                                                                                {item.tag}
                                                                            </p>
                                                                        </div>
                                                                        
                                                                        <div className='img_top-rank'>
                                                                            <img  src={item.img} alt="#"/>
                                                                        </div>
                                                                    </li>
                                        )

                                    }
                                </ul>                              
                            </div>
                            <div className="list-popular">
                                {
                                    arr.map((item,index) => item.map(pars => <li key={pars.id} className="rank_nameTruyen">  
                                                                                        <span className='rank_name-index'>{index+2}</span>       
                                                                                        <span  className="r_nameTruyen" >{pars.nameTruyen} </span>
                                                                                        <span className="r_flower">{pars.flower.toLocaleString()}</span>
                                                                                      
                                                                                    </li>))
                                }
                            </div>                          
                    </div>
                </div>
            </div> 
    </>
}