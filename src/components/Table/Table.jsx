import './table.css'

import { BiCaretRight } from "react-icons/bi";
import TelegramLogo from '../../assets/TelegramLogo.svg'
import YoutubeLogo from '../../assets/YoutubeLogo.svg'
import { GraphicDesign } from '../../modules/Opp/components/JobDescription/constants/const';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Table = ({title, btn, columns, data,form}) => {


//   const [statisticsdata, setStatisticsdata] = useState([]);

//   useEffect(() => {
//     fetch("https://api.edu-bridge.org.uk/statistics")
//       .then((response) => {
//         return response.json();
//       })
//       .then((statisticsdata) => {
//         setStatisticsdata(statisticsdata);
//       });
//   }, []);





  return (
    <div>
      <div className="add-btn-container">
        <Link to={form}><button className='add-btn'>Add {title}</button></Link>
      </div>

    <table className="custom-table">


          
{/* {
          title={title} && data.map((row, index) => (
        <>
          <tr className='first-row'>
            <td><img src={row.image} className='profile-img'/></td>
            <td style={{color:'gray'}} key={row.id}>{row.No}.</td>
            <td>{row.name}</td>
            <td>{row.position}</td>
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
        </>
         ))} */}
    {/* {
      title=="Opportunities" && data.map((row, index) => (
        <tbody>
          <tr className='first-row'>
            <td style={{color:'gray'}}>{row.No}.</td>
            <td>{row.Position}</td>
            <td>{row.Time}</td>
            <td>{row.Team}</td>
            <td>{row.Available}</td>
            <td>
              <button class="edit-btn"><img src={edit} alt="" /></button>
              <button class="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='dashboard-job-desc'>
                    <Link to="../jobdescription" data={GraphicDesign}>Job Description <BiCaretRight className='yellow-arrow'/></Link>
            
              </div>
            </td>
          </tr>
        </tbody>
              ))
    } */}
{/* 
{
      title=="Statistics" && statisticsdata.map((row, index) => (
        <tbody>
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
        </tbody>
              ))
    }

{
      title=="Team" && teamdata.map((row, index) => (
        <tbody>
          <tr className='first-row'>
            <td><img src={row.image} className='profile-img'/></td>
            <td style={{color:'gray'}}>{row.No}.</td>
            <td>{row.name}</td>
            <td>{row.position}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>
              <button className="edit-btn"><img src={edit} alt="" /></button>
              <button className="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='desc-container'>
                <img src={desc} alt="" style={{width:'25px'}}/>
                <p><span style={{color:'var(--third-color)'}}>description:</span> {row.information}</p>
              </div>
            </td>
          </tr>
        </tbody>
              ))
    } */}

{/* 
{
      title=="Episodes" && edudata.map((row, index) => (
        <tbody>
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
        </tbody>
              ))
    } */}

{/* {
      title=="Blog" && data.map((row, index) => (
        <tbody>
          <tr className='first-row'>
            <td><img src={row.img} className='epi-img'/></td>
            <td  rowSpan={1}>{row.No}.</td>
            <td>{row.Name}</td>
            <td>{row.Date}</td>
            <td>{row.Writer}</td>
            <td>{row.Country}</td>
            <td>
              <button className="edit-btn"><img src={edit} alt="" /></button>
              <button className="delete-btn"><img src={trash} alt="" /></button>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='blog-content-container'>
                <img src={desc} alt="" style={{width:'25px'}}/>
                <p className='blog-content'><span style={{color:'var(--third-color)'}}>Text:</span> Lopsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, recusandae.  consectetur . Dele harum voluptates iure. Vitae sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, expedita. esse temporibus ipsa. Lorem ipsum dolor sit amet.</p>
              </div>
            </td>
          </tr>
          <tr className="second-row no-border">
            <td colspan="7" >
              <div className='dashboard-job-desc'>
                <a href="">Learn More <BiCaretRight className='yellow-arrow'/></a>
              </div>
            </td>
          </tr>
        </tbody>
              ))
    } */}

  </table>

  </div>

  )
}

export default Table