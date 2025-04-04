'use client'

import Select from '@/components/Select';
import Timer from '@/components/Timer';
import Statistic, { StudyInfo } from '@/components/Statistic';
import formatTime from '@/utils/FormatTime';
import { useState, useRef, useEffect } from 'react';

export default function Home() {

  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const statisticModalRef = useRef<HTMLDialogElement>(null);

  const openStatistics = () => {
    statisticModalRef.current?.showModal();
  }

  const subjectTopics: Record<string, string[]> = {
    Português:  ["Gramática", "Literatura", "Redação"],
    História:   ["Idade Média", "Brasil Colônia", "Revolução Francesa"],
    Ciências:   ["Biologia", "Física", "Química"],
    Geografia:  ["Climatologia", "Geopolítica", "Cartografia"],
    Matemática: ["Álgebra", "Geometria", "Probabilidade"],
  }

  const [studyTime, setStudyTime] = useState<Array<StudyInfo>>([]);

  useEffect(() => {
    if(running && time > 0) {
      document.title = `Estudando [${formatTime(time, true)}]`
    } else if (!running && time > 0) {
      document.title = `Em pausa [${formatTime(time, true)}]`
    } else {
      document.title = "Meus estudos"
    }
  }, [running, time])

  useEffect(() => {
    localStorage.setItem('estatisticaEstudo', '[]');
  }, [])

  return (

    <>
      <h1 className="font-bold border-b cursor-pointer fixed top-0 right-0 m-4" onClick={openStatistics}>Estatísticas</h1>

      <Statistic ref={statisticModalRef} studyTime={studyTime} />

      <div className="lg:w-1/3 flex flex-col gap-12 p-6 rounded-lg shadow-lg bg-base-300">

        <div className="w-full flex flex-row justify-between gap-4">
          <Select type="subject" onChange={(value) => {
            setSubject(value)
            setTopic(subjectTopics[value][0])
          }} disabled={time > 0 || running} selected={subject} 
            options={Object.keys(subjectTopics)}
          />

          <Select type="topic" id="selectTopicId" onChange={(value) => setTopic(value)} 
            options={subjectTopics[subject]} 
            disabled={!subject || time > 0 || running} selected={topic}
          />
        </div>

        <Timer time={time} setTime={setTime} running={running} setRunning={setRunning} 
          subject={subject} topic={topic} studyTime={studyTime} setStudyTime={setStudyTime} 
        />

      </div>
    </>

  );
}
