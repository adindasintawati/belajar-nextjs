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
      <p className="text-sm text-center mt-2">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:text-blue-700">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
