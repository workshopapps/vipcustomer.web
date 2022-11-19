import React from "react";
import Shell from "./Shell";
import Input from "../Input";

export default function Change() {
  return (
    <Shell title="Change password" buttonText="Ready to go">
      <Input
        label="Enter new password"
        id="password"
        type="password"
        placeholder="Maximum of 8 characters"
      />
      <div style={{ marginTop: "3.2rem" }}>
        <Input
          label="Confirm the new password"
          id="new-password"
          type="password"
          placeholder="Ensure it is the same"
        />
      </div>
    </Shell>
  );
}
