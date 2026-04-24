import {
    Chart as ChartJS,
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);

export const skillsData = {
    labels: [
        'Typescript',
        'C++',
        'Python',
        'Java',
        'Golang',
        'CSS'
    ],
    datasets: [{
        data: [80, 75, 60, 65, 65, 50],
        pointBorderColor: '#219bef',
        pointBackgroundColor: '#219bef',
        borderColor: '#219bef',
        backgroundColor: 'rgba(59, 156, 235, 0.32)',
        lineWidth: 6,
        fill: true,

    }]
};

export const toolsData = {
  labels: [
      ['Google', 'Cloud', 'Platform'],
      'GraphQL',
      ['Unreal', 'Engine'],
      ['Unity', 'Engine'],
      'Kubernetes'
  ],
  datasets: [{
      data: [80, 70, 65, 50, 50],
      pointBorderColor: '#f7d51d',
      pointBackgroundColor: '#f7d51d',
      borderColor: '#f7d51d',
      backgroundColor: 'rgba(247, 213, 29, 0.32)',
      lineWidth: 6,
      fill: true,

  }]
};


export const options = {
    scales: {
      r: {
        min: 0,
        max: 100,
        grid: {
          color: (context) =>
            context.tick.value === context.scale.max ? '#4f4f4f' : 'rgba(0, 0, 0, 0)',
          lineWidth: (context) =>
            context.tick.value === context.scale.max ? 6 : 0,
        },
        pointLabels: {
          color: '#000000',
          font: {
            family: "'Press Start 2P", // Retro font
            size: 20,
            color: '#000000',
          }
        },
        ticks: {
          display: false,
        },
        angleLines: {
            lineWidth: 6,
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        bodyFont: {
            family: "'Press Start 2P'", // Retro font
            size: 10,
        },
        titleFont: {
            size: 12,
            family: "'Press Start 2P'", // Retro font
        }
      }
    }
};

export const toolsOptions = {
    ...options,
    scales: {
        ...options.scales,
        r: {
            ...options.scales.r,
            pointLabels: {
                ...options.scales.r.pointLabels,
                padding: 4,
                font: {
                    ...options.scales.r.pointLabels.font,
                    size: 14,
                    lineHeight: 1.1,
                }
            }
        }
    }
};

export function radarDisplay(chartData, chartOptions = options) {
    return <Radar data={chartData} options={chartOptions} />;
}
