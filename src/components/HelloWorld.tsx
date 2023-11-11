import React from "react";
import { Spacer, Text } from "vcc-ui";
import { useCars } from "../hooks/getCars";
import CarCard from "./carCard";

import styles from "../../public/css/container.module.css";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();
  return (
    <div className={styles.container}>
      <Text variant='cook'>Recharge Models</Text>
      <Spacer/>
      <div className={styles.cardContainer}>
      {cars.map((car) => (
          <CarCard car={car} />
        ))}
      CTS</div>
    </div>
  );
};
