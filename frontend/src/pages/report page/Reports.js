import React, { useState, useEffect } from "react";
import classes from "./Reports.Module.css";
//import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
//import ItemCard from "./ItemCard";
// import { FaSearch } from "react-icons/fa";
// import background from '../../assets/Background vector group.png';
import Table from 'react-bootstrap/Table';
//import NavbarAdmin from "../../../ui/navbar/NavbarAdmin";

import axios from 'axios';
import { Navigate } from "react-router-dom";


function FeedbackReport() {
  const [stockData, setStockData] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      debugger;
      try {
        const response = await axios.get('http://localhost:8800/feedback');
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <NavbarAdmin /> */}

      <div className={classes.updt_div} style={{ padding: "60px" }}>

        {stockData.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>FID</th>
                <th>Comment</th>
                <th>SID</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item, index) => (
                <tr key={index}>

                  {/* <td><img src={"http://localhost:8800/static/" + item.image} height={60} width={60} /></td> */}
                  <td>{item.FID}</td>
                  <td>{item.comment}</td>
                  <td>{item.SID}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Loading Report data...</p>
        )}
      </div>
    </div>
  );
};




export default FeedbackReport;