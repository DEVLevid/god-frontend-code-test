import axios from "axios";
import { useEffect, useState } from "react";

export function useCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cars").then(res => {
      setCars(res.data);
    });
  }, []);

  return {
    cars
  };
}
