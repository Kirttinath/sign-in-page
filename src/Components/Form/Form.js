import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosPost = () => {
  const data = { fname: "", lastName: "" };
  const [inputData, setInputdata] = useState(data);
  const handleData = (e) => {
    setInputdata({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1", inputData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <label>First Name: </label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData}
      ></input>
      <br />
      <label>Last Name: </label>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleData}
      ></input>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <button onClick={handleUpdate}>Update</button>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
export default AxiosPost;
