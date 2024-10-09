import React from 'react'
import './jobDescription.css'
import { GraphicDesign } from '../constants/const'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const JobDescription = () => {

    const gd = GraphicDesign;


  return (
    <div className="dashboard-container">
        <div className="position-container">
            <Link to="/dashboardopp"><BiArrowBack  style={{marginBottom:'0.3em',fontSize:'35px', color:'#fff',backgroundColor:'var(--main-color)', borderRadius:'50%',}}/></Link>
            <h3 className='position-header'>Position Title: </h3>
            <div className="position-info">
                {GraphicDesign.PositionTitle}
            </div>
        </div>
        <div className="position-container">
            <h3 className='position-header'>Position Summary: </h3>
            <div className="position-info">
              {gd.PositionSummary}
            </div>
        </div>

        <div className="position-container">
            <h3 className='position-header'>Duties and Responsibilities: </h3>
            <div className="position-info">
                <ul>
                    {
                        gd.Duties.map((row, index) => (
                            <li>{row}</li>
                        )
                    )
                }
                </ul>
            </div>
        </div>

        <div className="position-container">
            <h3 className='position-header'>Qualifications and Skills: </h3>
            <div className="position-info">
                <ul>
                    {
                        gd.Qualifications.map((row, index) => (
                            <li>{row}</li>
                        )
                    )
                }
                </ul>
            </div>
        </div>

        <div className="position-container">
            <h3 className='position-header'>Work Environment: </h3>
            <div className="position-info">
                {gd.Environment}
            </div>
        </div>

        <div className="position-container">
            <h3 className='position-header'>Reporting Structure: </h3>
            <div className="position-info">
                {gd.ReportingStructure}
            </div>
        </div>

        <div className="position-container">
            <h3 className='position-header'>Benifits: </h3>
            <div className="position-info">
                <p>EduBridge Commits to:</p>
                <div className="position-info">
                    <ul>
                    {
                        gd.Benifts.map((row, index) => (
                            <li>{row}</li>
                        )
                    )
                }
                    </ul>
                </div>
            </div>
        </div>

        <div className="position-container">
            <h3 className='position-header'>Application Process: </h3>
            <div className="position-info">
                {gd.Process} <a href="https://forms.gle/vCU5gXpxrPpmPwJ26" style={{color:'#000', textDecoration:'underline'}}>Google Document</a>
            </div>
        </div>
        {/* <div className="job-submit">
            <a href="" className='job-submit-btn'>Submit</a>
        </div> */}

    </div>
  )
}

export default JobDescription