import React from "react";
import "./Contact.css";
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import location from "../../assets/location.png";

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6b01c4a6-50cb-4f89-ade4-62e27f8bc3ea");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    
  };

  return (
    <div id="contact" className="contact">
      <div className="col-1">
        <h4>Get in touch</h4>

        <p>
          For know more about . please contact me and get in touch for further
          process
        </p>
        <div className="detail">
          <img src={call} alt="" /> <p>9860510964</p>
        </div>

        <div className="detail">
          <img src={mail} alt="" /> <p>anuragsomwanshi11@gmail.com</p>
        </div>

        <div className="detail">
          <img src={location} alt="" />
          <p>Latur maharashtra 413512</p>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="col-2">
          <h1>Contact </h1>

          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            rows={9}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn-submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;   
