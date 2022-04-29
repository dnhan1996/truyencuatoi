import React, { useRef } from 'react'
import { useEffect, useState, createContext } from "react";
import { useSelector } from 'react-redux';

import APIServer from "../APIServer";

import store from "../stateManagements/store/store";
import { getLabelsStore, getNovelStore } from '../stateManagements/actions/actions';

import moment from 'moment';

import { IoGlassesOutline } from "react-icons/io5";
import { BsPerson, BsArrowUpCircle } from "react-icons/bs"
import { BiBook } from "react-icons/bi"
import { GiFlowerPot } from "react-icons/gi"


import CardNovel from "../components/CardNovel";
import PageHeader from "../components/PageHeader";
import CardNovelRate from '../components/CardNovelRate';
import MainSlider from '../components/MainSlider';
import PageFooter from '../components/PageFooter';

import ResPageHeader from '../components_responsive/mobile/ResPageHeader';
import ResNavHeader from '../components_responsive/mobile/ResNavHeader';
import ResCardRank from '../components_responsive/mobile/ResCardRank';

import ResEditorSlider from '../components_responsive/mobile/ResEditerSlider';
import { useNavigate } from 'react-router-dom';



//useContext
export const dataNovel = createContext()
export const dataIdFromIndex = createContext()

export default function Index(props){
    const [listNovels, setListNovels] = useState([])


// Store novels
    const storeNovels = useSelector(state => state.novels)


//Call API
    useEffect(() => {
        getAllNovels();
      
    },[])

    const getAllNovels = () => {
        APIServer.getNovel().then((response) => {
            store.dispatch(getNovelStore(response))
            setListNovels(response)
        }
        ).catch( (error) => console.log(error))
   
    }

//GET appoint  items from list data
    const chooseNovel = storeNovels.filter(item => item.appoint === 'true')
    console.log("chooseNovel",chooseNovel)

//GET view from store novels
    const views = storeNovels.map(item => item.popular)
    const sortViews = views.sort((a,b) => b-a)
    console.log("sortViews",sortViews)
    //get list novels by sortView 
    let arrSortView = []
    for(let i = 1; i < sortViews.length; i++){
        arrSortView.push(storeNovels.filter(item => item.popular === sortViews[i]))
    }
    //get item has max popular
        let maxItemViews = storeNovels.filter(function(item,index){
            let maxItemViews;
            if(index === 0) {
                return maxItemViews = item;
            }
            return maxItemViews;
        })
//GET list from 1 to 10
    let arrNumber = []
    for(let i=0; i<=10; i++){
        arrNumber.push(i)
    }
//GET Candy from store novels
    const popular = storeNovels.map(item => item.candy)
    const sortPopular = popular.sort((a,b) => b-a)
    console.log("popular",popular)
  
    //get list novels by sortView 
    let arrSortPopular = []
    for(let i = 1; i <=10; i++){
        arrSortPopular.push(storeNovels.filter(item => item.candy === sortPopular[i]))
    }
    //get item has max popular
        let maxItemPopular = storeNovels.filter((item) => {
            let maxItemViews;
           if( item.candy === sortPopular[0]){
               return maxItemViews = item;
           }
           return maxItemViews
        })

    console.log("sortPopular[0]",sortPopular[0])
//GET flower from store novels
    const flowers = storeNovels.map(item => item.flower)
    const sortFlower = flowers.sort((a,b) => b-a)

    //get list novels by sortFlower
    let arrFlower = []
    for(let i = 1; i<10; i++){
        arrFlower.push(storeNovels.filter(item => item.flower === sortFlower[i]))
    }
    //get item has max flower
    let maxItemFlower = storeNovels.filter(function(item){
        let maxItem;
        if(item.flower === sortFlower[0]){
            return maxItem = item
        }
        return maxItem
    })

//GET top 10 item by rate
    const rating = storeNovels.map(item => item.rate)
    const sortRate = rating.sort((a,b) => b-a)
    
    let arrRating = []
    for( let i = 0; i < 6; i++){
        arrRating = storeNovels.filter(item => item.rate === sortRate[i] )
    }
    console.log("arrRating",arrRating)

//GET top 6 item complete

    let arrComplete = []
    for( let i = 1; i <= 6; i++){
        arrComplete.push(storeNovels.filter(item => item.id === i))
    }
    console.log("arrComplete",arrComplete)

//SEND id to get list rank
    const sendIDRank = (value) => {
        console.log("value",value)
        const view = document.getElementsByClassName("rank_view")[0];
        const popular = document.getElementsByClassName("rank_popular")[0];
        const flower = document.getElementsByClassName("rank_flower")[0];
        
        const mostRead = document.getElementsByClassName("most-read")[0];
        switch (value) {

            case 1:
                view.style.display = "block"
                popular.style.display = "none"
                flower.style.display = "none"

                mostRead.style.borderBottomColor = "orange"
                break;
            case 2:
                view.style.display = "none"
                popular.style.display = "block"
                flower.style.display = "none"
                break;
            case 3:
                view.style.display = "none"
                popular.style.display = "none"
                flower.style.display = "block"
                break;
        
            default:
                break;
        }
    }

//useNavigate 
let navigate  = useNavigate(); 

const sendIdFromDetail = (id) => {
    navigate(`/truyen/${id}`)
}

return <>
{/*  Header  */}
    <div className="page_header-pc">
        <PageHeader/>
    </div>
    <div className="page_header-mobile">
        <ResPageHeader/>
    </div>
    <dataNovel.Provider value={listNovels}>
    <div className="main-body">
{/* nominations */}
        <section id="nominations">
            <div className="main-container">       
                <div className="editor">
                    <h3>Biên tập viên đề cử</h3>
                    <div className="container-left">
                        {  
                            chooseNovel.map(item => <CardNovel key={item.id} idItem={item.id} name={item.nameTruyen} img={item.img} intro={item.intro} tag={item.tag} author={item.author} sendID={false}/>)
                        }
                    </div>
                </div>
                 <div className="container-right">
                      <div className="user-reading">
                          <h3>Đang đọc....</h3>
                      </div>
                      <div className="user-tutorial"></div>
                 </div>
            </div>      
        </section>
{/* update */}      
        <section id="update">
             <div className="update-content">
                 <p>Mới cập nhật</p>
             </div>        
             <div className="update-table">
                 <table id='tbUpdate'>
                     <tbody>
                        {
                            storeNovels.map(item => <tr key={item.id} >
                                <td>{item.tag}</td>
                                <td className='td-highlight' onClick={()=>sendIdFromDetail(item.id)}>{item.nameTruyen}</td>
                                <td className='td-highlight'>{item.chap}</td>
                                <td>{item.author}</td>
                                <td>{item.converter}</td>
                                <td>{moment(item.date, "DDMMYYYY").fromNow()}</td>
                            </tr>)                    
                        }
                     </tbody>
                     
                 </table>
             </div>
        </section>
{/*Rank*/}
        <section id="rank-session">
            {/* RANK VIEW*/}
            <div className="rank__view">
                <div className="rank__view-content">
                    <span className="rank__view-content_content1">Đọc nhiều tuần</span>
                    <span className='see_all'>Xem tất cả</span>
                </div>
                <div className="rank__view-list">
                    <div className="rank__view-list-content">
                            <div className="maxPopularItem">
                                <ul className='ul-maxPopularItem'>
                                    {
                                        maxItemViews.map(item => <li key={item.id} className="item-maxPopularItem">
                                                                        <div className="item_top-content">  
                                                                            <div className='item_top-name'>
                                                                                <p className='img_name-index'>
                                                                                    <img src="https://metruyenchu.com/assets/images/icons/medal-1.svg" alt="#"/>
                                                                                </p> 
                                                                                <p className='item_nameTruyen'>{item.nameTruyen}</p>
                                                                            </div>
                                                                            <p className='item-p'>
                                                                                {item.popular.toLocaleString()} 
                                                                                <span className='top_popular-icon'><IoGlassesOutline className="glasses-icon"/></span>
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
                                    arrSortView.map((item,index) => item.map(pars => <li key={pars.id} className="rank_nameTruyen">   
                                                                                        <span className='rank_name-index'>{index+2}</span>       
                                                                                        <span  className="r_nameTruyen" >{pars.nameTruyen} </span>
                                                                                        <span className="r_popular">{pars.popular.toLocaleString()}</span>
                                                                                    </li>))
                                }
                            </div>                          
                    </div>
                </div>
            </div> 
        {/* RANK CANDY*/}
         <div className="rank__view">
                <div className="rank__view-content">
                    <span className='rank__view-content_content1'>Thịnh hành tuần</span>
                    <span className='see_all'>Xem tất cả</span>
                </div>
                <div className="rank__view-list">
                    <div className="rank__view-list-content">
                            <div className="maxPopularItem">
                                <ul className='ul-maxPopularItem'>
                                    {
                                        maxItemPopular.map(item => <li key={item.id}>
                                                                        <div className="item_top-content">  
                                                                            <div className='item_top-name'>
                                                                                <p className='img_name-index'>
                                                                                    <img src="https://metruyenchu.com/assets/images/icons/medal-1.svg" alt="#"/>
                                                                                </p> 
                                                                                <p className='item_nameTruyen'>{item.nameTruyen}</p>
                                                                            </div>
                                                                            <p className='item-p'>
                                                                                {item.candy.toLocaleString()} 
                                                                                <span className='top_popular-icon'><BsArrowUpCircle className="glasses-icon"/></span>
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
                                    arrSortPopular.map((item,index) => item.map(pars => <li key={pars.id} className="rank_nameTruyen">   
                                                                                            <span className='rank_name-index'>{index+2}</span>       
                                                                                            <span  className="r_nameTruyen" >{pars.nameTruyen} </span>
                                                                                            <span className="r_popular">{pars.candy.toLocaleString()}</span>
                                                                                        </li>))
                                }
                            </div>                          
                    </div>
                </div>
            </div> 
        {/* RANK FLOWER */}
        {/* RANK CANDY*/}
        <div className="rank__view">
                <div className="rank__view-content">
                    <span className="rank__view-content_content1" >Đề cử tuần</span>
                    <span className='see_all'>Xem tất cả</span>
                </div>
                <div className="rank__view-list">
                    <div className="rank__view-list-content">
                            <div className="maxPopularItem">
                                <ul className='ul-maxPopularItem'>
                                    {
                                        maxItemFlower.map(item => <li key={item.id}>
                                                                        <div className="item_top-content">  
                                                                            <div className='item_top-name'>
                                                                                <p className='img_name-index'>
                                                                                    <img src="https://metruyenchu.com/assets/images/icons/medal-1.svg" alt="#"/>
                                                                                </p> 
                                                                                <p className='item_nameTruyen'>{item.nameTruyen}</p>
                                                                            </div>
                                                                            <p className='item-p'>
                                                                                {item.flower.toLocaleString()} 
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
                                    arrFlower.map((item,index) => item.map(pars => <li key={pars.id} className="rank_nameTruyen">  
                                                                                        <span className='rank_name-index'>{index+2}</span>       
                                                                                        <span  className="r_nameTruyen" >{pars.nameTruyen} </span>
                                                                                        <span className="r_popular">{pars.flower.toLocaleString()}</span>
                                                                                    </li>))
                                }
                            </div>                          
                    </div>
                </div>
            </div> 
        </section>
{/* *RATING */}
    <section id="section_rating">
        <div className="rating_content">
             <div className="rating_content-header">
                 <span>Đánh giá cao</span>
                 <span className='see_all'>Xem tất cả</span>
             </div>
             <div className="rating_card">
                  {
                     arrRating.map(item =><CardNovelRate key={item.id} name={item.nameTruyen} img={item.img} intro={item.intro} tag={item.tag} author={item.author} rating={item.rate} sendID={true}/>)
                  }
             </div>
        </div>
        <div className="rating_comment">
             <div className="rating_comment-header">
                 <span>Mới đánh giá</span>
                 <span className='see_all'>Xem tất cả</span>
             </div>
             <div className="rating_comment-slider">
                
             </div>
        </div>
    </section>
{/* NEW NOVELS */}
    <section id="section_new-novel">
         <div className="main-section_new-novel">
            <div className="section_header">
                <span className='section_header-content'>Mới đăng</span>
                <span className='see_all'>Xem tất cả</span>
            </div>
            <MainSlider/>
         </div>
         <div className="complete-section_new-novel">
              <div className="complete-section_new-novel_content">
                  <span className='complete_content_span1'>Đã hoàn thành</span>
                  <span className='see_all'>Xem tất cả</span>
              </div>
              <div className="complete-section_new-novel_list">
                  {
                       chooseNovel.map(item => <CardNovel key={item.id} idItem={item.id} name={item.nameTruyen} img={item.img} intro={item.intro} tag={item.tag} author={item.author} sendID={false}/>)
                  }
              </div>
         </div>
    </section>
  
</div>
{/* Responsive ----- Mobile */}
    <div className="main-body-mobile">
        <ResNavHeader/>
        <div className="container">
            <section className="container_reading">
                <p>Đang đọc....</p>
            </section>
            <section className="container_update">
                  <div className="update_content">
                      <p>Mới cập nhật</p>
                      <div className="update-table">
                        <table id='tbUpdate'>
                            <tbody>
                                {
                                    storeNovels.map(item => <tr key={item.id} >
                                        <td>
                                            <p className='tbUpdate_name'>{item.nameTruyen}</p> 
                                            <p className='tbUpdate_in4'>
                                                <span>{item.author}</span>
                                                <span>{item.tag}</span>
                                            </p>
                                        </td>
                                    </tr>)                    
                                }
                            </tbody>
                        </table>
                    </div>
                  </div>
            </section>
            <section className='container_ranking'>
                 <div className="ranking_content">
                     <p className='ranking_content-p'>Bảng xếp hạng tuần</p>
                 </div>
                 <div className="ranking_content-main">
                      <div className="ranking_choose">
                          <span className='most-read' onClick={() => sendIDRank(1)}>Đọc nhiều</span>
                          <span className='most-popular' onClick={() =>sendIDRank(2)}>Thịnh hành</span>
                          <span className='most-appoint' onClick={() =>sendIDRank(3)}>Đề cử</span>
                      </div>
                      <div className="ranking_list rank_view">
                          <ResCardRank  maxItem={maxItemViews} arr={arrSortView} divId={1}/>
                      </div>
                      <div className="ranking_list  rank_popular">
                          <ResCardRank  maxItem={maxItemPopular} arr={arrSortPopular} divId={2}/>
                      </div>
                      <div className="ranking_list  rank_flower">
                          <ResCardRank  maxItem={maxItemFlower} arr={arrFlower} divId={3}/>
                      </div>
                 </div>
            </section>
            <section id='slider_editor'>
                <div className="slider_editor-content">
                    <p>BTV Đề Cử</p>
                </div>
                <ResEditorSlider/>
            </section>
         </div>
    </div>

 {/*  FOOTER */}  
    <footer>
        <div id="main_footer">
            <PageFooter/>
        </div>
    </footer>
    
     </dataNovel.Provider>
       
    </>
}