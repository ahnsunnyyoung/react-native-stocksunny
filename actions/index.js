import axios from 'axios';

const BASE_URL = "https://finnhub.io/api/v1/";
const API_KEY = "bqnc08frh5re7283le90";
const today = new Date();  
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let companyResult = {}
const from = toTimestamp(today.getFullYear(),today.getMonth()+1,today.getDate()-1,9,0,0);
const to = toTimestamp(today.getFullYear(),today.getMonth()+1,today.getDate(),9,0,0);

function toTimestamp(year,month,day,hour,minute,second){
    var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
    return datum.getTime()/1000;
   }

function formatting(candle){
    var result = [];
    for(var i=0; i<candle.data.t.length; i++ ){
        var a ={};
        a.x= new Date(candle.data.t[i]*1000);
        a.open=candle.data.o[i]
        a.close=candle.data.c[i]
        a.high=candle.data.h[i]
        a.low=candle.data.l[i]
        result.push(a);
    }
    console.log(result)
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

            axios.get(`${BASE_URL}stock/candle?symbol=${symbol}&resolution=60&from=${from}&to=${to}&token=${API_KEY}`).then( (candle) => {
                var candles = [];
                candles.push(candle.data.c);
                candles.push(formatting(candle));
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

export function loadCandle(){
    return async (dispatch) => {
        dispatch({ type: 'START_LOADING' });
        dispatch({ type: 'CLEAR_ERRORS' });
        const url = `${BASE_URL}/forex/candle?`;
        const from = toTimestamp(today.getFullYear(),today.getMonth()+1,today.getDate()-1,9,0,0);
        const to = toTimestamp(today.getFullYear(),today.getMonth()+1,today.getDate(),9,0,0);
        try{
            const USDcandle = await axios(url, {params: {
                symbol: 'OANDA:EUR_USD',
                resolution: 60,
                from:from,
                to:to,
                token: API_KEY
            }});
            const JPYcandle = await axios(url, {params: {
                symbol: 'OANDA:EUR_JPY',
                resolution: 60,
                from:from,
                to:to,
                token: API_KEY
            }});
            var result = {};
            result.usd = formatting(USDcandle);
            result.jpy = formatting(JPYcandle);
            dispatch({
                type: 'LOAD_CANDLE',
                payload: result,
            });
        }catch(error){
            dispatch({
                type: 'ERROR',
                payload: error
            });
        }finally{
            dispatch({ type: 'END_LOADING' });
        }
    };
}
