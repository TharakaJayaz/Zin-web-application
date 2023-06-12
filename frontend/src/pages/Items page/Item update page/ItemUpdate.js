import React from 'react';
import classes from './ItemUpdate.module.css';
import background from '../../../assets/Background vector group.png';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PopupMessageForDelete from '../popupMessageForDelete'; // Import the component responsible for displaying the popup message
import PopupMessageForUpdate from '../popupMessageForUpdate';
import axios from 'axios';

// const ItemUpdate = () => {
//   return (
//     <div className={classes.updt_div}>
//        <div>hello</div>
//        <img src = {background} alt = 'background vector'   className={classes.back_img}/>
//     </div>
//   )

// }


function ItemUpdate() {
    const [stockData, setStockData] = useState([]);

    const [showTable, setShowTable] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [showpopupdate, setshowpopupupdate] = useState(false);
    const [updatePopupData, setUpdatePopupData] = useState({});
    const [id, setId] = useState(0);
    const [sid, setSid] = useState(0);

    // const stockIDInputRef = useRef();
    // const qtyInputRef = useRef();
    // const productnameInputRef = useRef();
    // const nameInputRef = useRef();
    // const priceInputRef = useRef();
    // const manufacturedateInputRef = useRef();
    // const expirydateInputRef = useRef();
    // const discountInputRef = useRef();
    // const imageInputRef = useRef();

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
        debugger;
        setUpdatePopupData(item);
        setshowpopupupdate(true);
    }

    const handledelete = (id) => {
        console.log("for delete", id)
        setId(id)
        setShowPopup(true);
    }

    const handleDisplay = () => {
        setShowTable(!showTable);
    };

    return (
        <div style={{ position: "relative" }}>

            <div style={{ position: "absolute", zIndex: 200, margin: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    {showPopup && <PopupMessageForDelete onClose={() => setShowPopup(false)} data={id} />}
                </div>
            </div>

            <div style={{ position: "absolute", zIndex: 200, margin: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    {showpopupdate && <PopupMessageForUpdate onClose={() => setshowpopupupdate(false)} data={updatePopupData} />}
                </div>
            </div>

            <div className={classes.updt_div}>

                <div className='container'>
                    <div className='mt-3'>
                        <h2>-------------------------ITEMS FETCHED.-------------------------</h2>
                        <br></br>
                        {stockData.length > 0 ? (
                            <>
                                <table calssname=' table-bordered'>
                                    <thead>
                                        <tr>
                                            &nbsp;&nbsp;  <th style={{ border: '1px solid black', padding: '8px' }}>Stock ID</th>
                                            &nbsp;&nbsp;  <th style={{ border: '1px solid black', padding: '8px' }}>Qty</th>
                                            &nbsp;&nbsp; <th style={{ border: '1px solid black', padding: '8px' }}>Product Name</th>
                                            &nbsp;&nbsp; <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                                            &nbsp;&nbsp; <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
                                            &nbsp;&nbsp; <th style={{ border: '1px solid black', padding: '8px' }}>Manufacture Date</th>
                                            &nbsp;&nbsp; <th style={{ border: '1px solid black', padding: '8px' }}>Expiry Date</th>
                                            &nbsp;&nbsp; <th style={{ border: '1px solid black', padding: '8px' }}>Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stockData.map((item, index) => (
                                            <tr key={index}>
                                                &nbsp;&nbsp; <td style={{ border: '1px solid black', padding: '8px' }}>{item.stockID} </td>
                                                &nbsp;&nbsp;<td style={{ border: '1px solid black', padding: '8px' }}>{item.qty} </td>
                                                &nbsp;&nbsp;<td style={{ border: '1px solid black', padding: '8px' }}>{item.productname} </td>
                                                &nbsp;&nbsp; <td style={{ border: '1px solid black', padding: '8px' }}>{item.name} </td>
                                                &nbsp;&nbsp; <td style={{ border: '1px solid black', padding: '8px' }}>{item.price} </td>
                                                &nbsp;&nbsp; <td style={{ border: '1px solid black', padding: '8px' }}>{item.manufacturedate} </td>
                                                &nbsp;&nbsp; <td style={{ border: '1px solid black', padding: '8px' }}>{item.expirydate} </td>
                                                &nbsp;&nbsp;<td style={{ border: '1px solid black', padding: '8px' }}>{item.discount}</td>
                                                <td>
                                                    <button onClick={() => handleUpdate(item)}>Update</button>
                                                    &nbsp;&nbsp;
                                                    <button onClick={() => handledelete(item.stockID)}>delete</button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button style={{ margin: "auto" }} onClick={handleDisplay}>
                                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/admin/items"> DISPLAY </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    </button>
                                </div>
                            </>
                        ) : (
                            <p>Loading stock data...</p>
                        )}
                        {/* <img src={background} alt='background vector' className={classes.back_img} /> */}

                        <center>
                        </center>

                    </div>
                </div>
            </div>
        </div>

    );
};
export default ItemUpdate