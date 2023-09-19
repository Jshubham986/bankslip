
import { Link, useNavigate } from "react-router-dom";
import {AiOutlinePoweroff} from "react-icons/ai"

const Navbar = () => {
const navigate = useNavigate()
  const handlelogout =()=>{
    navigate("/")
  }
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/Maincontenct" className="nav-link">Home</Link>
          </li>

        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          {/* <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                   <i class="bi bi-power"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li> */}
          
         
          <li className="nav-item">
            
             <AiOutlinePoweroff 
             style={{
              marginRight:"2rem",
              cursor:"pointer"
            }} 
            onClick={handlelogout}/>
          
          </li>
         
        </ul>
      </nav>
      {/* /.navbar */}
    </div>
  );
};

export default Navbar;
