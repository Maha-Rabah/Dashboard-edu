import React, { useState } from 'react';
import '../Addmember/Addmembers.css';
// import Header from '../Addmember/Header';
import FormInput from '../Addmember/FormInput';
import Members from '../assets/member.png'
import axiosInstance from '../../../utlis/axios';


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
     const response = await axiosInstance.post(
       url,
       {
        name: data.name,
        position: data.position,
        email:data.email,
        phone:data.phone,
        information:data.information,
        photo:data.photo,
       },
       {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authenticationToken}`,
        },
       },
     );

     if (response.ok) {
      console.log("Data added successfully");
    } else {
      console.error("Error adding data:", response);
    }
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