import React from "react";
import styles from "./styles.module.css";
import ContentItem from "../ContentItem/ContentItem";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import logo from "../../assets/images/logo.png";
function Main() {
  return (
    <div className={styles.main}>
      <SideBar />
      <div>
        <div className={styles.main_container}>
          <div className={styles.container}>
            <div className={styles.header_content}>
              <img className={styles.logo} src={logo} alt="logo" />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.info_content}>
              <h4>Lorem ipsum dolor sit asmet?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <ContentItem img={img1} />
            <ContentItem img={img2} />
            <ContentItem img={img3} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
