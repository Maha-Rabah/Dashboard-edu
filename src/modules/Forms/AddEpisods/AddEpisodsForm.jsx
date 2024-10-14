import React from "react";
import "../AddEpisods/AddEpisods.css";
import FormInput from "../Components/FormInput";
import Episodes from "../assets/Group.png";
import axios from "axios";

const AddEpisodes = () => {
  let data = {
    name: "",
    url_telegram: "",
    url_youtube: "",
    image: "",
  };

  const url = "https://api.edu-bridge.org.uk/episodes";
  const authenticationToken = localStorage.getItem("token");

  function handle(e) {
    const { id, value } = e.target;
    if (id === "file-upload") {
      const file = e.target.files[0];
      data.image = file;
    } else {
      switch (id) {
        case "telegram": {
          data.url_telegram = value;
          break;
        }
        case "youtube": {
          data.url_youtube = value;
          break;
        }
        case "name": {
          data.name = value;
          break;
        }
      }
    }
  }

  const submit = async (e) => {
    e.preventDefault();

    if (!authenticationToken) {
      console.error("token is not found");
      return;
    }

    /////////////to send the data//////////////
    try {
      console.log(data);
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("url_telegram", data.url_telegram);
      formdata.append("url_youtube", data.url_youtube);
      formdata.append("file", data.image); // إضافة الصورة كملف هنا

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
    <form method="post" action="#" className="form" onSubmit={(e) => submit(e)}>
      <section className="title">
        <img loading="lazy" src={Episodes} alt="" className="titleIcon" />
        <h1 className="titleText">ADD Episodes</h1>
      </section>

      <section className="formSection">
        <div className="formRow">
          <FormInput
            label="Telegram"
            value={data.url_telegram}
            onChange={(e) => handle(e)}
          />

          <FormInput
            label="Youtube"
            value={data.url_youtube}
            onChange={(e) => handle(e)}
          />
        </div>
      </section>

      <section className="formSection">
        <div className="formRow">
          <FormInput
            label="Name"
            value={data.name}
            onChange={(e) => handle(e)}
          />

          <div className="uploadPhotos">
            <label htmlFor="file-upload" className="fileLabel">
              Upload Photos
            </label>
            <input
              type="file"
              id="file-upload"
              multiple
              accept="image/*"
              className="fileInput"
              value={data.image}
              onChange={(e) => handle(e)}
            />
          </div>
        </div>
      </section>
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default AddEpisodes;
