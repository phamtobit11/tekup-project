import React from "react";
import "./TekupStyle.css";
import { TekupData } from "../Data/TekupData.js";

function Home() {
  return (
    <div>
      <div className="tekup-menu">
        <div className="all">All</div>
        <div className="manpower-supply">Manpower Supply</div>
        <div className="maw">Mobile App / Websites</div>
        <div className="design">UI/UX Design</div>
      </div>
      {TekupData.map((item, index) => (
        <TekupProject
          key={item.id}
          img={item.img}
          title={item.title}
        ></TekupProject>
      ))}
    </div>
  );
}
function TekupProject(props) {
  return (
    <div className="main-item">
      <div className="tekup-item">
        <div className="image-item">
          <img src={props.img} alt="" />
        </div>
        <div className="content">
          <p className="title">{props.title}</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
