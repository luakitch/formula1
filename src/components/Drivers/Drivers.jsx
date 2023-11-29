import React from "react";
import { DRIVERS } from "../../data/2023_drivers";
import styles from "./Drivers.module.css";
import { DriverCard } from "./DriverCard";
import { ArrowReturnLeft } from "react-bootstrap-icons";

export const Drivers = ({ constructorName, handleClick }) => {
  return (
    <div className="row">
      <div className="col-1 my-3">
        <button className={styles.backBtn} onClick={handleClick}>
          <ArrowReturnLeft className={styles.backBtn} size={35} />
        </button>
      </div>
      <div className="row mb-5">{DRIVERS.map(
        (driver) =>
          driver.constructor === constructorName && (
            <div className="col-5 mx-auto my-3">
              <DriverCard driver={driver} key={driver.name} />
            </div>

            // <div className={styles.driverCard} key={driver.name}>{driver.name}</div>
          )
      )}</div>
      
    </div>
  );
};
