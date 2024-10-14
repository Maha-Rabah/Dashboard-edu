import axios from 'axios';
import styles from '../AddStatistics/AddStatistics.module.css';
import Statistics from "../assets/1.png"
import FormInput from '../Components/FormInput';
// import { useState } from 'react';

const StatisticsForm = () => { 

  let data = {
    name: "",
    type: "",
    count:""
  };

  const url = "https://api.edu-bridge.org.uk/statistics";
  const authenticationToken = localStorage.getItem("token");



                         // handle dropdown 
//   const [options, setOptions] = useState(["Home","Edumentoring","EduLens","EduCoun"]);
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
// };

  function handle(e) {
    console.log(e.target);
    const { id, value } = e.target;
    data[id] = value;
  }

  const submit = async (e) => {
    e.preventDefault();

    if (!authenticationToken) {
      console.error("token is not found");
      return;
    }
    try {
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("type", data.type);
      formdata.append("count", data.count);

      const response = await axios.post(url, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authenticationToken}`,
        },
      });
      console.log(response);
      if (response.status === 201) {
        console.log("Data added successfully");
      } else {
        console.error(
          "An error occurred while adding data. Status: " +
            response.data.message
        );
      }
    } catch (error) {
      console.error(
        "An error occurred while adding data. Error: ",
        error.response.data.message
      );
    }
  };



  return (
<main className={styles.mainContent}>

    <section className={styles.titleSection}>
        <img src={Statistics} alt="" className={styles.titleIcon} />
        <h1>ADD Statistics</h1>
    </section>

    <form 
    className={styles.formContainer}
    method="post"
    action="#"
    onSubmit={(e) => submit(e)}
    >
      <div className={styles.formRow}>

        <div className={styles.formColumn}>
          <div className={styles.inputGroup}>
            <FormInput 
            label="Name"
            className={styles.inputField} 
            value={data.name}
            onChange={(e) => handle(e)}
            />
          </div>
        </div>

        <div className={styles.formColumn}>
          <div className={styles.inputGroup}>
            <FormInput 
            label="Count"
            type="number"
            className={styles.inputField} 
            value={data.count}
            onChange={(e) => handle(e)}
            />
          </div>
        </div>

      </div>


      <label htmlFor="type" className={styles.typeLabel}>Type</label>
      {/* <select id="type" className={styles.typeSelect} value={selectedOption} onChange={handleChange}>
        <option value={data.type}>Choose Type</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
                  {option.label}
          </option>
          ))}
      </select>
      {} */}
      
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
    </main>
  );
};

export default StatisticsForm;