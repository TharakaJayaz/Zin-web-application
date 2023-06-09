import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin page/AdminPage";
import Homepage from "./pages/homepage/Homepage";
import ItemList from "./pages/item list page/ItemList";
import Item from "./pages/Items page/Item";
import ItemUpdate from "./pages/Items page/Item update page/ItemUpdate";
import Reports from "./pages/report page/Reports";
import RegisterRep from "./pages/Rep_register_page/RegisterRep";
import Shops from "./pages/shops page/Shops";
import SignInPage from "./pages/SigninPage/SignInPage";
import StockKeeper from "./pages/stock keeper page/StockKeeper";
import Stock from "./pages/stock page/Stock";
import TempRep from "./pages/tempRep/TempRep";
import UpdateRep from "./pages/updateRep/UpdateRep";
import StockUpdate from "./pages/stock page/stock update/StockUpdate";
import ItemSearch from "./pages/item list page/Item search/ItemSearch";
import ItemNew from "./pages/item list page/item new/ItemNew";
import ItemListUpdate from "./pages/item list page/ItemListUpdate/ItemListUpdate";
function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} exact />

        <Route path="/registerRep" element={<RegisterRep />} />

        <Route path="/signIn" element={<SignInPage />} />

        {/* <Route path = '/admin' element = {<AdminPage />}/> */}

        {/* stoxk keeper routing */}

        <Route path="/stock_keeper/item_list" element={<ItemList />} />

        <Route path="/stock_keeper/stock" element={<Stock />} />

        <Route
          path="/stock_keeper/stock/stock_update"
          element={<StockUpdate />}
        />

        <Route path="/stock_keeper/item_list/search" element={<ItemSearch />} />

        <Route path="/stock_keeper/item_list/update" element={<ItemListUpdate />} />

        <Route path="/stock_keeper/item_list/new" element={<ItemNew />} />

        <Route path="/admin/temp_reps" element={<TempRep />} />

        <Route path="/admin/repUpdate" element={<UpdateRep />} />

        <Route path="/admin/items" element={<Item />} />

        <Route path="/admin/reports" element={<Reports />} />

        <Route path="/admin/shops" element={<Shops />} />

        {/* temparary route */}
        <Route path="/admin/items/update" element={<ItemUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
