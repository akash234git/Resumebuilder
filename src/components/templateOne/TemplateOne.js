import React from "react";
//import "./templateOne.css";
//import Injectable from '../../pages/injectable/Injectable';

const headMain = {
  textAlign: "center",
};
const tempFirst = {
  margin: "0 auto",
  backgroundColor: "white",
  fontSize: "x-small",
  border: "solid",
  width: "50%",
  height: "auto",
};

const topFirst = {
  marginTop: "40px",
  marginLeft: "40px",
};

const emailFirst = {
  marginLeft: "10px",
  color: "blue",
};

const objectiveFirst = {
  marginLeft: "40px",
};

const educationFirst = {
  marginLeft: "40px",
};

const expFirst = {
  marginLeft: "40px",
};

const durationFirst = {
  color: "blue",
};

const jobFirst = {
  marginTop: "7px",
  marginLeft: "40px",
};

const awardFirst = {
  marginTop: "14px",
  marginLeft: "40px",
};

export default function TemplateOne() {
  return (
    <div>
      <div className="main">
        <div style={headMain}>
          {" "}
          <h2>Template One</h2>{" "}
        </div>
        <div style={tempFirst}>
          <div style={topFirst}>
            <h1>values.name</h1>
            <div style={emailFirst}>
              <p>social|c-32/32|phoneNumber|email</p>
            </div>
          </div>
          <div style={objectiveFirst}>
            <h3>Objective</h3>
            <div>
              <p>data.objective</p>
            </div>
          </div>
          <div style={educationFirst}>
            <h3>Education</h3>
            <div className="edu-list">
              <ul>
                <li>data</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Water</li>
              </ul>
            </div>
          </div>
          <div style={expFirst}>
            <h3>Experience</h3>
            <div className="firstJob">
              <div style={durationFirst}>[From]-[To]</div>
              <div className="jobTitle"></div>
              <h5>[Job Title] [Company Name] [Location]</h5>
              <div className="jobDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
            </div>
          </div>
          <div style={jobFirst}>
            <div className="duration">[From]-[To]</div>
            <div className="jobTitle"></div>
            <h5>[Job Title] [Company Name] [Location]</h5>
            <div className="jobDesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
          </div>
          <div style={awardFirst}>
            <div>
              <h3>Award and Acknowledgements</h3>
            </div>
            <div className="award-list">
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
