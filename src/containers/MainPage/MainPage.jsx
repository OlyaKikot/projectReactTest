import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import * as actions from './actions'
import React from 'react';
import s from "./MainPage.module.css"
import loader from "./images/loader.gif"


const MainPage =()=>{
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(actions.getMainPageData.request());
}, [dispatch]);

const data = useSelector(state => state.mainPageReducer.data)
const loading = useSelector(state=>state.mainPageReducer.loading)
console.log(loading)
console.log("data",useSelector(state => state.mainPageReducer))

    return(
        <>
        {loading && <div className={s.loader}><img src={loader} alt="loader"/></div>}
    {data && !loading && <div className={s.wrapper}>
        <h2 className={s.title}>{data.name}</h2>
        <p className={s.text}>height: <span className={s.textAccent}>{data.height}</span></p>
        <p className={s.text}>mass: <span className={s.textAccent}>{data.mass}</span></p>
        <p className={s.text}>hair_color: <span className={s.textAccent}>{data.hair_color}</span></p>
        <p className={s.text}>skin_color: <span className={s.textAccent}>{data.skin_color}</span></p>
        <p className={s.text}>gender: <span className={s.textAccent}>{data.gender}</span></p>
        <h2 className={s.title}>films</h2>
        <ol className={s.list}>
            {data.films.map((film)=><li key={film} className={s.item}><span>{film}</span></li>)}
        </ol> 
    </div>
    }
    {!data&& !loading && <div className={s.default}>No data to display</div>}
</>
    ) 
    
};
export default  MainPage;