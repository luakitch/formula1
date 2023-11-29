import React from "react";
import { Drivers } from "../Drivers/Drivers";
import { useState } from "react";
import { CONSTRUCTORS } from "../../data/2023_constructors";
import styles from "./Constructors.module.css";

export const Constructor = () => {
  const [constructorClicked, setConstructorClicked] = useState(false);
  const [selectedConstructor, setSelectedConstructor] = useState(null);

  const handleDriverClick = (constructor) => {
    if (constructorClicked == false) {
      setConstructorClicked(true);
    } else {
      setConstructorClicked(false);
    }

    setSelectedConstructor(constructor);
  };

  return (
    <div className="container mt-5">
      <h1 className={styles.title}>
        {constructorClicked == false
          ? "2023 Formula 1 Constructors"
          : "2023 " + selectedConstructor + " Drivers"}
      </h1>
      <div className="row" align="center">
        {constructorClicked ? (
          <div className="">
            <Drivers
              handleClick={handleDriverClick}
              constructorName={selectedConstructor}
            />
          </div>
        ) : (
          CONSTRUCTORS.map((constructor) => (
            <ol className={styles.constructors} key={constructor.name}>
              <li className={styles.constructor}>
                <button
                  className={`rounded ${styles[constructor.style]}`}
                  onClick={() => handleDriverClick(constructor.name)}
                >
                  {constructor.name}
                </button>
              </li>
            </ol>
          ))
        )}
      </div>
    </div>
  );
};
