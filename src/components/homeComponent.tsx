import React, { useState } from "react";
import { Spacer, Text } from "vcc-ui";
import { useCars } from "../hooks/getCars";
import CarCard from "./carCard";

import styles from "../../public/css/container.module.css";
import PaginationDesktop from "./paginationDesktop";
import PaginationMobile from "./paginationMobile";

export const HomeComponent: React.FC = () => {
  const { cars } = useCars();
  const [selected, setSelected ]= useState(0)

  const onClickNavigate = (left: boolean) => {
    const cardList = document.getElementById("cardList");
    const card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if (left) {
      cardList?.scrollTo({ left: scrollPosition + cardSize });
    }else {
      cardList?.scrollTo({ left: scrollPosition - cardSize });
    }
  };

  const onClickMobile = (index: number) => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    cardList?.scrollTo({ left: index * cardSize})
    setSelected(index);
  }
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
          onClickLeft={() => onClickNavigate(false)}
          onClickRight={() => onClickNavigate(true)}
        />
      </div>
      <PaginationMobile onClick={onClickMobile} total={cars.length} selected={selected}/>
    </div>
  );
};
