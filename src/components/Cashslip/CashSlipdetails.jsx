import  { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete, AiFillPrinter } from "react-icons/ai";

const CashSlipdetails = () => {
    const token = localStorage.getItem("token");
  const decode = jwtDecode(token);

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
       
    },[]);

    const handleClick = () => {
        navigate("/CashSlip");
    };

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:4545/Get_cashslip_by_id", {
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

    return (
        <>
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="container">
                    <div className="table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="row">#</th>
                                    <th scope="col">Slip No</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Account Name</th>
                                    <th scope="col">Account No</th>
                                    <th scope="col">Bank Name</th>
                                    <th scope="col">Branch Name</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Print</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((element, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{element.slip_no}</td>
                                        <td>{element.date}</td>
                                        <td>{element.Account_name}</td>
                                        <td>{element.Account_no}</td>
                                        <td>{element.setBranch_name}</td>
                                        <td>{element.bank_code}</td>
                                        <td>{element.total}</td>
                                        <td>
                                            <button style={{ border: "none", backgroundColor: "white" }}>
                                                <AiFillPrinter style={{ fontSize: "20px" }} />
                                            </button>
                                        </td>
                                        <td>
                                            <button style={{ border: "none", backgroundColor: "white" }}>
                                                <AiFillDelete style={{ fontSize: "20px", color: "red" }} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <button
                    style={{
                        height: "7vh",
                        position: "fixed",
                        right: "3%",
                        bottom: "8%",
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
export default CashSlipdetails;
