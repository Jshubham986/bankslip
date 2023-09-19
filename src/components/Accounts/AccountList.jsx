import  { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete, AiFillPrinter } from "react-icons/ai";
import { Pagination } from "antd";

const AccountList = () => {
    const token = localStorage.getItem("token");
  const decode = jwtDecode(token);

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const handlePageChange = (page) => {
        setCurrentPage(page); // Update current page
    };

    useEffect(() => {
        getData();
       
    },[]);

    const handleClick = () => {
        navigate("/NewAccount");
    };
    const handleprint = () => {
        navigate("/Print_Cashslip");
    };

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:4545/Get_AccountMaster_by_id", {
                headers: {
                    authorization: `${token}`,
                },
            });
        setData(response?.data?.data)
            console.log(response);
            // console.log(decode.admin.client_id);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    return (
        <>
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="container">
                    <div className="table table-responsive">
                        <table className="table ">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="row">#</th>
                                    
                                   
                                    <th scope="col">Account Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Country</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {data.slice(startIndex, endIndex).map((element, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                     
                                        <td>{element.Account_name}</td>
                                        <td>{element.Address}</td>
                                        <td>{element.city}</td>
                                        <td>{element.state}</td>
                                        <td>{element.country}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination
                            current={currentPage}
                            onChange={(handlePageChange)} // Update current page
                            total={data.length}
                            pageSize={itemsPerPage}
                        />
                </div>
                <button
                    style={{
                        height: "7vh",
                        position: "fixed",
                        right: "3%",
                        bottom: "3%",
                        borderRadius: "50%",
                        backgroundColor: "#4477CE",
                        border: "none",
                    }}
                    onClick={handleClick}
                >
                    <BsPlusLg style={{ fontSize: "42px", color: "white" }} />
                </button>
            </div>
        </>
    );
}
export default AccountList;
