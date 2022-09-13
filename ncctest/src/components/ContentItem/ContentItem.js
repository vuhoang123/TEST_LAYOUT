import React from "react";
import styles from "./styles.module.css";
const ContentItem = ({ img }) => {
  return (
    <div className={styles.contentItem}>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
      <div className={styles.content}>
        <div className={styles.item_img}>
          <img className={styles.img} src={img} alt="icon" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    </div>
  );
};

export default ContentItem;
