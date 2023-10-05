import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = ({ endPoint }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, isLoading } = await fetchData(endPoint);
        setData(data);
        setIsLoading(isLoading);
      } catch (error) {
        console.error(error);
      }
    };
    
    getData();
  }, [endPoint]);

  return { data, isLoading };
};
