import { useState, useEffect } from "react";
// import CashSlipButton from "./CashSlipButton";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete, AiFillPrinter } from "react-icons/ai"
import { Pagination } from "antd";
import jwtDecode from "jwt-decode";


const ShowBankAccounts = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    useEffect(() => {
        getdata();
    }, [])
    const handleClick = () => {
        navigate("/BankAccountDetails");
    }
    const handlePageChange = (page) => {
        setCurrentPage(page); // Update current page
    };

    const getdata = async () => {
        try {
            const response = await axios.get("https://octoedge.in/Get_AccountDetails", {
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
            <div className="content-wrapper ">
                <div className="container">
                    <div className="table table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="row">#</th>
                                   
                                    {/* <th scope="col">Date</th> */}
                                    <th scope="col">Account Name</th>
                                    <th scope="col">Bank Name</th>
                                    <th scope="col">Account No</th>
                                    <th scope="col">Branch Name</th>
                                    <th scope="col">IFSC</th>
                                    <th scope="col">Account Type</th>
                                    {/* <th scope="col">Balance</th>
                                    <th scope="col">Print</th> */}


                                    <th scope="col">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.slice(startIndex, endIndex).map((element, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                     
                                        {/* <td>{element.date}</td> */}
                                        <td>{element.Account_name}</td>
                                        <td>{element.bank_name}</td>
                                        <td>{element.account_no}</td>
                                        <td>{element.Branch_name}</td>
                                        <td>{element.ifsc}</td>
                                        <td>{element.account_type}</td>

                                        {/* <td><button style={{ border: "none", backgroundColor: "white" }}><AiFillPrinter style={{ fontSize: "20px", }} /></button>  </td> */}

                                        <td><button style={{ border: "none", backgroundColor: "white" }}><AiFillDelete style={{ fontSize: "20px", color: "red" }} /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination
                            current={currentPage}
                            onChange={(handlePageChange)} // Update current page
                            total={data.length}
                            pageSize={itemsPerPage}
                        />
                    </div>
                </div>
                <button style={{
                    height: "7vh",
                    position: "fixed",
                    right: "3%",
                    bottom: "8%",
                    borderRadius: "50%",
                    backgroundColor: "#4477CE",

                    border: "none"




                }} onClick={handleClick}><BsPlusLg style={{ fontSize: "42px", color: "white", }} /></button>
                {/* <button onClick={() => navigate("/CashSlipdetails")}>Back to Cash Slip Details</button> */}

            </div>
            {/* <CashSlipButton /> */}
        </>
    );
};
export default ShowBankAccounts;