import React, { useEffect, useState } from 'react'
import './dashboardStats.css'
// import edit from '../../../assets/edit.svg'
import trash from '../../../assets/trash.svg'
import { Link } from 'react-router-dom'

const DashboardStats = () => {

    useEffect(()=> {
      GetStats()
    },[])

    const statsColumns = ["No .","Name", "Count","Type", "Actions"]
    const [statisticsdata, setStatisticsdata] = useState([]);
    const authenticationToken = localStorage.getItem("token");


    ////////to get the data///////////
    function GetStats(){
    fetch("https://api.edu-bridge.org.uk/statistics")
      .then((response) => {
        return response.json();
      })
      .then((statisticsdata) => {
        setStatisticsdata(statisticsdata);
      });
    }

//////////////to delete the data////////
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api.edu-bridge.org.uk/statistics/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${authenticationToken}`,
        },
      });
      
      if (response.ok) {
        console.log('Item deleted successfully');
      } else {
        console.error('Failed to delete item');
      }
      GetStats()

    } 
    catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className="dashboard-container">
        <div className="add-btn-container">
          <Link to="/dashboard/addstatisticsform"><button className='add-btn'>Add </button></Link>
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
              {/* <button class="edit-btn"><img src={edit} alt="" /></button> */}
              <button className="delete-btn" onClick={()=>handleDelete(row.id)}><img src={trash} alt="" /></button>
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