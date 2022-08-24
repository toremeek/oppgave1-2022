import axios from "axios";
import { useEffect, useState } from "react";

const GetChuckData = () => {
  const [data, setData] = useState();
  const [ikon, setIkon] = useState();
  const [loading, setLoading] = useState(false);

  const url = "https://api.chucknorris.io/jokes/random";
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (response?.data?.value?.length) {
        setData(response?.data?.value);
        setIkon(response?.data?.icon_url);
        setLoading(false);
      }
    } catch (error) {
      console.log("noe gikk galt under api-kallet", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="chuck">
      <h3>Random joke fra Chuck-apiet:</h3>
      {loading ? <p>Laster..</p> : <p>{data}</p>}
    </div>
  );
};

export default GetChuckData;
