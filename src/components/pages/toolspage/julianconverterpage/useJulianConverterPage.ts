import { useState } from 'react';

export default function useJulianConverterPage() {
  const [convertType, setConvertType] = useState<'julian' | 'regular'>('julian');
  const [julianDateValue, setJulianDateValue] = useState('');
  const [regularDateValue, setRegularDateValue] = useState(new Date());

  const computeJulianDateValue = () => {
    const year = regularDateValue.getFullYear();
    let runningJDate = year * 1000 + regularDateValue.getDate();

    for (let month = 0; month < regularDateValue.getMonth(); month++) {
      const monthDays = new Date(year, month + 1, 0).getDate();
      runningJDate += monthDays;
    }

    setJulianDateValue(`${runningJDate}`);
  };

  const computeRegularDateValue = () => {
    const intJDate = parseInt(julianDateValue);
    console.log(`PETE! intJDate: ${intJDate}`);
    const year = Math.round(intJDate / 1000);
    console.log(`PETE! year: ${year}`);
    let runningJDate = intJDate % 1000;
    console.log(`PETE! runningJDate: ${runningJDate}`);
    let month = 0;
    let monthDays = 0;

    while (runningJDate > monthDays) {
      monthDays = new Date(year, month + 1, 0).getDate();
      runningJDate -= monthDays;
      month++;
    }

    setRegularDateValue(new Date(year, month, runningJDate));
  };

  return {
    convertType,
    julianDateValue,
    regularDateValue,
    setConvertType,
    setJulianDateValue,
    setRegularDateValue,
    computeJulianDateValue,
    computeRegularDateValue
  };
}
