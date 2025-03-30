import { Pie } from 'react-chartjs-2';
import formatTime from '@/utils/FormatTime';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  topics: string[];
  times: number[];
}

export default function PieChart({ topics, times }: PieChartProps) {

  const labels = topics.map((label: string, index: number): string =>
    `${label} (${formatTime(times[index], false)})`
  );

  const datasets = [
    {
      // label: labels.join(', '),
      data: times,
      backgroundColor: ['#830c41', '#ff8904', '#fdc700'],
      borderColor: ['#830c41', '#ff8904', '#fdc700'],
      borderWidth: 1,
    },
  ];

  const data = {
    labels: labels, 
    datasets: datasets, 
  };

  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          color: '#793205', 
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options}/>;
};

