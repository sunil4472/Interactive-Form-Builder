import React from 'react';
import { Bar } from 'react-chartjs-2';

function ResponseVisualization({ responses }) {
  const data = {
    labels: responses.map((_, idx) => `Response ${idx + 1}`),
    datasets: [
      {
        label: 'Responses',
        data: responses.map((response) => response.age || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
}

export default ResponseVisualization;
