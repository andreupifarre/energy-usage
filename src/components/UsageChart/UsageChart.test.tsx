import * as React from 'react';
import { shallow } from 'enzyme';
import UsageChart from './UsageChart';
import { IUsageRow } from '../../interfaces/IUsageRow';

const render = usage => shallow(<UsageChart usage={usage} />);
const usage: IUsageRow[] = [
  {
    date: 'March-2017',
    energyUsage: 17580
  },
  {
    energyUsage: 17759,
    date: 'April-2017'
  },
  {
    energyUsage: 18002,
    date: 'May-2027'
  }
];

describe('UsageCharts', () => {
  it('should render the correct properties in BarChart', () => {
    const element = render(usage).find('BarChart');

    expect(element.prop('data')).toEqual(usage);
  });

  it('should render correctly', () => {
    expect(render(usage).getElements()).toMatchSnapshot();
  });
});
