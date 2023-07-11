import React, { useState } from "react";
import "./form.css";
// import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isfriendly: true,
    employment: "",
    favColor: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Form to take input from user:
      </h2>

      <form className="formdata" onSubmit={submitForm}>
        <div>
          <label>First Name: </label>
          <input
            placeholder="First Name"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            placeholder="Last Name"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label>Comments: </label>
          <textarea
            placeholder="Write about yourself"
            name="comments"
            onChange={handleChange}
            value={formData.comments}
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="isFriendly"
            name="isfriendly"
            onChange={handleChange}
            checked={formData.isfriendly}
          />
          <label htmlFor="isFriendly">I agree to conditions</label>
        </div>

        <div>
          <input
            type="radio"
            id="employed"
            name="employment"
            value="employed"
            checked={formData.employment === "employed"}
            onChange={handleChange}
          />
          <label htmlFor="employed">Employed</label>
        </div>
        <br />

        <div>
          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part Time</label>
        </div>
        <br />

        <label>Choose your favourite color</label>
        <br />
        <select
          id="favColor"
          name="favColor"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
