import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { IReadingRow } from '../../interfaces/IReadingRow';
import { IUsageRow } from '../../interfaces/IUsageRow';
import * as useReduceData from '../../hooks/useReduceData';
import * as useFetchData from '../../hooks/useFetchData';

jest.mock('../../hooks/useReduceData');
jest.mock('../../hooks/useFetchData');

const mockUseReduceData = jest.spyOn(useReduceData, 'default');
const mockUseFetchData = jest.spyOn(useFetchData, 'default');

const wrapper = () => shallow(<App />);

describe('App', () => {
  it('should render without crashing', () => {
    const fetchedData: IReadingRow[] = [
      {
        cumulative: 17580,
        readingDate: '2017-03-28T00:00:00.000Z',
        unit: 'kWh'
      }
    ];

    const reducedData: IUsageRow[] = [
      {
        date: 'March-2017',
        energyUsage: 17580
      }
    ];

    mockUseFetchData.mockReturnValue(fetchedData);
    mockUseReduceData.mockReturnValue(reducedData);

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly', () => {
    expect(wrapper().getElements()).toMatchSnapshot();
  });
});
