import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";
const Signup = () => {
  const onsubmit = () => {};
  return (
    <section className="w-full h-[100vh] bg-blue-300 flex justify-center items-center">
      <div className="w-72 bg-white  rounded-lg md:w-1/4 p-2">
        <Heading label={"Singup"} />
        <SubHeading label={"Enter Your Information to an create Account"} />
        <InputBox label={"Firstname"} />
        <InputBox label={"LastName"} />
        <InputBox label={"Username"} />
        <InputBox label={"Password"} />
        <Button
          onChange={() => {
            onsubmit;
          }}
          label={"Signup"}
        />
        <BottomWarning
          to={"/signin"}
          buttonText={"signin"}
          label={"Already have an Account"}
        />
      </div>
    </section>
  );
};

export default Signup;
