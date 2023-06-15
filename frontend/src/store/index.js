import { createSlice, configureStore } from "@reduxjs/toolkit";

const stockUpdateSlice = createSlice({
  name: "stockUpdate",
  initialState: {
    id: "",
    date: "",
    salesRep: "",
    vehicle: "",
    route: "",
    itemList: "",
  },
  reducers: {
    add(state, action) {
      state.id = action.payload.id;
      state.date = action.payload.date;
      state.salesRep = action.payload.salesRep;
      state.vehicle = action.payload.vehicle;
      state.route = action.payload.route;
      state.itemList = action.payload.itemList;
    },
  },
});


const repUpdateSlice = createSlice({
  name:"repUpdate",
  initialState :{
    name:"",
    mobile:"",
    email:"",
    nic:"",
    address:"",
    id:""
  },
  reducers:{
    add(state,action){
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.nic = action.payload.nic;
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.address = action.payload.address;
    }
  }
})


const ItemListUpdateSLice = createSlice({
  name: "ItemListUpdate",
  initialState: {
    id: "",
    items: [
      {
        id: "",
        des: "",
        price: 0,
        qty: 0,
      },
      {
        id: "",
        des: "",
        price: 0,
        qty: 0,
      },
      {
        id: "",
        des: "",
        price: 0,
        qty: 0,
      },
      {
        id: "",
        des: "",
        price: 0,
        qty: 0,
      },
    ],
  },
  reducers: {
    add(state, action) {
      state.id = action.payload.id;
      for (let i = 0; i < 4; i++) {
        state.items[i].id = action.payload.items[i].id;
        state.items[i].des = action.payload.items[i].des;
        state.items[i].price = action.payload.items[i].price;
        state.items[i].qty = action.payload.items[i].qty;
      }
    },
  },
});

const shopUpdateSlice = createSlice({
  name: "shopUpdate",
  initialState: {
    id: "",
    shopName: "",
    ownerName: "",
    nic: "",
    Rcode:"",
    mobile: "",
    location:"",
    address: "",
    email: "",
    
    
    
  },
  reducers:{
    add(state,action){
      state.id = action.payload.SID;
      state.shopName = action.payload.shop_name;
      state.ownerName = action.payload.Fname + " " + action.payload.Lname ;
      state.nic = action.payload.NIC;
      state.mobile = action.payload.phoneNo;
      state.email = action.payload.email;
      state.Rcode = action.payload.Rcode;
      state.location = action.payload.location;
      state.address = action.payload.address;
      
    }
  }
});

const store = configureStore({
  reducer: {
    stockUpdate: stockUpdateSlice.reducer,
    itemListUpdate: ItemListUpdateSLice.reducer,
    shopUpdate:shopUpdateSlice.reducer,
    repUpdate:repUpdateSlice.reducer
  },
});

export const stocKupdateAction = stockUpdateSlice.actions;
export const ItemListupdateAction = ItemListUpdateSLice.actions;
export const shopUpdateAction = shopUpdateSlice.actions;
export const repUpdateAction = repUpdateSlice.actions;

export default store;
