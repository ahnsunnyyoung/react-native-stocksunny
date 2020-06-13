import produce from "immer";
const baseState = {
    loading: true,
    error: "",
    stocks:{
    },
    forex:{
    },
    news:[
    ],
    newsSeardh:{
        
    },
    candle: {},
    covid: [],
};



const reducer = produce((state, action) => {
    switch(action.type){
        case "COMPANY_SELECT":
            state.selected = action.payload;
            break;
        case "LOAD_CANDLE":
            state.candle = action.payload;
            break;
        case "LOAD_COVID":
            state.covid = action.payload;
            break;
        case "LOAD_STOCK":
            state.stocks = action.payload[0];
            state.news = action.payload[1];
            state.newsSearch = action.payload[2];
            break;  
        case 'LOAD_FOREX':
            state.forex = action.payload;
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