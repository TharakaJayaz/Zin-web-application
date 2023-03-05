import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin page/AdminPage";
import Homepage from "./pages/homepage/Homepage";
import ItemList from "./pages/item list page/ItemList";
import Item from "./pages/Items page/Item";
import Reports from "./pages/report page/Reports";
import RegisterRep from "./pages/Rep_register_page/RegisterRep";
import Shops from "./pages/shops page/Shops";
import SignInPage from "./pages/SigninPage/SignInPage";
import StockKeeper from "./pages/stock keeper page/StockKeeper";
import Stock from "./pages/stock page/Stock";
import TempRep from "./pages/tempRep/TempRep";
function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} exact />

        <Route path="/registerRep" element={<RegisterRep />} />

        <Route path="/signIn" element={<SignInPage />} />

        {/* <Route path = '/admin' element = {<AdminPage />}/> */}

        <Route path = '/stock_keeper/item_list' element = {<ItemList />}   />

        <Route path = '/stock_keeper/stock' element = {<Stock/>}   />

        <Route path="/admin/temp_reps" element={<TempRep />} />

        <Route path="/admin/items" element={<Item />} />

        <Route path="/admin/reports" element={<Reports/>} />

        <Route path="/admin/shops" element={<Shops />} />
      </Routes>
    </div>
  );
}

export default App;
