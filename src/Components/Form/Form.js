import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "./Interceptor";

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

  //? HTTP request for many urls
  // Set the URLs to access
  //   let urls = [
  //     "https://api.storyblok.com/v2/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt",
  //     "https://api.storyblok.com/v2/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt",
  //     "https://api.storyblok.com/v2/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt",
  //   ];
  //   /*
  // | Perform the HTTP get request via Axios
  // | It returns a Promise immediately,
  // | not the response
  // */
  //   const requests = urls.map((url) => axios.get(url));
  //   /*
  // | For waiting the Promise is fulfilled
  // | with the Response, use the then() method.
  // | If the HTTP request received errors
  // | use catch() method
  // */
  //   axios.all(requests).then((responses) => {
  //     responses.forEach((resp) => {
  //       let msg = {
  //         server: resp.headers.server,
  //         status: resp.status,
  //         fields: Object.keys(resp.data).toString(),
  //       };
  //       console.info(resp.config.url);
  //       console.table(msg);
  //     });
  //   });

  async function fetchUserData() {
    try {
      const response = await axiosInstance.get("/users/3");
      console.log("User Data:", response.data);
    } catch (error) {
      console.error("An error occurred:", error.message);
      // Here, you might handle errors coming from the backend
    }
  }

  // Execute the function to fetch user data
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <label style={{ fontFamily: "Ornitons-Serial", fontSize: "20px" }}>
        First Name:{" "}
      </label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData}
        style={{ width: "200px", height: "30px", borderRadius: "9px" }}
      ></input>
      <br />
      <label style={{ fontFamily: "Ornitons-Serial", fontSize: "20px" }}>
        Last Name:{" "}
      </label>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleData}
        style={{ width: "200px", height: "30px", borderRadius: "9px" }}
      ></input>
      <br />
      <button
        style={{
          width: "100px",
          height: "30px",
          fontFamily: "Jost",
          fontSize: "20px",
          borderRadius: "10px",
          backgroundColor: "blueviolet",
          color: "whitesmoke",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <br />
      <button
        style={{
          width: "100px",
          height: "30px",
          fontFamily: "Jost",
          fontSize: "20px",
          borderRadius: "10px",
          backgroundColor: "yellow",
          color: "black",
        }}
        onClick={handleUpdate}
      >
        Update
      </button>
      <br />
      <button
        style={{
          width: "100px",
          height: "30px",
          fontFamily: "Jost",
          fontSize: "20px",
          borderRadius: "10px",
          backgroundColor: "red",
          color: "whitesmoke",
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
export default AxiosPost;
