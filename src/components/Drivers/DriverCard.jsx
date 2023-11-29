import React from "react";
import styles from "./DriverCard.module.css";

export const DriverCard = ({ driver }) => {
  return (
    <div className={styles.card}>
      <img
        src={driver.imageSrc}
        alt="Picture of driver"
        className={"card-img-top"}
      />
      <div className="">
        <h1 className="my-5">
          {driver.name + " "}
          <sup>{driver.number}</sup>
        </h1>
      </div>
    </div>
  );
};
