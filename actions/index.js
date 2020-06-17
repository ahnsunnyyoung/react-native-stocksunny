import axios from 'axios';

const BASE_URL = "https://finnhub.io/api/v1/";
const API_KEY = "bqnc08frh5re7283le90";
const today = new Date();  
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let companyResult = {}

function toTimestamp(year,month,day,hour,minute,second){
    var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
    return datum.getTime()/1000;
   }

function formatting(candle){
    var result = [];
    for(var i=0; i<candle.data.t.length; i++ ){
        var a ={};
        a.x= new Date(candle.data.t[i]*1000);
        var list =[candle.data.o[i],candle.data.h[i],candle.data.l[i],candle.data.c[i]];
        a.y=list;
        result.push(a);
    }
    return result
}

export function loadStock(symbol) {
    axios.get(`${BASE_URL}quote?symbol=${symbol}&token=${API_KEY}`).then( (company) => {
        company.data.selected = false;
        company.data.diff = (company.data.c - company.data.pc).toFixed();
        company.data.percent = ((company.data.c - company.data.pc)/company.data.pc*100).toFixed(2);
        company.data.ticker = symbol;
        axios.get(`${BASE_URL}stock/profile2?symbol=${symbol}&token=${API_KEY}`).then( (profile) => {
            company.data.profile = profile.data;

            axios.get(`${BASE_URL}stock/candle?symbol=${symbol}&resolution=1&from=1572651390&to=1572910590&token=${API_KEY}`).then( (candle) => {
                var candles = [];
                candles.push(candle.data.c);
                candles.push(candle.data);
                company.data.symbolCalendar = candles;
                console.log(company.data)
                companyResult[symbol] = company.data
                return company.data;
            }).catch((err) => {
                console.log(err)
            })
            
        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err)
    })
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function loadStocks() {
    return async function(dispatch) {
        dispatch({ type: 'START_LOADING' });
        dispatch({ type: 'CLEAR_ERRORS' });
        const f_url = `${BASE_URL}/news?`;
        const BASE_COMPANY = [ "AAPL", "TSLA", "AMZN", "FB", "MSFT", "AAL"];
        var result = [];
        try{
            for(let symbol of BASE_COMPANY) {      // Wait 1 sec between API calls
                // companyResult[symbol] = await loadStock(symbol);
                loadStock(symbol)

            }
            
            await timeout(8000)
            const general = await axios(f_url, {params: {
                category: 'general',
                minId:2,
                token: API_KEY
            }});
            var news = {};
            general.data.forEach(item => {
                if(news[item.id]){
                }else{
                    news[item.id] = item || {};
                }
            });
            result.push(companyResult);
            result.push(general.data);
            result.push(news);
            dispatch({
                type: 'LOAD_STOCK',
                payload: result,
            });
        }finally{
            dispatch({ type: 'END_LOADING' });
        }
    }
}

export function addList(list){
    return {
        type: 'ADD_MYLIST',
        payload: list,
    };
}

export function select(symbol){
    console.log("in select")
    return {
        type: 'SELECT',
        payload: symbol,
    };
}


