import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import type { RegisterRequest } from "../types/auth";

const RegisterPage = () => {
  const { register: registerUser } =
    useAuth();

  const navigate = useNavigate();

  const [serverError, setServerError] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } =
    useForm<RegisterRequest>();

  const onSubmit = async (
    data: RegisterRequest
  ) => {
    try {
      setServerError("");

      await registerUser(data);

      navigate("/login");
    } catch (error: any) {
      setServerError(
        error?.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Register
        </h1>

        {serverError && (
          <p className="mb-4 text-red-600">
            {serverError}
          </p>
        )}

        <div className="mb-4">
          <label>Name</label>

          <input
            className="mt-1 w-full rounded border p-2"
            {...register("name", {
              required:
                "Name is required",
            })}
          />

          <p className="text-red-500">
            {errors.name?.message}
          </p>
        </div>

        <div className="mb-4">
          <label>Email</label>

          <input
            type="email"
            className="mt-1 w-full rounded border p-2"
            {...register("email", {
              required:
                "Email is required",
            })}
          />

          <p className="text-red-500">
            {errors.email?.message}
          </p>
        </div>

        <div className="mb-6">
          <label>Password</label>

          <input
            type="password"
            className="mt-1 w-full rounded border p-2"
            {...register("password", {
              required:
                "Password is required",
            })}
          />

          <p className="text-red-500">
            {errors.password?.message}
          </p>
        </div>

        <button
          disabled={isSubmitting}
          className="w-full rounded bg-green-600 py-2 text-white"
        >
          {isSubmitting
            ? "Creating..."
            : "Create Account"}
        </button>

        <p className="mt-6 text-center">
          Already have an account?

          <Link
            className="ml-2 text-blue-600"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;