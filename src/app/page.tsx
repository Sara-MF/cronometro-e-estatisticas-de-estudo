'use client'

import Select from '@/components/Select';
import Timer from '@/components/Timer';
import { useState } from 'react';

export default function Home() {

  const [subject, setSubject] = useState("");

  const subjectTopics: Record<string, string[]> = {
    Português:  ["Gramática", "Literatura", "Redação"],
    História:   ["Idade Média", "Brasil Colônia", "Revolução Francesa"],
    Ciências:   ["Biologia", "Física", "Química"],
    Geografia:  ["Climatologia", "Geopolítica", "Cartografia"],
    Matemática: ["Álgebra", "Geometria", "Probabilidade"],
  }

  return (
    <div className="lg:w-1/3 flex flex-col gap-12 p-6 rounded-lg shadow-lg bg-base-300">

      <div className="w-full flex flex-row justify-between gap-4">
        <Select type="disciplina" onChange={(value) => setSubject(value)}/>

        <Select type="tema" options={subjectTopics[subject] || ["Selecione um tema"]} disabled={!subject} />
      </div>

      <Timer/>

    </div>
  );
}
