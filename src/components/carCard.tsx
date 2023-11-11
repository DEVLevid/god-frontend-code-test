import {
  Block,
  Card,
  CardContent,
  Flex,
  Grid,
  Link,
  Row,
  Spacer,
  Text,
} from "vcc-ui";
import { Car } from "../types/car.interfaces";
import styles from "../../public/css/carCard.module.css";

interface CardProps {
  car: Car;
}

export default function CarCard({ car }: CardProps) {
  return (
    <div className={styles.cardWrapper}>

      <Text variant="bates" subStyle="emphasis">
        {car?.bodyType}
      </Text>

        <div className={styles.carName}>
        <Text variant="amundsen">{car?.modelName}</Text>
          <Spacer />
          <Text variant="bates" subStyle="inline-link">
            {car?.modelType}
          </Text>
        </div>

      <Spacer />

      <img src={car?.imageUrl} alt="carImage" />
      
      <Spacer />

      <Flex>
        <Row align="center">
          <Link href="https://www.volvocars.com/" arrow="right">
            SHOP
          </Link>
          <Spacer />
          <Link href="https://www.volvocars.com/" arrow="right">
            LEARN
          </Link>
        </Row>
      </Flex>

    </div>
  );
}
