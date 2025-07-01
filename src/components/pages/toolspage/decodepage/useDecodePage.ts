import { useState } from 'react';
import { useCommonHook } from '../../../../hooks/common.hook';

export default function useDecodePage() {
  const { cryptoShift, getURLParamByKey } = useCommonHook();
  const paramCipher = getURLParamByKey('cipher');
  const paramShift = getURLParamByKey('shift');
  const shift: number = !!paramShift === true ? parseInt(paramShift) : -5;
  const [valueToDecode, setValueToDecode] = useState(paramCipher);
  const [decodedValue, setDecodedValue] = useState('');

  const decodeValue = () => {
    const shiftedValue = cryptoShift(valueToDecode, shift);
    const value = atob(shiftedValue);

    setDecodedValue(value);
  };

  return {
    valueToDecode,
    decodedValue,
    setValueToDecode,
    decodeValue
  };
}
