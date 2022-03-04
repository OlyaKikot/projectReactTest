import {createReducer} from "@reduxjs/toolkit";
import * as actions from './actions';

const initialState ={
    loading: false,
    error:null,
    data:null
};

const reducer= createReducer(initialState,{
    [actions.getMainPageData.REQUEST]: (state)=>{
        state.loading=true;
    },
    [actions.getMainPageData.SUCCESS]:(state,{payload})=>{
        state.loading=false;
        state.data=payload;
    },
     [actions.getMainPageData.REJECT]: (state)=>{
        state.loading=false;
    },
})

const mainPageData = (state)=>state.mainPageReducer.data;


const selectors = {
    mainPageData
}

 export{reducer,initialState,selectors};
 export default reducer;