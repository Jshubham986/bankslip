import React, { useState, useEffect } from "react";
import { Table, Spin, Empty, Button, Popconfirm, message } from "antd";
import CashSlipButton from "./CashSlipButton";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

const CashSlipdetails = () => {

    const [slip_no, setSlip_no] = useState();
    const [Account_name, setAccount_name] = useState("");
    const [bank_code, setBank_code] = useState();
    const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"))
    const [Account_no, setAccount_no] = useState();
    const [Branch_name, setBranch_name] = useState("");
    const [total, setTotal] = useState(0);

    const handleSum = async () => {
        const data = {
            slip_no, Account_name, bank_code, Account_no, Branch_name, date, total
        }
        console.log(data)
        const response = await axios.get("http://localhost:4545/Get_cashslip", data);
        console.log(response)

    }




    return (
        <>
            <Navbar />
            <Sidebar/>
            <div className="content-wrapper">
                <div className="container">
                    <div className="table">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Slip No</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Account Name</th>
                                    <th scope="col">Account No</th>
                                    <th scope="col">Bank Name</th>
                                    <th scope="col">Branch Name</th>
                                    <th scope="col">Total</th>


                                </tr>
                            </thead>
                            <tbody>


                            </tbody>
                        </table>
                        {/* <button type="button" class="btn btn-primary" style={{float:"right"}} onClick={handleSum}>Save Data</button> */}
                    </div>

                </div>
            </div>
            <CashSlipButton />
        </>
    );
};

export default CashSlipdetails;
