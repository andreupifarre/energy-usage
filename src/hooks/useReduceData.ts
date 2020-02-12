import * as moment from 'moment';
import { IReadingRow } from '../interfaces/IReadingRow';
import { IUsageRow } from '../interfaces/IUsageRow';

const useReduceData = (readings: IReadingRow[]) => {
  const energyUsageData: IUsageRow[] = [];

  const lerp = (x0, x1, y0, y1) => {
    var slope = (y1 - y0) / (x1 - x0);
    return x => (x - x0) * slope + y0;
  };

  let prevMonth = 0;
  for (let i = 1; i < readings.length - 1; i++) {
    const x0 = moment(readings[i - 1].readingDate).date() + 31 * (i - 1);
    const x1 = moment(readings[i].readingDate).date() + 31 * i;
    const y0 = readings[i - 1].cumulative;
    const y1 = readings[i].cumulative;

    const endMonthReadings = lerp(x0, x1, y0, y1)(31 * i);
    const energyUsage = parseFloat((endMonthReadings - prevMonth).toFixed(2));

    if (i === 1) {
      prevMonth = endMonthReadings;
      continue;
    }

    const month = energyUsageData.push({
      date: moment(readings[i].readingDate).format('MMMM-YYYY') + '',
      energyUsage: energyUsage
    });

    prevMonth = endMonthReadings;
  }

  return energyUsageData;
};

export default useReduceData;
