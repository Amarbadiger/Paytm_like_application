import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const onsubmit = () => {
    navigate("/dashboard");
  };
  return (
    <section className="w-full h-[100vh] bg-blue-300 flex justify-center items-center">
      <div className="w-72 bg-white  rounded-lg md:w-1/4 p-2">
        <Heading label={"Sing-in"} />
        <SubHeading label={"Enter Your Creditional to an create Account"} />
        <InputBox label={"Username"} />
        <InputBox label={"Password"} />
        <Button onClick={onsubmit} label={"Sign-in"} />
        <BottomWarning
          to={"/signup"}
          buttonText={"SignUp"}
          label={"Don't have an Account"}
        />
      </div>
    </section>
  );
};

export default Signin;
