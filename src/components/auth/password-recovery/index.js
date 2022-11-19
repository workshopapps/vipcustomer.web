import React from "react";
import Input from "../Input";
import Shell from "./Shell";

const index = () => {
  return (
    <Shell title="Password Recovery" buttonText="Next">
      <h3>Forgot your password?</h3>
      <div className="text">
        You can easily request your password reset below, a password reset link
        would be sent to the registered email address, kindly ensure it is
        correct.
      </div>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="JohnDoe@gmail.com"
      />
    </Shell>
  );
};

export default index;
