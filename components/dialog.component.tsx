"use client";
import { MouseEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TooltipComment } from "@/components/tooltip.component";
import { FaEnvelope } from "react-icons/fa6";

export const ContactUsDialog = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      //   const response = await fetch("/api/email-service", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ name, email, message }),
      //   });

      //   const { success } = await response.json();

      //   if (!success) {
      //     throw new Error("Failed to send email");
      //   }

      setName("");
      setEmail("");
      setMessage("");

      setOpen(false);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <TooltipComment content="Contáctanos" side="left">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="fixed bottom-4 right-4 bg-tomato9 hover:text-tomato9 text-white border-0"
          >
            <FaEnvelope />
          </Button>
        </DialogTrigger>
      </TooltipComment>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle className="uppercase">Contáctanos</DialogTitle>
          <DialogDescription>
            Estamos aquí para servirte y brindarte la mejor asistencia posible.
            Por favor, tómate un momento para completar este formulario y
            déjanos saber cómo podemos ayudarte.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Mensaje
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={loading}>
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
