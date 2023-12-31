import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete, AiFillPrinter } from "react-icons/ai";
import { Pagination } from "antd";

const CashSlipdetails = () => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [slipid, setSlipid] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const handlePageChange = (page) => {
        setCurrentPage(page); // Update current page
    };

    useEffect(() => {
        getData();

    }, []);

    const handleClick = () => {
        navigate("/CashSlip");
    };
    const handleprint = (id) => {
        navigate(`/Print_Cashslip/${id}`);
        console.log(id)
    };

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:4545/Get_cashslip_by_id", {
                headers: {
                    authorization: `${token}`,
                },
            });
            setData(response?.data?.data)
            // setSlipid(response?.data?.data?.slip_no)
            console.log(response.data.data[0].slip_no);
            // console.log(decode.admin.client_id);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    function formatDate(inputDate) {
        const parts = inputDate.split('-');
        if (parts.length === 3) {

            const [year, month, day] = parts;


            const dateObject = new Date(year, month - 1, day);


            const formattedDay = String(dateObject.getDate()).padStart(2, '0');
            const formattedMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
            const formattedYear = dateObject.getFullYear();


            return `${formattedDay}/${formattedMonth}/${formattedYear}`;
        } else {

            return 'Invalid Date';
        }
    }

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
                                {data.slice(startIndex, endIndex).map((element, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{element.slip_no}</td>
                                        <td>{formatDate(element.date)}</td>
                                        <td>{element.Account_name}</td>
                                        <td>{element.Account_no}</td>
                                        <td>{element.bank_name}</td>
                                        <td>{element.Branch_name}</td>
                                        <td>{element.total}</td>
                                        <td>
                                            <button style={{ border: "none", backgroundColor: "white" }}
                                                onClick={()=>handleprint(element?.slip_no)}
                                            >
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
export default CashSlipdetails;
