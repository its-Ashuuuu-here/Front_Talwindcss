import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./component/Header/Header";
import GlobalStyles from "./component/Global";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import Products from "./Pages/Products";
import LoginForm from "./component/SignInData/LoginForm";
import CreateAccount from "./component/SignInData/CreateAccount";
import ForgetForm from "./component/SignInData/ForgetForm";
import Error404 from "./component/SignInData/Error404";
import Verfication from "./component/SignInData/Verfication";
import ProductAdd from "./component/Product/ProductAdd";
import ProductDetail from "./component/Product/ProductDetail";
import CartDetail from "./component/Cart/CartDetail";
import CheckOut from "./component/Cart/CheckOut";
import Categories from "./Pages/Categories";
import OrderList from "./component/Order/OrderList";
import Order from "./component/Order/Order"
import OrderInvoice from "./component/Order/OrderInvoice";
import Customer from "./component/Customer/Customer";
import CustomerDetails from "./component/Customer/CustomerDetails";
import Departments from "./component/Inventory/Departments";
import Suppliers from "./component/Inventory/Suppliers";
import InventoryList from "./component/Inventory/InventoryList";
import PurchaseItem from "./component/Inventory/PurchaseItem";
import ReturnItem from "./component/Inventory/ReturnItem"

function App() {
  const theme = {
    colors: {
      header: "#262626",
      body: " #f5f5f5 ",
      footer: "#003333",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },  
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="/Productadd" element={<ProductAdd/>}/>
            <Route path="/Productdetail" element={<ProductDetail/>}/>
            <Route path="/cartdetail" element={<CartDetail/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/Categories" element={<Categories />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/order" element={<Order/>}/>
            <Route path="/orderinvoice" element={<OrderInvoice/>}/>
            <Route path="/customer" element={<Customer/>}/>
            <Route path="/customerdetails" element={<CustomerDetails/>}/>
            <Route path="/departments" element={<Departments/>}/>
            <Route path="/suppliers" element={<Suppliers/>}/>
            <Route path="/inventorylist" element={<InventoryList/>}/>
            <Route path="/purchaseitem" element={<PurchaseItem/>}/>
            <Route path="/returnitem" element={<ReturnItem/>}/>

          </Route>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="*" element={<Error404/>} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forget-password" element={<ForgetForm/>} />
          <Route path ="/Verfication" element={<Verfication/>}/>
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
