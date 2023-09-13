import React, { useState } from "react";
import { BsCashCoin, BsCashStack } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Sidebar = () => {

  const navigate = useNavigate();

  const logout =()=>{
    navigate("/")
  }
  const [showMenu, setShowMenu] = useState();
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);
  console.log(token);
  console.log(decode);

  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div style={{ color: "white" }} className="info">
              <a href="#" className="d-block"></a>
              <p>{decode?.admin.name}</p>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/Maincontenct">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/CashSlipdetail" className="nav-link">
                  <BsCashCoin className="nav-icon" />
                  <p>Cash Slip</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AccountHolderList" className="nav-link">
                  <i className="nav-icon fas fa-arrow-right" />
                  <p>Cheque Payment</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ComingSoon" className="nav-link">
                  <i className="nav-icon fas fa-arrow-left" />
                  <p>Cheque Collection</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ComingSoon" className="nav-link">
                  <AiFillPrinter className="nav-icon" />
                  <p>Docket Printing</p>
                </Link>
              </li>
            </ul>
            <div className="user-panel mt-1 pb-1 mb-1 "></div>
            <div className="info">
              <a href="#" className="d-block">
                <p>Masters</p>
              </a>
            </div>
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/AccountList" className="nav-link">
                  <i className="nav-icon fas fa fa-user" />
                  <p>Account Holders</p>
                  <span className="right badge badge-danger">New</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ShowAccounts" className="nav-link">
                  <i className="nav-icon fas fa fa-user" />
                  <p>Bank Accounts</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ComingSoon" className="nav-link">
                  <i className="nav-icon fas fa fa-user" />
                  <p>Cheque Payment</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ComingSoon" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>Account Collection</p>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/BankMaster" className="nav-link">
                  
                  <BiSolidBank className="nav-icon" />
                  <p>Bank Master</p>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/ComingSoon" className="nav-link">
                  <BsCashStack className="nav-icon" />
                  <p>Note Master</p>
                </Link>
              </li> */}
              <div className="user-panel mt-1 pb-1 mb-1 "></div>
              {/* <li className="nav-header">Report</li> */}
              <div className="info">
                <a href="#" className="d-block">
                  <p>Report</p>
                </a>
              </div>

              <li className="nav-item">
                <Link to="/NewAccount" className="nav-link">
                  <i className="nav-icon fa fa-user" />
                  <p>Account Holder</p>
                </Link>
              </li>
              <div className="user-panel mt-1 pb-1 mb-1 "></div>
                <button onClick={logout} type="button" class="btn btn-danger">Logout</button>
              
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
