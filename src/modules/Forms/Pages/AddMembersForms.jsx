import React, { useState } from 'react';
import '../Addmember/Addmembers.css';
// import Header from '../Addmember/Header';
import FormInput from '../Addmember/FormInput';
import Members from '../assets/member.png'
import axiosInstance from '../../../utlis/axios';
import axios from 'axios';


function AddMembersForm() {

  const[data,setData]=useState({
    name:"",
    position:"",
    email:"",
    phone:"",
    description:"",
    photo:""
  });

  const url='https://api.edu-bridge.org.uk/edu-bridges-team';

  function handle(e){
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setData(newdata);
  console.log(newdata)
  }

  const submit = async (e) => {
    e.preventDefault();

   const authenticationToken = localStorage.getItem('token');

   if (!authenticationToken) {
     console.error('token is not found');
     return;
   }
   
   try {
   const formdata = new FormData({
    name: data.name,
    position: data.position,
    team: data.team,
    email:data.email,
    phone:data.phone,
    information:data.information,
    file:data.photo
   })
     axios.post(
       url,
   formdata,
       {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authenticationToken}`,
        },
       },
     );

      console.log("Data added successfully");
    } catch (error) {
     console.error('error', error);
   }
 };

  return (
    <form method="post" action="#" className='form-container' onSubmit={(e)=>submit(e)}>
      {/* <Header /> */}
      <section className="title">
        <img
          loading="lazy"
          src={Members}
          alt=""
          className="titleIcon"
        />
        <h1 className="titleText">ADD Members</h1>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput label="Name" value={data.name} onChange={(e)=>
            handle(e)}/>
          <FormInput label="Position" value={data.position} onChange={(e)=>
            handle(e)}/>
          <FormInput label="Team" value={data.team} onChange={(e)=>
            handle(e)}/>
        </div>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput label="Email" type="email" value={data.email} onChange={(e)=>
            handle(e)}/>
          <FormInput label="Phone" type="tel" value={data.phone} onChange={(e)=>
            handle(e)}/>
        </div>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput label="Description" value={data.information} onChange={(e)=>
            handle(e)} />
          <div className="formColumn">
      <div className="uploadSection">
        <label htmlFor="photoUpload" className="uploadLabel">Photo</label>
        <input
          type="file"
          id="photoUpload"
          accept="image/*"
          className="visually-hidden"
          aria-label="Upload photo"
          value={data.photo} 
          onChange={(e)=>
            handle(e)}
        />
        <label htmlFor="photoUpload" className="uploadButton">
          UPLOAD PHOTO
        </label>
      </div>
    </div>
        </div>
      </section>

      <button type="submit" className="submitButton">
          Submit
        </button>
    </form>
  );
}

export default AddMembersForm;