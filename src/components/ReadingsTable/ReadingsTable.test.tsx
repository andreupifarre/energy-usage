import * as React from 'react';
import { shallow } from 'enzyme';
import ReadingsTable from './ReadingsTable';
import { IReadingRow } from '../../interfaces/IReadingRow';

const render = readings => shallow(<ReadingsTable readings={readings} />);
const readings: IReadingRow[] = [
  {
    cumulative: 17580,
    readingDate: '2017-03-28T00:00:00.000Z',
    unit: 'kWh'
  },
  {
    cumulative: 17759,
    readingDate: '2017-04-15T00:00:00.000Z',
    unit: 'kWh'
  },
  {
    cumulative: 18002,
    readingDate: '2017-05-08T00:00:00.000Z',
    unit: 'kWh'
  }
];

describe('ReadingsTable', () => {
  it('should match number of props object pass with number of ReadingRow rendered', () => {
    const elements = render(readings).find('ReadingRow');

    expect(elements.length).toEqual(readings.length);
  });

  it('should render the correct set of prperties for each ReadingRow', () => {
    const rows = render(readings).find('ReadingRow');
    const newRows: IReadingRow[] = rows.map(row => row.props());

    expect(newRows).toEqual(readings);
  });

  it('should render correctly', () => {
    expect(render(readings).getElements()).toMatchSnapshot();
  });
});
