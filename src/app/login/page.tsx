"use client";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import Footer from "../components/auth/Footer";

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
      <Footer />
    </AuthLayout>
  );
};

export default LoginPage;
