import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
function MyChart({doneTask ,inProgress}) {
 const data = {
        labels: ['Done', 'In progress' ],
        datasets: [
          {
            label: '# of Votes',
            data: [doneTask, inProgress],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              
              
            ],
            borderWidth: 1,
          },
        ],
      };
  return <Pie data={data} />;
}

export default MyChart;
