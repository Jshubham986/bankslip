import { useState, useRef, useEffect } from "react";
// import "./App.css";
import { Col, Row } from "antd";
import { useReactToPrint, ReactToPrint } from "react-to-print";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import jwtDecode from "jwt-decode";
import axios from "axios";
// import NewSlip from "./NewSlip";

function App() {
  const componentPdf = useRef();
  const generatePdf = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "userdata",
    // onAfterPrint:()=>alert("pdf generated")
  });

  const styles = StyleSheet.create({
    page: {
      backgroundImage: 'url("cashSlip.jpg")',
      backgroundSize: "cover",
      margin: "10px",
      padding: "20px",
      width: "2480px",
      height: "3508px",
      flexDirection: "row",
      backgroundColor: "red",
    },
    content: {
      flex: 1,
      padding: 10,
      backgroundImage: 'url("cashSlip.jpg")',
      backgroundSize: "cover",
      margin: "10px",
      padding: "20px",
      width: "850px",
      height: "308px",
      flexDirection: "row",
      // backgroundColor: "red",
      backgroundSize: "cover",
    },
  });
  const token = localStorage.getItem("token")
  const decode = jwtDecode(token);
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();

  }, []);


  const getdata = async ()=>{
    try{
      const response = await axios.get("http://localhost:4545/Get_cashslip_by_slip_no",{
        headers: {
          Authorization: `${token}`,
        }
      });
    //   setData(response?.data?.data)
      console.log(response);
    }catch(error) {
      console.log("Error Fecht:",error)
    }
  }


 
  return (
    <>
      {/* <NewSlip/> */}
      <div ref={componentPdf}>
        <Document>
          <Page size="A4" style={styles.page}>
            <div style={styles.content}>
              <div className="root1">
                {/* <Row>
                  <Col span={18} push={6}> */}
                <div style={{ color: "red" }}>
                  <div className="date" style={{ display: "flex" }}>
                    <p
                      style={{
                        marginLeft: "180px",
                        marginTop: "30px",
                        letterSpacing: "9px",
                      }}
                    >
                      11111111
                    </p>
                    <p
                      style={{
                        marginLeft: "360px",
                        marginTop: "30px",
                        letterSpacing: "9px",
                      }}
                    >
                      11111111
                    </p>
                  </div>
                  <div className="accountNumber" style={{ display: "flex" }}>
                    <p
                      style={{
                        marginLeft: "36px",
                        marginTop: "-18px",
                        letterSpacing: "9.5px",
                      }}
                    >
                      22222222222222
                    </p>
                    <p
                      style={{
                        marginLeft: "65px",
                        marginTop: "-13px",
                        letterSpacing: "8px",
                      }}
                    >
                      2222222222
                    </p>
                    <p
                      style={{
                        marginLeft: "17px",
                        marginTop: "-13px",
                        letterSpacing: "9px",
                      }}
                    >
                      22222222222222
                    </p>
                  </div>
                  <div className="accountName" style={{ display: "flex" }}>
                    <p style={{ marginLeft: "80px", marginTop: "1px" }}>
                      Snehal Hansaraj Kherkar
                    </p>
                    <p style={{ marginLeft: "150px", marginTop: "5px" }}>
                      Snehal Hansaraj Kherkar
                    </p>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div>
                      <p style={{ marginLeft: "260px", marginTop: "45px" }}>
                        7255/-
                      </p>
                    </div>
                    <div style={{ marginLeft: "350px", marginTop: "-25px" }}>
                      <div style={{ display: "flex", marginLeft: "14px" }}>
                        <p>1</p>
                        <p style={{ marginLeft: "80px" }}>1000/-</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "15px",
                          marginTop: "-38px",
                        }}
                      >
                        <p>1</p>
                        <p style={{ marginLeft: "80px" }}>1000/-</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "15px",
                          marginTop: "-38px",
                        }}
                      >
                        <p>1</p>
                        <p style={{ marginLeft: "80px" }}>1000/-</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "15px",
                          marginTop: "-40px",
                        }}
                      >
                        <p>1</p>
                        <p style={{ marginLeft: "80px" }}>1000/-</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "15px",
                          marginTop: "-38px",
                        }}
                      >
                        <p>1</p>
                        <p style={{ marginLeft: "80px" }}>1000/-</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "15px",
                          marginTop: "-40px",
                        }}
                      >
                        <p>1</p>
                        <p style={{ marginLeft: "80px" }}>1000/-</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: "260px", marginTop: "-23px" }}>7255/-</p>
                    <p style={{ marginLeft: "430px", marginTop: "0px" }}>7255/-</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: "75px", marginTop: "-33px", fontSize: "10px" }}>Seven Thousand Two Hundred Fifty Five Only.</p>
                    <p style={{ marginLeft: "118px", marginTop: "-40px", fontSize: "10px" }}>Seven Thousand Two Hundred Fifty Five Only.</p>
                  </div>
                </div>
              </div>
            </div>
          </Page>
        </Document>
      </div>
      <button onClick={generatePdf}>print</button>
    </>
  );
}

export default App;
