import React from 'react';
import classes from './ReportCard.module.css';
import details from '../../details/ReportDetails';

const ReportCard = (props) => {
  return (
    <div className={`${classes.main_div}  ${props.className}`}>
     <section className={classes.sec1}>
      Report ID : <span>{props.details.id}</span>
     </section>
     <section className={classes.sec2}>
      <table>
        <tbody>
          <tr>
            <th>Bill id</th>
            <th>sales rep</th>
            <th>bill date</th>
            <th> No of Items</th>
            <th>Total</th>
            <th>Discount</th>
          </tr>
          <tr>
            <td>BN021</td>
            <td>SR0021</td>
            <td>2023-07-24</td>
            <td>600</td>
            <td>55000</td>
            <td>3000</td>
          </tr>
          {props.details.bills.map((bill) =>(
            <tr key={bill.bId}>
              <td>{bill.bId}</td>
              <td>{bill.rep}</td>
              <td>{bill.bDate}</td>
              <td>{bill.noOfItem}</td>
              <td>{bill.total}</td>
              <td>{bill.dis}</td>
            </tr>
          ))}
         
        </tbody>
      </table>
     </section>
    </div>
  )
}

export default ReportCard
