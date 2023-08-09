import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Maincontent from "./components/Content/Maincontent";
import CashSlip from "./components/Cashslip/CashSlip";
import NewCashSlip from "./components/Cashslip/NewCashSlip";
import NewAccount from "./components/Accounts/NewAccount";
import Login from "./components/Loginpage/Login";
import Signup from "./components/Loginpage/Signup";
import CashSlipButton from "./components/Cashslip/CashSlipButton";
import AccountHolderList from "./components/Accounts/Accountholderlist";
import BankMaster from "./components/BankMaster/BankMaster";
import BankAccountDetails from "./components/BankMaster/BankAccountDetails";
import CashSlipdetails from "./components/Cashslip/CashSlipdetails";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/Maincontenct" element={<Maincontent />} />
            <Route exact path="/CashSlip" element={<CashSlip />} />
            <Route exact path="/NewCashslip" element={<NewCashSlip />} />
            <Route exact path="/NewAccount" element={<NewAccount />} />
            <Route exact path="/CashSlipdetail" element={<CashSlipdetails/>} />

            <Route exact path="/CashSlipButton" element={<CashSlipButton/>} />
            <Route exact path="/AccountHolderList" element={<AccountHolderList/>} />
            <Route exact path="/BankMaster" element={<BankMaster/>}/>
            <Route exact path="BankAccountDetails" element={<BankAccountDetails/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
