'use client'

import { forwardRef, useState, useEffect } from 'react';

const Statistic = forwardRef<HTMLDialogElement>((_, ref) => {

  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const subject = localStorage.getItem("disciplina");
    const topic = localStorage.getItem("tema");
    const time = localStorage.getItem("tempoEstudado");

    setSubject(subject !== null ? subject : "");
    setTopic(topic !== null ? topic : "");
    setTime(time !== null ? time : "");
  }, []);

  return (
    <>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Minhas estatísticas</h3>

          {subject === "" && topic === "" && time === "" ? (
            <div className="flex flex-col">
              <p>Você ainda não estudou nada. Que tal começar agora?</p>
            </div>
          ) : 
            <div className="flex flex-col">
              <p>Disciplina: {subject}</p>
              <p>Tema: {topic}</p>
              <p>Tempo estudado: {time}</p>
            </div>
          }

          <div className="modal-action flex flex-row justify-end">
            <button
              className="btn btn-soft"
              onClick={() => ref?.current?.close()}
            >
              Voltar
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
});

Statistic.displayName = "Statistic";

export default Statistic;
