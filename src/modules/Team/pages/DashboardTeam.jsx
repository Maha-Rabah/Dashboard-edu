import React from 'react'
import Table from '../../../components/Table/Table'
import './dashboardTeam.css'
import edit from '../../../assets/edit.svg'
import trash from '../../../assets/trash.svg'
import { useEffect, useState } from 'react';
import desc from '../../../assets/desc.svg'
import { Link } from 'react-router-dom'
import { teamColumns } from '../data/data'


const DashboardTeam = () => {


  const [teamdata, setTeamdata] = useState([]);

  useEffect(() => {
    fetch("https://api.edu-bridge.org.uk/edu-bridges-team")
      .then((response) => {
        return response.json();
      })
      .then((teamdata) => {
        setTeamdata(teamdata);
        console.log(teamdata)
      });
  }, []);

  return (
    <>
    <div className="dashboard-container">
    <div className="add-btn-container">
        <Link to='/dashboard/addmembersform'><button className='add-btn'>Add Member</button></Link>
    </div>
      <div className="team-container">
         <table className="custom-table">
         <thead>
                <tr>
                  {teamColumns.map((i,c)=>{
                    return (
                      <>
                        <th>{i}</th>
                      </>
                    )})}
                </tr>
          </thead>
              {
          teamdata.map((row, index) => (
        <>
        <tbody>
          <tr className='first-row'>
            <td><img src={row.image} className='profile-img'/></td>
            <td style={{color:'gray'}} key={row.id}>{row.No}.</td>
            <td>{row.name}</td>
            <td>{row.position}</td>
            <td>{row.team}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>
              <button className="edit-btn"><img src={edit} alt="" /></button>
              <button className="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colSpan="7" >
              <div className='desc-container'>
                <img src={desc} alt="" style={{width:'25px'}}/>
                <p><span style={{color:'var(--third-color)'}}>description:</span> {row.information}</p>
              </div>
            </td>
          </tr>
          </tbody>
        </>
         ))}
         </table>
      </div>
    </div>
</>
  )
}

export default DashboardTeam