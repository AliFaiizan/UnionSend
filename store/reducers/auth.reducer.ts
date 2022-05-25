import {ISLOGIN} from '../actions/auth.action'

type fState={
    isLoggedIn:Boolean
}

const initialState:fState={
    isLoggedIn:false
}

export default (state=initialState,action:any) => { 
    switch(action.type){
        case ISLOGIN:{
            return {
                isLoggedIn:true
            }
        }

        
    }
    return state;
    
 }