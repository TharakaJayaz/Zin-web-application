import React, { useState, useEffect } from "react";
import classes from "./Item.module.css";
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
import ItemCard from "./ItemCard";
import { FaSearch } from "react-icons/fa";
import background from '../../assets/Background vector group.png';


import axios from 'axios';


function Item() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/stock');
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>


      <div className={classes.updt_div}>

        {stockData.length > 0 ? (
          <table>
            <thead>
              <tr>
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
          </table>
        ) : (
          <p>Loading stock data...</p>
        )}

        <img src={background} alt='background vector' className={classes.back_img} />
      </div>
    </div>
  );
};




export default Item;
