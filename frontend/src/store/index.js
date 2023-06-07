import {createSlice,configureStore} from '@reduxjs/toolkit';


const stockUpdateSlice = createSlice({
      name:'stockUpdate',
      initialState:{
        id:'',
        date:'',
        salesRep:'',
        vehicle:'',
        route:'',
        itemList:''
      },
      reducers:{
        add(state,action){
            state.id = action.payload.id;
            state.date = action.payload.date;
            state.salesRep = action.payload.salesRep;
            state.vehicle = action.payload.vehicle;
            state.route = action.payload.route;
            state.itemList = action.payload.itemList;
        }
      }
});

const store = configureStore({
    reducer:{stockUpdate:stockUpdateSlice.reducer}
});

export const stocKupdateAction  = stockUpdateSlice.actions;


export default store;