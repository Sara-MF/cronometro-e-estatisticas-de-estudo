'use client'

import Button from '@/components/Button';
import { useRef, useEffect } from 'react';

type TimerProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  running: boolean;
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Timer({ time, setTime, running, setRunning }: TimerProps) {

  // Modal
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    modalRef.current?.showModal();
  };

  // Contador
  useEffect(() => {
    let timer : NodeJS.Timeout;
    if (running) {
      timer  = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTimer = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      <h1 id="timer" className="text-6xl">{formatTimer(time)}</h1>

      <div className="flex justify-evenly w-full">

        {!running ? (
          <Button name="Iniciar" color="btn-success" onClick={() => setRunning(!running)} />
        ) : (
          <Button name="Pausar" color="btn-accent" onClick={() => setRunning(!running)} />
        )}

        <Button name="Resetar" color="btn-error" onClick={() => { setTime(0); setRunning(false); }} ></Button>
        <Button name="Salvar tempo" color="btn-success" onClick={showModal} ></Button>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Encerrar contador</h3>
          <p className="py-4">Tem certeza que deseja encerrar o contador?</p>
          <div className="modal-action flex flex-row justify-end">
            {/* <form method="dialog"> */}
              <button className="btn btn-success" onClick={() => modalRef.current?.close()}>Encerrar</button>
              <button className="btn btn-warning" onClick={() => modalRef.current?.close()}>Voltar</button>
            {/* </form> */}
          </div>
        </div>
      </dialog>

    </div>

  )
}
