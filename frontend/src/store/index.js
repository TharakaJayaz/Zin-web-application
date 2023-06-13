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
    mobile: "",
    email: "",
    dob: "",
    address: "",
    sex: "",
  },
  reducers:{
    add(state,action){
      state.id = action.payload.id;
      state.shopName = action.payload.shopName;
      state.ownerName = action.payload.ownerName;
      state.nic = action.payload.nic;
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.dob = action.payload.dob;
      state.address = action.payload.address;
      state.sex = action.payload.sex;
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
