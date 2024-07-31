"use client"

import { FormEvent } from "react";

export default function SignUp() {

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = new FormData(event.currentTarget)
  }

  return (
    <main className="flex w-full flex-col items-center justify-center h-screen">
      <form className="flex max-w-3xl w-full flex-col gap-2 px-6" onSubmit={onSubmit}>
          <label>Nome completo</label>
          <input type="text" className="text-black px-2" />
          <label>E-mail</label>
          <input type="email" className="text-black px-2" />
          <label>Telefone</label>
          <input type="tel" className="text-black px-2" />
          <label>CPF</label>
          <input type="text" className="text-black px-2" />
          <div className="w-full flex gap-2">
            <button type="button" className="w-full p-2 bg-white text-black rounded-lg mt-4">Voltar</button>
            <button type="submit" className="w-full p-2 bg-primary text-background rounded-lg mt-4">Cadastrar</button>
          </div>
      </form>
    </main>
  );
}
