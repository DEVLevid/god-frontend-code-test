import React from "react";
import { Spacer, Text } from "vcc-ui";
import { useCars } from "../hooks/getCars";
import CarCard from "./carCard";

import styles from "../../public/css/container.module.css";
import PaginationDesktop from "./paginationDesktop";

export const HomeComponent: React.FC = () => {
  const { cars } = useCars();
  const cardList = document.getElementById("cardList");
  const card = cardList?.firstElementChild;
  const onClickLeft = () => {
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    if (scrollPosition >= cardSize) {
      cardList?.scrollTo({ left: scrollPosition - cardSize });
    }
  };
  const onClickRight = () => {
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    if (scrollPosition + cardSize <= scrollSize) {
      cardList?.scrollTo({ left: scrollPosition + cardSize });
    }
  };
  return (
    <div className={styles.container}>
      <Text variant="cook">Recharge Models</Text>
      <Spacer />
      <div className={styles.cardContainer} id="cardList">
        {cars.map((car) => (
          <CarCard car={car} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <PaginationDesktop
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </div>
    </div>
  );
};
