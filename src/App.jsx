// import { useEffect, useState } from "react";
// import "./App.css";
import "./Style/Style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutRoutes from "./LayoutRoutes"
// import Slip from "./components/Slip/Slip";
function App() {

  return (
    <>
    <LayoutRoutes/>
    <ToastContainer/>
    {/* <Slip/> */}
    </>
  );
}

export default App;
