import {CHANGE_SEARCH_FIELD} from './constants.js';
//STEP 3 REDUX
const initialState = {
          searchField:''
};
//below is reducer
 export const searchRobots = (state = initialState ,action={}) =>{
          switch(action.type){ 
                    case CHANGE_SEARCH_FIELD :
                              return {...state,searchField:action.payload}
                    default:
                              return state
          }

 }