import { useState } from 'react';
import { useCommonHook } from '../../../../hooks/common.hook';

export default function useDecodePage() {
  const { cryptoShift, getURLParamByKey } = useCommonHook();
  const paramCipher = getURLParamByKey('cipher');
  const [valueToDecode, setValueToDecode] = useState(paramCipher);
  const [decodedValue, setDecodedValue] = useState('');

  const decodeValue = () => {
    const shiftedValue = cryptoShift(valueToDecode, -5);
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
