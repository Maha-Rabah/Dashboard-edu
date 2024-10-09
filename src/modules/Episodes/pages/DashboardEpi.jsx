import React, { useEffect, useState } from 'react'
import Table from '../../../components/Table/Table'
import { Link } from 'react-router-dom';
import edit from '../../../assets/edit.svg'
import trash from '../../../assets/trash.svg'

const DashboardEpi = () => {
  
  const EpiColumns = ["Images", "Name", "TelegramURL","YoutubeURL", "Actions"] 
  
  const [edudata, setEdudata] = useState([]);

  useEffect(() => {
fetch("https://api.edu-bridge.org.uk/episodes")
  .then((response) => {
    return response.json();
  })
  .then((edudata) => {
    console.log(edudata)
    setEdudata(edudata);
  });
}, []);
  return  (
    <>
    <div className="dashboard-container">
    <div className="add-btn-container">
        <Link to={""}><button className='add-btn'>Add </button></Link>
    </div>
      <div className="team-container">
         <table className="custom-table">
         <thead>
                <tr>
                  {EpiColumns.map((i,c)=>{
                    return (
                      <>
                        <th>{i}</th>
                      </>
                    )})}
                </tr>
          </thead>
          {
      edudata.map((row, index) => (
        <>
          <tr className='first-row'>
            <td><img src={row.image} className='epi-img'/></td>
            <td>{row.name}</td>
            <td className='link-row'><a href={row.url_telegram}>{row.url_telegram}</a></td>
            <td className='link-row'><a href={row.url_youtube}>{row.url_youtube}</a></td>
            <td>
              <button className="edit-btn"><img src={edit} alt="" /></button>
              <button className="delete-btn"><img src={trash} alt="" /></button>
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


export default DashboardEpi