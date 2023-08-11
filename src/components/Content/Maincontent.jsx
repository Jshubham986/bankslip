// import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import {
  BsCashCoin,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsFillPrinterFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Maincontent = () => {
  const navigate = useNavigate();
  return (
    <div>
   <Navbar/>
   <Sidebar/>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-1">Transaction</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div onClick={()=>{navigate("/CashSlipdetail")}}  className="small-box bg-info">
                  <div className="inner">
                    <h5>Cash Slip</h5>
                    <h6>Documents</h6>
                  </div>
                  <div className="icon">
                    <BsCashCoin style={{ textAlign: "center" }} />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h5>Payments</h5>
                    <h6>Deposit</h6>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-stats-bars" /> */}
                    <BsArrowLeftCircleFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h5>Collections</h5>
                    <h6>User Registrations</h6>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-person-add" /> */}
                    <BsArrowRightCircleFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    Coming Soon <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h5>Docket Printing</h5>
                    <h6>Unique Visitors</h6>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-pie-graph" /> */}
                    <BsFillPrinterFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    Coming soon <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <section className="col-lg-7 connectedSortable"></section>
            </div> */}
          </div>
        </section>
        <hr />
        <div className="container-fluid">
          <div className="content-header">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0.10">Masters</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-4">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h5>Account</h5>
                    <h5>Holder</h5>
                  </div>
                  <div className="icon">
                    <BsFillPersonFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-4">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h5>Cash Slip</h5>
                    <h5>Account</h5>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-stats-bars" /> */}
                    <BsCashCoin />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-4">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h5>Payment</h5>
                    <h5>Account</h5>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-person-add" /> */}
                    <BsArrowRightCircleFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h5>Collection</h5>
                    <h5>Accounts</h5>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-pie-graph" /> */}
                    <BsFillPrinterFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h5>Bank</h5>
                    <h5>Master</h5>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-pie-graph" /> */}
                    <BsFillPrinterFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h5>Note</h5>
                    <h5>Master</h5>
                  </div>
                  <div className="icon">
                    {/* <i className="ion ion-pie-graph" /> */}
                    <BsFillPrinterFill />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Maincontent;
