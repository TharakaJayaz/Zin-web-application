// import React, { useState, useEffect } from "react";
// import classes from "./Reports.Module.css";
// import { useHistory } from 'react-router-dom';
// //import NavbarAdmin from "../../ui/navbar/NavbarAdmin";
// //import ItemCard from "./ItemCard";
// // import { FaSearch } from "react-icons/fa";
// // import background from '../../assets/Background vector group.png';
// import Table from 'react-bootstrap/Table';
// //import NavbarAdmin from "../../../ui/navbar/NavbarAdmin";

// import axios from 'axios';
// import { Navigate } from "react-router-dom";


// function FeedbackReport() {
//   const [stockData, setStockData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       debugger;
//       try {
//         const response = await axios.get('http://localhost:8800/feedback');
//         setStockData(response.data);
//       } catch (error) {
//         console.error('Error fetching stock data:', error);
//       }
//     };

//     fetchData();
//   }
 
  
//   , []);
 

    
  
//   return (
//     <div>
//       {/* <NavbarAdmin /> */}

//       <div className={classes.updt_div} style={{ padding: "60px" }}>

//         {stockData.length > 0 ? (
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>FID</th>
//                 <th>Comment</th>
//                 <th>SID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {stockData.map((item, index) => (
//                 <tr key={index}>

//                   {/* <td><img src={"http://localhost:8800/static/" + item.image} height={60} width={60} /></td> */}
//                   <td>{item.FID}</td>
//                   <td>{item.comment}</td>
//                   <td>{item.SID}</td>
//                 </tr>
//               ))}
//             </tbody>

//           </Table>

          
//         ) : (
          
//           <p>Loading Report data...</p>
//         )}
//         <button style={{ backgroundColor: 'red' }} onClick={handleContinue}>
//       Continue
//     </button>
//       </div>
//     </div>
//   );
// };

// export default FeedbackReport;




import React, { useState, useEffect } from "react";
import classes from "./Reports.Module.css";
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import NavbarAdmin from "../../ui/navbar/NavbarAdmin";

function FeedbackReport() {
  const [stockData, setStockData] = useState([]);
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleRating = (value) => {
    setRating(value);
  };
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/admin/temp_reps');
  };

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
    <div >
      <div className={classes.updt_div} style={{ padding: "60px",background:"rgb(251, 232, 232)"}}>
        <NavbarAdmin    />
        <p style={{width:'100vw', textAlign:"center",fontSize:'2rem',letterSpacing:"2px"  }}>FEEDBACK REPORTS</p>
        {stockData.length > 0 ? (
          <div style={{height:"450px",overflow:'auto'}}>
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
                  <td>{item.FID}</td>
                  <td>{item.comment}</td>
                  <td>{item.SID}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        ) : (
          <p>Loading Report data...</p>
        )}
       
       
       <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none', cursor: 'pointer' }} onClick={handleContinue}>
  BACK
</button>

        {/* <button style={{ backgroundColor: 'ash' }} onClick={handleContinue}>
          BACK
        </button> */}
      </div>
      {/* <div className="feedback-container">
      <Button variant="primary" onClick={() => setShowModal(true)}>Open Rating Popup</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Rate the Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select a rating:</p>
          <div className="star-container">
            {[1, 2, 3, 4, 5].map((value) => (
              <FaStar
                key={value}
                className={value <= rating ? 'selected' : ''}
                onClick={() => handleRating(value)}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => console.log('Submitted rating:', rating)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div> */}
    </div>
    
  );
};


export default FeedbackReport;

/*import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';
import './FeedbackReport.css';

function FeedbackReport() {
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reviewedRows, setReviewedRows] = useState([]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleRowReview = (rowId) => {
    setReviewedRows([...reviewedRows, rowId]);
  };

  const isRowReviewed = (rowId) => {
    return reviewedRows.includes(rowId);
  };

  return (
    <div className="feedback-container">
      <table className="feedback-table">
        <thead>
          <tr>
            <th>FID</th>
            <th>Comment</th>
            <th>SID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item, index) => (
            <tr key={index}>
              <td>{item.FID}</td>
              <td>{item.comment}</td>
              <td>{item.SID}</td>
              <td>
                <button
                  className={`review-button ${isRowReviewed(index) ? 'reviewed' : ''}`}
                  onClick={() => handleRowReview(index)}
                >
                  {isRowReviewed(index) ? 'Reviewed' : 'Review'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Review Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for reviewing!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FeedbackReport;
*/