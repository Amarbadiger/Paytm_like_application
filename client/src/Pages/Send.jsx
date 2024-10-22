import React, { useEffect, useState } from "react";
import profile from "../assets/profile.webp";
import { useParams } from "react-router-dom";
import axios from "axios";

const Send = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  console.log(id);
  const getSingleUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/singleUser/${id}`
      );

      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getSingleUser();
  }, []);
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-slate-200 ">
      <div className="bg-white  w-72 h-64 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center">
        <h1 className="text-black text-xl font-bold mb-4">Send Money</h1>

        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="User Avatar"
            className="mb-2 rounded-full w-10"
          />
          <p className=" text-black">John Doe</p>
        </div>

        <div className="flex flex-col w-full items-center mt-4">
          <label htmlFor="amount" className="text-black mb-2">
            Amount (in Rs)
          </label>
          <input
            type="text"
            id="amount"
            placeholder="Enter amount"
            className="p-2 rounded-lg w-full text-black mb-4"
          />
          <button className="text-white bg-green-600 w-full py-2 px-4 rounded-lg font-bold">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Send;
