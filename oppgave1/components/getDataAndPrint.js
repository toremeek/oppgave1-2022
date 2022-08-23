import axios from "axios";
import { useEffect, useState } from "react";

const GetDataAndPrint = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const url = "/api/message";
  const getData = async () => {
    try {
      const response = await axios.get(url);
      if (response?.data?.success) {
        setData(response?.data?.data);
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error);
    }
  };

  const postToApi = async () => {
    try {
      const response = await axios.post(url, { message });
      if (response?.data?.success) {
        setData(response.data.data);
      }
    } catch (err) {
      console.log(err);
      setError(true);
      setErrorMessage(err?.response?.data?.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postToApi();
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="apimessages">
      <h3>Post noe til Apiet:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Skriv inn din beskjed"
            value={message}
            onChange={handleChange}
          />
        </label>
        {error ? <p id="error">{errorMessage}</p> : null}
        <input type="submit" value="Post til API" />
      </form>
      <h3>Data fra API-et som finnes under pages/api:</h3>
      {data?.map((message, index) => (
        <p key={index}>
          {index + 1}: {message.message}
        </p>
      ))}
    </div>
  );
};

export default GetDataAndPrint;
