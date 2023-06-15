import React, { useState, useEffect } from 'react';
import classes from './ItemUpdate.module.css';
import background from '../../../assets/Background vector group.png';
import { Link } from 'react-router-dom';
import PopupMessageForDelete from '../popupMessageForDelete';
import PopupMessageForUpdate from '../popupMessageForUpdate';
import NavbarAdmin from '../../../ui/navbar/NavbarAdmin';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ItemUpdate() {
  const [stockData, setStockData] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showpopupdate, setshowpopupupdate] = useState(false);
  const [updatePopupData, setUpdatePopupData] = useState({});
  const [id, setId] = useState(0);
  const [sid, setSid] = useState(0);

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

  const handleUpdate = (item) => {
    setUpdatePopupData(item);
    setshowpopupupdate(true);
  };

  const handledelete = (id) => {
    console.log('for delete', id);
    setId(id);
    setShowPopup(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <NavbarAdmin />

      <div
        style={{
          position: 'absolute',
          zIndex: 200,
          margin: 'auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>{showPopup && <PopupMessageForDelete onClose={() => setShowPopup(false)} data={id} />}</div>
      </div>

      <div
        style={{
          position: 'absolute',
          zIndex: 200,
          margin: 'auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>{showpopupdate && <PopupMessageForUpdate onClose={() => setshowpopupupdate(false)} data={updatePopupData} />}</div>
      </div>

      <div className={classes.updt_div}>
        <div className="container">
          <div className="mt-3">
            <div className="centered">
              <h2 className="eye-catching-text">-------------------------ITEMS FETCHED.-------------------------</h2>
            </div>
            <br />
            {stockData.length > 0 ? (
              <>
                <Table striped bordered hover>
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
                      <th>Operations</th>
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
                        <td>
                          <span style={{ paddingRight: '15px' }}>
                            <Button variant="outline-info" onClick={() => handleUpdate(item)}>
                              Update
                            </Button>
                          </span>
                          <span>
                            <Button variant="outline-danger" onClick={() => handledelete(item.stockID)}>
                              delete
                            </Button>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link to="/admin/add/item" className="btn btn-primary" style={{ position: 'absolute', top: '15px', right: '40px' }}>
                    ADD
                  </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/admin/items" className="btn btn-primary">DISPLAY</Link>
                                </div>
              </>
            ) : (
              <p>Loading stock data...</p>
            )}
            {/* <img src={background} alt="background vector" className={classes.back_img} />
            <center></center> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemUpdate;
