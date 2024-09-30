import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <form className="flex flex-col gap-4">
      <InputForm
        label="Username"
        name="email"
        type="email"
        placeholder="Masukkan email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
      />
      <Button color={"bg-blue-500 hover:bg-blue-700"} size={"w-full"}>
        Login
      </Button>
    </form>
  );
};

export default Login;
