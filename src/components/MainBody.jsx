import React from "react";
import "./Mainbody.css";
import Nav from "./Nav";
import Footer from "./Footer";

const MainBody = () => {
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="heading">
          <h2>
            SOMETHING AWESOME IS <br /> COMING SOON
          </h2>
          <p>
            Your all-in-one affiliate marketing tracking software {" "}
            <span>track,</span> <span>automate</span> and <br />
            <span>optimize</span>
             {" "}your campaigns
          </p>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <h2>07</h2>
            <p>Days</p>
          </div>
          <div class="grid-item">
            <h2>24</h2>
            <p>Hours</p>
          </div>
          <div class="grid-item">
            <h2>54</h2>
            <p>Minutes</p>
          </div>
          <div class="grid-item">
            <h2>11</h2>
            <p>Seconds</p>
          </div>
        </div>
        <div className="id">
          <p>First Name</p>
          <span>Last Name</span>
        </div>
        <div className="mail-list">
          <span>Enter your email address...</span>
          <p>JOIN OUR WAITING LIST</p>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default MainBody;
