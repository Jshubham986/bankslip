import { useState, useRef, useEffect } from "react";
import "./print_Cashslip.css";
// import { Col, Row } from "antd";
import { useReactToPrint, ReactToPrint } from "react-to-print";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useParams } from "react-router-dom";
// import NewSlip from "./NewSlip";





function formatDate(inputDate) {
  const parts = inputDate.split('-');
  if (parts.length === 3) {

    const [year, month, day] = parts;


    const dateObject = new Date(year, month - 1, day);


    const formattedDay = String(dateObject.getDate()).padStart(2, '0');
    const formattedMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
    const formattedYear = dateObject.getFullYear();


    return `${formattedDay}${formattedMonth}${formattedYear}`;
  } else {

    return 'Invalid Date';
  }
}

function App() {
  const {id} = useParams();
  console.log(id)
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


  const getdata = async () => {
    try {
      const response = await axios.post("http://localhost:4545/Get_cashslip_by_slip_no",{slip_no:id}, {
        headers: {
          Authorization: `${token}`,
        }
      });
      setData(response?.data?.data)
      console.log(response);
    } catch (error) {
      console.log("Error Fecht:", error)
    }
  }



  return (
    <>

      {data.map((element) => (

        <div ref={componentPdf}>
          <Document>
            <Page size="A4" style={styles.page}>
              <div style={styles.content}>

                {/* Left Side Of Cash Slip */}
                <div className="root">
                  <div className="leftdate" >
                    <p>
                      {formatDate(element.date)}
                    </p>
                  </div>
                  <div className="leftaccountno">
                    <p>
                      {element.Account_no}
                    </p>
                  </div>
                  <div className="leftname">
                    <p>
                      {element.Account_name}
                    </p>
                  </div>
                  <div className="lefttotal">
                    <p>
                      {element.total}/-
                    </p>
                  </div>
                  <div className="lftolword">
                    <p>
                      {element.total}.
                    </p>
                  </div>
                </div>

                {/* Right Side of cashslip */}

                <div className="root">
                  <div className="rightdate">
                    <p>
                      {formatDate(element.date)}
                    </p>
                  </div>
                  <div className="rightaccountno">
                    <p>
                      {element.Account_no}
                    </p>
                  </div>
                  <div className="rightname">
                    <p>
                      {element.Account_name}
                    </p>
                  </div>

                  {/* // Total of 2000 */}
                  <div>
                    <p className="qty2000">
                      {element.qty2000}
                    </p>
                    <p className="tot2000">
                      {element.thou}/-
                    </p>

                  </div>
                  {/* Total Of 500 */}
                  <div>
                    <p className="qty200">
                      {element.qty500}
                    </p>
                    <p className="tot200">
                      {element.fivhun}/-
                    </p>

                  </div>
                  {/* Total of 200 */}
                  <div>
                    <p className="qty200">
                      {element.qty200}
                    </p>
                    <p className="tot200">
                      {element.twohun}/-
                    </p>

                  </div>
                  {/* Total of 100 */}
                  <div>
                    <p className="qty200">
                      {element.qty100}
                    </p>
                    <p className="tot200">
                      {element.hun}/-
                    </p>
                  </div>
                  {/* Total OF 50 */}
                  <div>
                    <p className="qty200">
                      {element.qty50}
                    </p>
                    <p className="tot200">
                      {element.fif}/-
                    </p>
                  </div>
                  {/* Total of 20 */}
                  <div>
                    <p className="qty200">
                      {element.qty20}
                    </p>
                    <p className="tot200">
                      {element.twenty}/-
                    </p>
                  </div>
                  {/* Total of 10 */}
                  <div>
                    <p className="qty200">
                      {element.qty10}
                    </p>
                    <p className="tot200">
                      {element.ten}/-
                    </p>
                  </div>
                </div>

                {/* Right Side Total Amount */}
                <div>
                  <div className="righttotal">
                    <p>
                      {element.total}/-
                    </p>
                  </div>
                  <div className="rtolwrd">
                    <p>
                      {element.total}.
                    </p>
                  </div>
                </div>
              </div>
            </Page>
          </Document>
        </div >
      ))
      }
      <button onClick={generatePdf}>print</button>
    </>
  );
}

export default App;