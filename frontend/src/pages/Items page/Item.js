import React, { useState, useEffect } from "react";
import classes from "./Item.module.css";
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
import ItemCard from "./ItemCard";
import { FaSearch } from "react-icons/fa";
import background from "../../assets/Background vector group.png";
import Table from "react-bootstrap/Table";

import axios from "axios";

function Item() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      debugger;
      try {
        const response = await axios.get("http://localhost:8800/stock");
        setStockData(response.data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavbarAdmin />

      <div className={classes.updt_div} style={{ padding: "60px" }}>
        {stockData.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Stock ID</th>
                <th>Qty</th>
                <th>Product Name</th>
                <th>Name</th>
                <th>Price</th>
                <th>Manufacture Date</th>
                <th>Expiry Date</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={"http://localhost:8800/static/" + item.image}
                      height={60}
                      width={60}
                    />
                  </td>
                  <td>{item.stockID}</td>
                  <td>{item.qty}</td>
                  <td>{item.productname}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.manufacturedate}</td>
                  <td>{item.expirydate}</td>
                  <td>{item.discount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Loading stock data...</p>
        )}
      </div>
    </div>
  );
}

export default Item;
