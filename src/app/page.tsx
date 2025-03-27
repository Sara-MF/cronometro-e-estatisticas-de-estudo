'use client'

import Select from '@/components/Select';
import Timer from '@/components/Timer';
import Statistic from '@/components/Statistic';
import { useState, useRef, useEffect } from 'react';

export default function Home() {

  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");

  const subjectTopics: Record<string, string[]> = {
    Português:  ["Gramática", "Literatura", "Redação"],
    História:   ["Idade Média", "Brasil Colônia", "Revolução Francesa"],
    Ciências:   ["Biologia", "Física", "Química"],
    Geografia:  ["Climatologia", "Geopolítica", "Cartografia"],
    Matemática: ["Álgebra", "Geometria", "Probabilidade"],
  }

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const statisticModalRef = useRef<HTMLDialogElement>(null);

  const openStatistics = () => {
    statisticModalRef.current?.showModal();
  }

  useEffect(() => {
    if (subject) {
      const firstTopic = subjectTopics[subject]?.[0] || "Selecione um tema";
      setTopic(firstTopic);
    } else {
      setTopic("");
    }
  }, [subject, subjectTopics]);

  return (

    <>
      <h1 className="font-bold border-b cursor-pointer fixed top-0 right-0 m-4" onClick={openStatistics}>Estatísticas</h1>

      <Statistic ref={statisticModalRef} />

      <div className="lg:w-1/3 flex flex-col gap-12 p-6 rounded-lg shadow-lg bg-base-300">

        <div className="w-full flex flex-row justify-between gap-4">
          <Select type="subject" onChange={(value) => setSubject(value)} disabled={time > 0 || running}/>

          <Select type="topic" id="selectTopicId" onChange={(value) => setTopic(value)} options={subjectTopics[subject] || ["Selecione um tema"]} disabled={!subject || time > 0 || running} />
        </div>

        <Timer time={time} setTime={setTime} running={running} setRunning={setRunning} subject={subject} topic={topic} />

      </div>
    </>

  );
}
