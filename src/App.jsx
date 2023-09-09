// import { useEffect, useState } from "react";
// import "./App.css";
import "./Style/Style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutRoutes from "./LayoutRoutes"
import Print_Cashslip from "./components/PrintCashslip/Print_Cashslip";
import Table from "./Table";
// import Slip from "./components/Slip/Slip";
function App() {

  return (
    <>
    <LayoutRoutes/>
    <ToastContainer/>
    {/* <Slip/> */}
    {/* <Print_Cashslip/> */}
    {/* <Table/> */}
    </>
  );
}

export default App;
