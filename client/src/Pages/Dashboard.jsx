import React, { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import Balance from "../Components/Balance";
import User from "../Components/User";
import axios from "axios";
import { message } from "antd";

const Dashboard = () => {
  const [balance, setbalance] = useState();
  const [name, setname] = useState();
  const getBalance = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.get(
        "http://localhost:4000/api/v1/account/getbalance",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status >= 200 && res.status < 300) {
        setbalance(res.data.balance);
        setname(res.data.firstname);
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <section className="w-full h-[100vh] flex flex-col">
      <Appbar user={name ? name.toUpperCase() : "XYZ"} />
      <Balance bal={balance ? balance.toFixed(2) : 0.0} />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search users"
        className="border-2 border-grey-800 p-2 m-5 mx-12 rounded-lg"
      />
      <User name={"Amar"} />
    </section>
  );
};

export default Dashboard;
