import React from "react";
import img1 from "../../assets/images/img1_about.png";
import img2 from "../../assets/images/img2_about.png";
import img3 from "../../assets/images/img3_about.png";
import img4 from "../../assets/images/img4_about.png";
function Team() {
  return (
    <div className="team">
      <div className="team_container">
        <div className="team_content">
          <div className="title">
            <h1>Our Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="team_grid">
            <div className="grid_item">
              <img src={img1} />
              <div className="detail">
                <h3>John Doe</h3>
                <p>Digital Marketing Manager</p>
              </div>
            </div>
            <div className="grid_item">
              <img src={img2} />
              <div className="detail">
                <h3>John Doe</h3>
                <p>Digital Marketing Manager</p>
              </div>
            </div>
            <div className="grid_item">
              <img src={img3} />
              <div className="detail">
                <h3>John Doe</h3>
                <p>Digital Marketing Manager</p>
              </div>
            </div>
            <div className="grid_item">
              <img src={img4} />
              <div className="detail">
                <h3>John Doe</h3>
                <p>Digital Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
