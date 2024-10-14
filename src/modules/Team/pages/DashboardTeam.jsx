import './dashboardTeam.css'
// import edit from '../../../assets/edit.svg'
import trash from '../../../assets/trash.svg'
import { useEffect, useState } from 'react';
import desc from '../../../assets/desc.svg'
import { Link } from 'react-router-dom'
import { teamColumns } from '../data/data'


const DashboardTeam = () => {

  useEffect(()=> {
    GetTeam()
  },[])

  const [teamdata, setTeamdata] = useState([]);
  const authenticationToken = localStorage.getItem("token");

  //////////////to Edit the data///////////

  // function Updatedata(id) {
  //   fetch(`https://api.edu-bridge.org.uk/edu-bridges-team/${id}`), {
  //     method: 'PUT',
  //     headers: {
  //       Authorization: `Bearer ${authenticationToken}`,
  //     },
    
  //   }
  //   }


  /////////////To get the data//////////////
  function GetTeam(){
    fetch("https://api.edu-bridge.org.uk/edu-bridges-team")
      .then((response) => {
        return response.json();
      })
      .then((teamdata) => {
        setTeamdata(teamdata);
        console.log(teamdata)
      });
  ;
}
 

///////////////////////to Delete the data//////////////
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api.edu-bridge.org.uk/edu-bridges-team/${id}`, {
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
      GetTeam()
    } 
    catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div className="dashboard-container">
        <div className="add-btn-container">
            <Link to='/dashboard/addmembersform'>
            <button className='add-btn'>Add Member</button>
            </Link>
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
                        )})
                      }
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
                    {/* <Link to="/dashboard/addmembersform" className="edit-btn"  onClick={()=>Updatedata(row.id)}><img src={edit} alt="" /></Link> */}
                    <button className="delete-btn" onClick={()=>handleDelete(row.id)}><img src={trash} alt="" /></button>
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