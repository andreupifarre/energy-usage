import * as React from 'react';
import { shallow } from 'enzyme';
import ReadingRow from './ReadingRow';
import { IReadingRow } from '../../interfaces/IReadingRow';

const render = props => shallow(<ReadingRow {...props} />);

describe('ReadingRow', () => {
  it('should match the props values passed with the value rendered for each column', () => {
    const reading: IReadingRow = {
      readingDate: '2017-03-28T00:00:00.000Z',
      cumulative: 17580,
      unit: 'kWh'
    };

    const cols = render(reading).find('td');
    const newCols = cols.map(col => col.text());
    const newReading = Object.keys(reading).map(key => `${reading[key]}`);

    expect(newCols).toEqual(newReading);
  });

  it('should render correctly', () => {
    const reading: IReadingRow = {
      readingDate: '2017-03-28T00:00:00.000Z',
      cumulative: 17580,
      unit: 'kWh'
    };

    expect(render(reading).getElements()).toMatchSnapshot();
  });
});
