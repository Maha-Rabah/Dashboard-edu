import React, { useState, useEffect } from 'react'
import person from '../../assets/person.svg'
import calender from '../../assets/calender.svg'
const Home = () => {

    
    const [day, setDay] = useState('');

    useEffect(() => {
      const date = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDay = days[date.getDay()];
      setDay(currentDay);
    }, []);   

        const [currentDate, setCurrentDate] = useState('');
      
        useEffect(() => {
          const date = new Date();
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });
      
          setCurrentDate(formattedDate);
        }, []);
      
        
  return (
    <div>
         <div className='dashboard-container'>
          <div className="dashboard-hero">
        <div className="edubridge-in-number">
          <h1 className='number-title'>EduBridge in Numbers</h1>
          <div className="numbers-container">
            <img className='numbers-calender' src={calender} alt="" />
            <p className='dateline'>
              <span className='day'>{day},</span>
              <span className='date'>{currentDate}</span>
            </p>
          </div>
          <img className='person-container' src={person} alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home