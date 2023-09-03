import { useState,useRef, useEffect } from "react";
import './Print_Cashslip.css'
import { Col, Row } from "antd";
import  { useReactToPrint,ReactToPrint } from "react-to-print";
import { Document, Page,StyleSheet } from "@react-pdf/renderer";
import jwtDecode from "jwt-decode";
import axios from "axios";
// import NewSlip from "./NewSlip";

function Print_Cashslip() {
const token = localStorage.getItem("token")
const decode = jwtDecode(token);

const [data, setData] = useState([]);
useEffect(() => {
    getdata();
   
},[]);

const getdata = async ()=>{
  try{
    const response = await axios.get("http://localhost:4545/Get_cashslip_by_id",{
      headers: {
        Authorization: `${token}`,
      }
    });
    setData(response?.data?.data)
    console.log(response);
  }catch(error) {
    console.log("Error Fecht:",error)
  }
}


  const componentPdf = useRef();
  const generatePdf = useReactToPrint({
    content:()=> componentPdf.current,
    documentTitle:"userdata",
    // onAfterPrint:()=>alert("pdf generated")
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    content: {
      flex: 1,
      padding: 10,
      backgroundImage: 'url("cashSlip.jpg")',
      backgroundSize: 'cover',
      
    },
  });
  return (
    <>
    {/* <NewSlip/> */}
    {data.map((element)=>(

    <div ref={componentPdf}>
      <Document>
        <Page size="A4" style={styles.page}>
          <div style={styles.content}>
      <div className="root">
        <Row>
           
           
          <Col span={18} push={6}>
            <div style={{ color: "red" }}>
              <div className="header">
                <h3 style={{ marginLeft: "-35px", marginTop:"52px",letterSpacing:"12px" }}>{element.date}</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "-200px",marginTop:"-12px",letterSpacing:"11.5px" }}>{element.Account_no}</h3>
              </div>
              <div style={{ marginLeft: "-150px", marginTop: "15px" }}>
                <h3>{element.Account_name}</h3>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "-200px", marginTop: "50px" }}>
                  <p>Date:12/12/23</p>
                </div>
                <div style={{ marginLeft: "90px", marginTop: "50px" }}>
                  <p >
                    Cheque No. <br /> 1234566
                  </p>
                </div>
                <div style={{ marginLeft: "40px", marginTop: "50px" }}>
                  <p> {element.total}/-</p>
                </div>
              </div>
              <div style={{ marginLeft: "70px", marginTop: "2px" }}>
                <p> {element.total}/-</p>
              </div>
              <div style={{ marginLeft: "-160px", marginTop: "-10px" }}>
                <p>Seven Thousand Two Hundred Fifty Five Only.</p>
              </div>
            </div>
          </Col>
          
       
           
          <Col span={6} pull={18}>
            <div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "800px", marginTop:"50px",letterSpacing:"12px" }}>67676747</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "420px", marginTop:"-6px",letterSpacing:"10px" }}>2222222222</h3>
              </div>
              {/* <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "420px", marginTop:"-5px",letterSpacing:"10px" }}>{element.bank_code}</h3>
              </div> */}
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "640px", marginTop:"-70px",letterSpacing:"11px" }}>{element.Account_no}</h3>
              </div>
              <div className="acname"> 
                <h5 style={{ marginLeft: "510px", marginTop: "-17px" }}>
                  {element.Account_name}
                </h5>
              </div>
              <div className="abc" style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ marginLeft: "480px" }}>
                  <p>Chandrapur</p>
                </div>
                <div style={{ marginLeft: "80px" }}>
                  <p>Chandrapur</p>
                </div>
                <div style={{ marginLeft: "45px" }}>
                  <p>123456</p>
                </div>
              </div>
              <div   style={{ marginLeft: "800px", marginTop: "-70px" }}>
                <div className="qty" style={{ display: "flex", marginLeft: "14px" }}>
                  <h4 style={{ marginLeft: "80px" }}>{element.qty2000}</h4>
                  <h4 style={{ marginLeft: "0px" }}>{element.thou}/-</h4>
                </div>
                <div  style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4 style={{ marginLeft: "80px" }}>{element.qty500}</h4>
                  <h4 style={{ marginLeft: "80px" }}>{element.fivhun}/-</h4>
                </div>
                {/* <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4 style={{ marginLeft: "80px" }}>{element.qty200}</h4>
                  <h4 style={{ marginLeft: "0px" }}>{element.twohun}/-</h4>
                </div> */}
                {/* <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4 style={{ marginLeft: "80px" }}>{element.qty100}</h4>
                  <h4 style={{ marginLeft: "0px" }}>{element.hun}/-</h4>
                </div> */}
                {/* <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-30px" }}>
                  <h4 style={{ marginLeft: "80px" }}>{element.qty50}</h4>
                  <h4 style={{ marginLeft: "0px" }}>{element.fif}/-</h4>
                </div>
                <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4 style={{ marginLeft: "80px" }}>{element.qty20}</h4>
                  <h4 style={{ marginLeft: "0px" }}>{element.twenty}/-</h4>
                </div>
                <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4 style={{ marginLeft: "80px" }}>{element.qty10}</h4>
                  <h4 style={{ marginLeft: "0px" }}>{element.ten}/-</h4>
                </div> */}
               
              </div>
              <div className="toword" style={{display:"flex",marginLeft:"460px",marginTop:"-30px"}}>
                <h5>Twenty_Eight_Thousand_Eight_Hundred_Seventy_Seven_Only.</h5>
                <h4 style={{marginLeft:"180px"}}>{element.total}/-</h4>
              </div>
            </div>
            </Col>
            
        
        </Row>
      </div>
      <button onClick={generatePdf} >print</button>
      </div>
      </Page>
      </Document>
      </div>
    ))}
    </>
  );
}

export default Print_Cashslip;
