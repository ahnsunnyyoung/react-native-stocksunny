import produce from "immer";
const baseState = {
    loading: false,
    error: "",
    stocks:{
    },
    forex:{
    },
    news:{
        company:{

        },
        carr:[

        ],
        general:{

        },
        forex:{

        }
    },
    selected: undefined,
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
            if(state.stocks[action.payload[0].ticker]){
            }
            state.stocks[action.payload[0].ticker] = action.payload[0] || {};
            action.payload[1].forEach(item => {
                if(state.news.company[item.id]){
                }else{
                    state.news.company[item.id] = item || {};
                    state.news.carr.push(item);
                }
            });
            break;
        case 'LOAD_GENERAL_NEWS':
            action.payload.forEach(item => {
                if(state.news.general[item.id]){
                }else{
                    state.news.general[item.id] = item || {};
                }
            });
            break;  
        case 'LOAD_FOREX_NEWS':
            action.payload.forEach(item => {
                if(state.news.forex[item.id]){
                }else{
                    state.news.forex[item.id] = item || {};
                }
            });
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