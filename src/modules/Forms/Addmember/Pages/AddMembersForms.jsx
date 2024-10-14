import "../Pages/Addmembers.css";
import FormInput from "../../Components/FormInput";
import Members from "../../assets/member.png";
import axios from "axios";

function AddMembersForm() {

  let data = {
    name: "",
    position: "",
    email: "",
    team: "",
    phone: "",
    information: "",
    photo: null,
  };

  const url = "https://api.edu-bridge.org.uk/edu-bridges-team";
  const authenticationToken = localStorage.getItem("token");


  function handle(e) {
    console.log(e.target);
    const { id, value } = e.target;
    if (id === "photoUpload") {
      const file = e.target.files[0];
      console.log(file);
      data.photo = file;
    } else {
      data[id] = value;
    }
  }

  const submit = async (e) => {
    e.preventDefault();

    if (!authenticationToken) {
      console.error("token is not found");
      return;
    }

    /////////////to send the data//////////
    try {
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("position", data.position);
      formdata.append("team", data.team);
      formdata.append("email", data.email);
      formdata.append("phone", data.phone);
      formdata.append("information", data.information);
      formdata.append("file", data.photo); // إضافة الصورة كملف هنا
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
    <form
      method="post"
      action="#"
      className="form-container"
      onSubmit={(e) => submit(e)}
    >
      <section className="title">
        <img loading="lazy" src={Members} alt="" className="titleIcon" />
        <h1 className="titleText">ADD Members</h1>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput
            label="Name"
            value={data.name}
            onChange={(e) => handle(e)}
          />
          <FormInput
            label="Position"
            value={data.position}
            onChange={(e) => handle(e)}
          />
          <FormInput
            label="Team"
            value={data.team}
            onChange={(e) => handle(e)}
          />
        </div>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput
            label="Email"
            type="email"
            value={data.email}
            onChange={(e) => handle(e)}
          />
          <FormInput
            label="Phone"
            type="tel"
            value={data.phone}
            onChange={(e) => handle(e)}
          />
        </div>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput
            label="Information"
            value={data.information}
            onChange={(e) => handle(e)}
          />
          <div className="formColumn">
            <div className="uploadSection">
              <label htmlFor="photoUpload" className="uploadLabel">
                Photo
              </label>
              <input
                type="file"
                id="photoUpload"
                accept="image/*"
                className="visually-hidden"
                aria-label="Upload photo"
                value={data.photo}
                onChange={(e) => handle(e)}
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