import * as React from 'react';
import { IReadingRow } from '../../interfaces/IReadingRow';

const ReadingRow: React.SFC<IReadingRow> = ({
  readingDate,
  cumulative,
  unit
}) => (
  <tr>
    <td>{readingDate}</td>
    <td>{cumulative}</td>
    <td>{unit}</td>
  </tr>
);

export default ReadingRow;
