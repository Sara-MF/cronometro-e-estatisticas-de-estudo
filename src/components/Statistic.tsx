'use client'

import { useState, useEffect } from 'react';

type StatisticProps = {
  studyTime: Array<StudyInfo>;
  ref: React.Ref<HTMLDialogElement>;
};

export interface StudyInfo {
  disciplina: string;
  tema: string;
  tempoEstudado: number
}

export default function Statistic({ studyTime, ref }: StatisticProps) {

  const [subjectStatistics, setSubjectStatistics] = useState<Array<StudyInfo>>([]);

  useEffect(() => {

    const studyStatistics = JSON.parse(localStorage.getItem("estatisticaEstudo") ?? "[]") as Array<StudyInfo>;
    
    if(studyStatistics.length > 0) {

      const checkStudyStatistics: Array<StudyInfo> = studyStatistics.reduce((aux: Array<StudyInfo>, current: StudyInfo) => {

        const isInSubjectStatistics = aux.find(item => item.disciplina === current.disciplina && item.tema === current.tema)

        if (isInSubjectStatistics) {
          isInSubjectStatistics.tempoEstudado += current.tempoEstudado;
        } else {
          aux.push({...current})
        }
        return aux;
      }
      , []).sort((a, b) => {
        return b.tempoEstudado - a.tempoEstudado
      })

      setSubjectStatistics(checkStudyStatistics);

    }

  }, [studyTime]);

  return (
    <>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg pb-2">Minhas estatísticas</h3>

          {subjectStatistics.length === 0 ? (
            <div className="flex flex-col">
              <p>Você ainda não estudou nada. Que tal começar agora?</p>
            </div>
          ) : 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {subjectStatistics.map((item, index) => {
                  return (
                    <div className="flex flex-col border-2 rounded border-base-300 p-2" key={index}>
                      <p>Disciplina: {item.disciplina}</p>
                      <p>Tema: {item.tema}</p>
                      <p>Tempo estudado: {item.tempoEstudado}</p>
                    </div>
                  )
              })}
            </div>
          }

          <div className="modal-action flex flex-row justify-end">
            <button
              className="btn btn-soft"
              onClick={() => {if(typeof ref !== 'function') ref?.current?.close()}}
            >
              Fechar
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}