'use client'

import Button from '@/components/Button';

export default function Timer() {

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      <h1 className="text-6xl">00:00</h1>

      <div className="flex justify-evenly w-full">
        <Button name="Iniciar" color="btn-success"></Button>
        <Button name="Pausar" color="btn-accent"></Button>
        <Button name="Resetar" color="btn-error"></Button>
        <Button name="Salvar" color="btn-success" ></Button>
      </div>

    </div>

  )
}
