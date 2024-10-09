import React from "react";
import Appbar from "../Components/Appbar";
import Balance from "../Components/Balance";
import User from "../Components/User";
const Dashboard = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col">
      <Appbar user={"amar"} />
      <Balance bal={1000} />
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
