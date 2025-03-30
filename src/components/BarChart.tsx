import { Bar } from 'react-chartjs-2';
import formatTime from '@/utils/FormatTime';
import { TopicBySubjects } from './Statistic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type BarChartProps = {
  topicsBySubjects: TopicBySubjects;
}

export default function BarChart({ topicsBySubjects }: BarChartProps) {

  const subjectLabels = Object.keys(topicsBySubjects).map(
    (key) => `${key} (${formatTime(topicsBySubjects[key].totalStudyTime, false)})`
  )
  
  const timesBySubject = Object.keys(topicsBySubjects).map(
    (key) => topicsBySubjects[key].totalStudyTime
  );
  
  const data = {
    labels: subjectLabels,
    datasets: [
      {
        data: timesBySubject, 
        backgroundColor: ['#00776f', '#d08700', '#801518', '#0082ce', '#56524c'], 
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'bar'>) => {
            const subject = data.labels[tooltipItem.dataIndex]; 
            return subject;
          },
        },
      },
    },
  }

  return <Bar data={data} options={options} />;
};