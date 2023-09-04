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
import ShowBankAccounts from "./components/BankMaster/ShowBankAccounts";
import AddAccountBtn from "./components/BankMaster/AddAccountBtn";
import Comingsoon from "./components/ComingSoon/Comingsoon";
<<<<<<< HEAD
import Print_Cashslip from "./components/PrintCashslip/Print_Cashslip";
=======
import GeneratePdf from "./components/Cashslip/GeneratePdf";
import Admin from "./components/adminPannel/Admin"
>>>>>>> 710823e1fbb76545acdd5ee3d039d2158c7434c8

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
            <Route exact path="/Print_Cashslip" element={<Print_Cashslip/>}/>
            <Route exact path="/AccountHolderList" element={<AccountHolderList/>} />
            <Route exact path="/BankMaster" element={<BankMaster/>}/>
            <Route exact path="/ShowAccounts" element={<ShowBankAccounts/>}/>
            <Route exact path="BankAccountDetails" element={<BankAccountDetails/>}/>
            <Route exact path="/CashSlipButton" element={<AddAccountBtn/>} />
            <Route exact path="/ComingSoon" element={<Comingsoon/>} />
            <Route exact path="/generatePdf" element={<GeneratePdf/>}/>
            <Route exact path="/admin" element={<Admin/>} />


          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
