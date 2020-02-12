import * as React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { IUsageRow } from '../../interfaces/IUsageRow';

export interface UsageChartProps {
  usage: IUsageRow[];
}

const UsageChart: React.SFC<UsageChartProps> = ({ usage }) => (
  <BarChart width={1400} height={400} data={usage}>
    <XAxis dataKey="date" />
    <YAxis dataKey="energyUsage" />
    <CartesianGrid horizontal={true} />
    <Tooltip />
    <Bar dataKey="energyUsage" fill="#03ad54" isAnimationActive={false} />
  </BarChart>
);

export default UsageChart;
