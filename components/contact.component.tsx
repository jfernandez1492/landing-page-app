"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { pathBuilder } from "../helpers";
import { SocialNetwork } from "./social.component";

export const Contact = () => {
  return (
    <div className="flex flex-col md:gap-10 items-center md:pt-8 w-full">
      <p className="text-xs md:text-lg text-center max-w-[840px] md:bg-slate-400 md:bg-opacity-15 p-8 md:p-4 rounded-3xl">
        Estamos aquí para servirte y brindarte la mejor asistencia posible. Por
        favor, tómate un momento para completar este formulario y déjanos saber
        cómo podemos ayudarte.
      </p>
      <div className="block md:flex justify-center items-center md:gap-24 w-screen md:w-full px-6">
        <ContactForm />
        <img
          src={pathBuilder("/CEOTECH/GENERATED/Designer-25.jpeg")}
          alt="logo"
          className="w-[450px] rounded-full md:block hidden"
        />
      </div>
    </div>
  );
};

const ContactForm = () => (
  <Form.Root className="flex flex-col md:gap-5 md:max-w-[680px] ">
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Email
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Un email es requerido
        </Form.Message>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Un email válido es requerido
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-mauve3 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="name">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Nombre
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Su nombre es requerido
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-mauve3 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type="name"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="question">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
          Mensaje
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white opacity-[0.8]"
          match="valueMissing"
        >
          Deje su mensaje
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="leading-7 box-border w-full bg-mauve3 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
          rows={3}
          required
        />
      </Form.Control>
    </Form.Field>
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <Form.Submit asChild>
        <button className="box-border w-full text-white shadow-blackA4 hover:bg-white hover:text-tomato9 inline-flex h-[35px] md:max-w-48 items-center justify-center rounded-[4px] bg-tomato9 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Enviar
        </button>
      </Form.Submit>
      <SocialNetwork />
    </div>
  </Form.Root>
);
