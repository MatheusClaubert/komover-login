"use client";
import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo com a imagem (apenas em telas maiores que 768px) */}
      <div className="w-1/2 hidden lg:flex items-center justify-center bg-white p-6">
        <Image
          src="/images/fisio-login.png"
          alt="Ilustração de uma fisioterapeuta com um paciente"
          width={850}
          height={750}
          priority
        />
      </div>

      {/* Lado direito com estrutura organizada */}
      <div className="w-full lg:w-1/2 flex flex-col bg-primary text-[#003610] p-8 bg-[#5CE5A9] h-full">
        <div className="w-full flex flex-col flex-1 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
