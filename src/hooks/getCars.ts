import axios from "axios";
import { useEffect, useState } from "react";

export function useCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/cars").then(res => {
      setCars(res.data);
    });
  }, []);

  return {
    cars
  };
}
