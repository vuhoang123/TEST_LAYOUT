import React from "react";
import img1 from "../../assets/images/img1_work.png";
import img2 from "../../assets/images/img2_work.png";
import img3 from "../../assets/images/img3_work.png";
import img4 from "../../assets/images/img4_work.png";
import img5 from "../../assets/images/img5_work.png";
import img6 from "../../assets/images/img6_work.png";
import { BsArrowRight } from "react-icons/bs";

function Work() {
  return (
    <div className="work">
      <div className="container_work">
        <div className="work_content">
          <div className="title">
            <h1>WORK</h1>
          </div>
          <div className="work_content">
            <div className="work_grid">
              <div className="grid_item">
                <img src={img1} alt="img1" />
                <div className="detail">
                  <h3>Abstract Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a>
                    See Project <BsArrowRight className="arrow" />{" "}
                  </a>
                </div>
              </div>
              <div className="grid_item">
                <img src={img2} alt="img2" />
                <div className="detail">
                  <h3>Abstract Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a>
                    See Project <BsArrowRight className="arrow" />
                  </a>
                </div>
              </div>
              <div className="grid_item">
                <img src={img3} alt="img3" />
                <div className="detail">
                  <h3>Abstract Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a>
                    See Project <BsArrowRight className="arrow" />
                  </a>
                </div>
              </div>
              <div className="grid_item">
                <img src={img4} alt="img4" />
                <div className="detail">
                  <h3>Abstract Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a>
                    See Project <BsArrowRight className="arrow" />
                  </a>
                </div>
              </div>
              <div className="grid_item">
                <img src={img5} alt="img5" />
                <div className="detail">
                  <h3>Abstract Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a>
                    See Project <BsArrowRight className="arrow" />
                  </a>
                </div>
              </div>
              <div className="grid_item">
                <img src={img6} alt="img6" />
                <div className="detail">
                  <h3>Abstract Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a>
                    See Project <BsArrowRight className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
