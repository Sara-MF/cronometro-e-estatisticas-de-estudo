'use client'

import { useState, useEffect } from 'react';
import formatTime from '@/utils/FormatTime';
import dynamic from 'next/dynamic';

type StatisticProps = {
  studyTime: Array<StudyInfo>;
  ref: React.Ref<HTMLDialogElement>;
};

export interface StudyInfo {
  disciplina: string;
  tema: string;
  tempoEstudado: number
}

export interface TopicBySubjects {
  [subject: string]: {
    topics: string[];
    times: number[];
    totalStudyTime: number;
  }
}

export default function Statistic({ studyTime, ref }: StatisticProps) {

  const [subjectStatistics, setSubjectStatistics] = useState<Array<StudyInfo>>([]);

  const [topicsBySubjects, setTopicsBySubjects] = useState<TopicBySubjects>({});

  const PieChart = dynamic(() => import('./PieChart'), { ssr: false });

  const BarChart = dynamic(() => import('./BarChart'), { ssr: false });

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

  useEffect(() => {

    if(subjectStatistics.length > 0) {

      const topicsBySubjects: TopicBySubjects = subjectStatistics.reduce((aux: TopicBySubjects, current: StudyInfo) => {

        const { disciplina, tema, tempoEstudado } = current;

        if (!aux.hasOwnProperty(disciplina)) {
          aux[disciplina] = {topics: [], times: [], totalStudyTime: 0};
        }

        aux[disciplina].topics.push(tema);
        aux[disciplina].times.push(tempoEstudado);
        aux[disciplina].totalStudyTime += tempoEstudado;

        return aux;
      }, {} as TopicBySubjects)

      setTopicsBySubjects(topicsBySubjects);
    }

  }, [subjectStatistics]);

  console.log("topicsBySubjects", topicsBySubjects)

  return (
    <>
      <dialog ref={ref} className="modal bg-base-100">
        <div className="modal-box lg:w-1/2 lg:max-w-4xl max-h-5/6">
          <h3 className="font-bold text-lg pb-6">Minhas estatísticas</h3>

          {Object.keys(topicsBySubjects).length !== 0 &&
            <div className="mb-6">
              <BarChart topicsBySubjects={topicsBySubjects} />
            </div>
          }

          {subjectStatistics.length === 0 ? (
            <div className="flex flex-col">
              <p>Você ainda não estudou nada. Que tal começar agora?</p>
            </div>
          ) : 

            <div className="flex flex-col md:flex-wrap md:flex-row gap-6 justify-center max-w-2xl">

              {Object.entries(topicsBySubjects).map(([subject, topicsByTime]) => (
                <div className="flex flex-col border-2 rounded bg-base-200 border-base-300 p-2 gap-3 lg:max-w-1/2" key={subject}>
                  <p className="font-bold text-center">{subject} ({formatTime(topicsByTime.totalStudyTime, false)})</p>

                  <PieChart topics={topicsByTime.topics} times={topicsByTime.times} />
                </div>
              ))}

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