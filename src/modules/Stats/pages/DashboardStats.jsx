import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table/Table'
import './dashboardStats.css'
import edit from '../../../assets/edit.svg'
import trash from '../../../assets/trash.svg'
import { Link } from 'react-router-dom'

const DashboardStats = () => {

    const statsColumns = [
      "No .","Name", "Count","Type", "Actions"
    ]
      const [statisticsdata, setStatisticsdata] = useState([]);

  useEffect(() => {
    fetch("https://api.edu-bridge.org.uk/statistics")
      .then((response) => {
        return response.json();
      })
      .then((statisticsdata) => {
        setStatisticsdata(statisticsdata);
      });
  }, []);

  return (
    <>
    <div className="dashboard-container">
    <div className="add-btn-container">
        <Link to={""}><button className='add-btn'>Add </button></Link>
    </div>
      <div className="team-container">
         <table className="custom-table">
         <thead>
                <tr>
                  {statsColumns.map((i,c)=>{
                    return (
                      <>
                        <th>{i}</th>
                      </>
                    )})}
                </tr>
          </thead>
          {
      statisticsdata.map((row, index) => (
        <>
          <tr className='first-row'>
            <td style={{color:'gray'}}>{row.No}.</td>
            <td>{row.name}</td>
            <td>{row.count}</td>
            <td>{row.type}</td>
            <td>
              <button class="edit-btn"><img src={edit} alt="" /></button>
              <button class="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
        </>
              ))
    }
         </table>
      </div>
    </div>
</>
  )
}


export default DashboardStats