import { useEffect, useState } from 'react';
import { useCommonHook } from '../../../../hooks/common.hook';

export default function useDecodePage() {
  const { cryptoShift, getURLParams } = useCommonHook();
  const [valueToDecode, setValueToDecode] = useState('');
  const [decodedValue, setDecodedValue] = useState('');

  const decodeValue = () => {
    const shiftedValue = cryptoShift(valueToDecode, -5);
    const value = atob(shiftedValue);

    setDecodedValue(value);
  };

  useEffect(() => {
    const params = getURLParams();
    if (params.has('cipher')) {
      setValueToDecode(params.get('cipher') ?? '');
    }
  }, [getURLParams]);

  return {
    valueToDecode,
    decodedValue,
    setValueToDecode,
    decodeValue
  };
}
