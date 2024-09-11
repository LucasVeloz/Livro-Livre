"use client"

import { FormEvent, useState } from "react";
import Image from "next/image";
import logo from '@/public/assets/images/logo.png';
import { KohaApi } from "@/services";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [cpf, setCpf] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }


  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const tel = (form.elements.namedItem('tel') as HTMLInputElement).value;
    const cpf = (form.elements.namedItem('cpf') as HTMLInputElement).value;
    try {

      const response = await KohaApi.user.signUp({
        surname: name,
        email,
        phone: tel,
        category_id: 'Staff',
        library_id: 'Unb',
      })

    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        console.log(e.code, e.response)
      }
    }
  }

  return (
    <main className="flex w-full flex-col items-center justify-center h-screen">
      <Image src={logo} alt="UnB logo" className="mb-10 max-w-full w-96 px-6" />
      <form className="flex max-w-3xl w-full flex-col gap-2 px-6" onSubmit={onSubmit}>
          <label>Nome completo</label>
          <input id="name" type="text" className="text-black px-2 py-1 rounded-md" />
          <label>E-mail</label>
          <input id="email" type="email" className="text-black px-2 py-1 rounded-md" />
          <label>Telefone</label>
          <input id="tel" type="tel" className="text-black px-2 py-1 rounded-md" onChange={e => setPhoneNumber(formatPhoneNumber(e.target.value))} value={phoneNumber} />
          <label>CPF</label>
          <input id="cpf" type="text" className="text-black px-2 py-1 rounded-md" onChange={e => setCpf(cpfMask(e.target.value))} value={cpf} />
          <div className="w-full flex gap-2">
            <button
              type="button"
              onClick={router.back}
              className="w-full p-2 bg-white text-black rounded-lg mt-4"
            >
              Voltar
            </button>
            <button type="submit" className="w-full p-2 bg-primary text-background rounded-lg mt-4">Cadastrar</button>
          </div>
      </form>
    </main>
  );
}
