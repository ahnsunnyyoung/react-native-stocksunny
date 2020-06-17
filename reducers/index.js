import produce from "immer";
import _ from 'lodash';

const baseState = {
    loading: true,
    error: "",
    stocks:{
    },
    news:[
    ],
    newsSearch:{
    },
    myList:[
    ],
    candle: {},
};

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

const reducer = produce((state, action) => {
    switch(action.type){
        case "LOAD_STOCK":
            state.stocks = action.payload[0];
            state.news = action.payload[1];
            state.newsSearch = action.payload[2];
            break;  
        case "SELECT":
            console.log("변화 목표", !state.stocks[action.payload].selected)
            state.stocks[action.payload].selected = !state.stocks[action.payload].selected;
            break; 
        case "ADD_MYLIST":
            state.myList = action.payload
            break;  
        case "LOAD_CANDLE":
            state.candle = action.payload;
            break;
        case 'ERROR':
            state.error = action.payload;
            break;
        case 'CLEAR_ERRORS':
            state.error = null;
            break;
        case 'START_LOADING':
            state.loading = true;
            break;
        case 'END_LOADING':
            state.loading = false;
            break;
        default:
            break;
    }
}, baseState); 

export default reducer;