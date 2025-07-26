import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ReactFormTutorial() {
  //we will use this yup schema
  //this schema will generate a shape of how the form should look like
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    age: yup.number().positive().integer().required("Age is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // handleSubmit is a function provided by react-hook-form to handle stuffs prior to submitting
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // yupResolver is used to integrate yup with react-hook-form
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // data param will be provided by the handleSubmit function
    // it will contain all the values of the inputs that are registered
    console.log(data);
  };

  return (
    // basically it will go through both the functions while submitting the form
    // handleSubmit will call the onSubmit function if everything is fine
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* The register is like the name property in the input
        this register will work as a key to the value that will be there for this input */}
      <input type="text" placeholder="Enter name" {...register("fullName")} />
      {/* To show the erros */}
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Enter email" {...register("email")} />
      <input type="number" placeholder="Enter age" {...register("age")} />
      <input
        type="password"
        placeholder="Enter password"
        {...register("password")}
      />
      <input
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword")}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ReactFormTutorial;
