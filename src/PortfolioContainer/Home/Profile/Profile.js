import React from "react";
import Typical from "react-typical";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Profile.css";

export default function Profile() {
  const notify = () => toast("Pl Email Me, email: chathurangarulz@gmail.com");
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/ChathuRaaksha/">
                <i className="fa fa-facebook-square" />
              </a>
              <a  href='https://www.instagram.com/chathu.raaksha6/'>
                 <i className="fa fa-instagram" />
              </a>
              <a href='https://www.youtube.com/c/ChathuRaaksha'>
                        <i className='fa fa-youtube-square'></i>
              </a>
              <a href='https://www.linkedin.com/in/supun-chathuranga-190372148/'>
                        <i className='fa fa-linkedin'></i>
              </a>
              <a href='https://github.com/ChathuRaaksha/'>
                        <i className='fa fa-github'></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Supun</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={notify}
           
            > Hire Me </button>
            
            <a href='Chathuranga_CV.pdf' download='Supun CV.pdf'>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            <ToastContainer />
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
