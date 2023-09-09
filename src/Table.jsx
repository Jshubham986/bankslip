import React, { useEffect, useState } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Table() {

    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();

    }, []);

    const getData = async () => {
        try {
            const response = await axios.get("https://octoedge.in/Get_cashslip_by_id", {
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


        <div class="table-responsive">
            <table class="table table-dark">
                <thead>
                    <tr class=" table-dark">
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
                            <td>{element.bank_name}</td>
                            <td>{element.Branch_name}</td>
                            <td>{element.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >

    )
}
