import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import type { LoginRequest } from "../types/auth";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequest>();

  const onSubmit = async (data: LoginRequest) => {
    try {
      setServerError("");

      await login(data);

      navigate("/dashboard");
    } catch (error: any) {
      setServerError(
        error?.response?.data?.message ||
          "Login failed"
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
          Login
        </h1>

        {serverError && (
          <p className="mb-4 text-red-600">
            {serverError}
          </p>
        )}

        <div className="mb-4">
          <label>Email</label>

          <input
            type="email"
            className="mt-1 w-full rounded border p-2"
            {...register("email", {
              required: "Email is required",
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
          className="w-full rounded bg-blue-600 py-2 text-white"
        >
          {isSubmitting
            ? "Logging in..."
            : "Login"}
        </button>

        <p className="mt-6 text-center">
          Don't have an account?

          <Link
            className="ml-2 text-blue-600"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;