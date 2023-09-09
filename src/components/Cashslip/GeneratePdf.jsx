import { useState,useRef } from "react";


import { Col, Row } from "antd";
import  { useReactToPrint,ReactToPrint } from "react-to-print";
import { Document, Page,StyleSheet } from "@react-pdf/renderer";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "./generatepdf.css"

function GeneratePdf() {
const token = localStorage.getItem("token")   
const decode = jwtDecode(token);
const [data, setData] = useState([])

const getdata = async ()=>{
  try{
    const response = await axios.get("https://octoedge.in/Get_cashslip_by_id",{
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
    onAfterPrint:()=>alert("pdf generated")
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
    <div ref={componentPdf}>
        {data?(
      <Document>
        <Page size="" style={styles.page}>
          <div style={styles.content}>
      <div className="generatepdf">
        <Row>
          <Col span={18} push={6}>
            <div style={{ color: "red" }}>
              <div className="header">
                <h3 style={{ marginLeft: "-35px", marginTop:"60px" }}>{data.date}</h3>
                <h3 style={{ marginLeft: "14px", marginTop: "60px" }}>1</h3>
                <h3 style={{ marginLeft: "14px", marginTop: "60px" }}>1</h3>
                <h3 style={{ marginLeft: "14px", marginTop: "60px" }}>1</h3>
                <h3 style={{ marginLeft: "20px", marginTop: "60px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>1</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "-230px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "20px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "-5px" }}>1</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-5px" }}>1</h3>
              </div>
              <div style={{ marginLeft: "-170px", marginTop: "27px" }}>
                <h3>{data.Account_name}</h3>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "-230px", marginTop: "59px" }}>
                  <p>Date:{data.date}</p>
                </div>
                <div style={{ marginLeft: "130px", marginTop: "59px" }}>
                  <p>
                    Cheque No. <br /> 1234566
                  </p>
                </div>
                <div style={{ marginLeft: "40px", marginTop: "59px" }}>
                  <p> 7255/-</p>
                </div>
              </div>
              <div style={{ marginLeft: "70px", marginTop: "23px" }}>
                <p>{data.total}/-</p>
              </div>
              <div style={{ marginLeft: "-170px", marginTop: "10px" }}>
                <p>Seven Thousand Two Hundred Fifty Five Only.</p>
              </div>
            </div>
          </Col>
          <Col span={6} pull={18}>
            <div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "935px", marginTop:"60px" }}>1</h3>
                <h3 style={{ marginLeft: "14px", marginTop: "60px" }}>2</h3>
                <h3 style={{ marginLeft: "20px", marginTop: "60px" }}>3</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>4</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>5</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>5</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>6</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "60px" }}>7</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "490px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "3px" }}>2</h3>
                <h3 style={{ marginLeft: "13px", marginTop: "3px" }}>2</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "490px", marginTop:"0px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "10px", marginTop: "0px" }}>2</h3>
                <h3 style={{ marginLeft: "10px", marginTop: "0px" }}>2</h3>
              </div>
              <div style={{ display: "flex" }}>
                <h3 style={{ marginLeft: "745px", marginTop:"-80px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "20px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "20px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "15px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "-80px" }}>2</h3>
                <h3 style={{ marginLeft: "12px", marginTop: "-80px" }}>2</h3>
              </div>
              <div>
                <h3 style={{ marginLeft: "560px", marginTop: "-17px" }}>
                 {data.Account_name}
                </h3>
              </div>
              <div className="abc" style={{ display: "flex" }}>
                <div style={{ marginLeft: "550px" }}>
                  <p>Chandrapur</p>
                </div>
                <div style={{ marginLeft: "50px" }}>
                  <p>Chandrapur</p>
                </div>
                <div style={{ marginLeft: "45px" }}>
                  <p>123456</p>
                </div>
              </div>
              <div style={{ marginLeft: "925px", marginTop: "-60px" }}>
                <div style={{ display: "flex", marginLeft: "15px" }}>
                  <h4>1</h4>
                  <h4 style={{ marginLeft: "80px" }}>1000/-</h4>
                </div>
                <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4>1</h4>
                  <h4 style={{ marginLeft: "80px" }}>1000/-</h4>
                </div>
                <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-30px" }}>
                  <h4>1</h4>
                  <h4 style={{ marginLeft: "80px" }}>1000/-</h4>
                </div>
                <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-30px" }}>
                  <h4>1</h4>
                  <h4 style={{ marginLeft: "80px" }}>1000/-</h4>
                </div>
                <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4>1</h4>
                  <h4 style={{ marginLeft: "80px" }}>1000/-</h4>
                </div>
                <div style={{ display: "flex", marginLeft: "15px" ,marginTop:"-35px" }}>
                  <h4>1</h4>
                  <h4 style={{ marginLeft: "80px" }}>1000/-</h4>
                </div>
               
              </div>
              <div style={{display:"flex",marginLeft:"550px",marginTop:"-10px"}}>
                <h5>Twenty_Eight_Thousand_Eight_Hundred_Seventy_Seven_Only.</h5>
                <h4 style={{marginLeft:"180px"}}>28877/-</h4>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <button onClick={generatePdf}>print</button>
      </div>
      </Page>
      </Document>
        ):(
            <p>Loading data:</p>
        )}
      </div>
    </>
  );
}

export default GeneratePdf;