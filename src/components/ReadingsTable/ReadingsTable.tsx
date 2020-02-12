import * as React from 'react';
import ReadingRow from '../ReadingRow/ReadingRow';
import { IReadingRow } from '../../interfaces/IReadingRow';
import * as styles from './ReadingsTable.scss';

export interface ReadingsTableProps {
  readings: IReadingRow[];
}

const ReadingsTable: React.SFC<ReadingsTableProps> = ({ readings }) => (
  <table className={styles.ReadingsTable}>
    <tbody>
      <tr>
        <th align="left">Date</th>
        <th align="left">Reading</th>
        <th align="left">Unit</th>
      </tr>
      {readings.map(reading => (
        <ReadingRow
          key={reading.readingDate}
          readingDate={reading.readingDate}
          cumulative={reading.cumulative}
          unit={reading.unit}
        />
      ))}
    </tbody>
  </table>
);

export default ReadingsTable;
