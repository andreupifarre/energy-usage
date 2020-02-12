import * as React from 'react';
import useFetchData from '../../hooks/useFetchData';
import useReduceData from '../../hooks/useReduceData';
import { IReadingRow } from '../../interfaces/IReadingRow';
import { IUsageRow } from '../../interfaces/IUsageRow';
import ReadingsTable from '../ReadingsTable/ReadingsTable';
import UsageChart from '../UsageChart/UsageChart';
import * as styles from './App.scss';

const App = () => {
  const readings: IReadingRow[] = useFetchData();
  const usage: IUsageRow[] = useReduceData(readings);

  return (
    <div className={styles.App}>
      <h2>Energy Usage</h2>
      <UsageChart usage={usage} />
      <h2>Meter Readings</h2>
      <ReadingsTable readings={readings} />
    </div>
  );
};

export default App;
