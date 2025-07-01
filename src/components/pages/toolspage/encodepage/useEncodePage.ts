import { useState } from 'react';
import { useCommonHook } from '../../../../hooks/common.hook';
import { useHref } from 'react-router-dom';

export default function useEncodePage() {
  const { cryptoShift, getURLParamByKey } = useCommonHook();
  const paramMsg = getURLParamByKey('msg');
  const paramShift = getURLParamByKey('shift');
  const shift: number = !!paramShift === true ? parseInt(paramShift) : 5;
  const [valueToEncode, setValueToEncode] = useState(paramMsg);
  const [encodedValue, setEncodedValue] = useState('');
  const [decodeURL, setDecodeURL] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const decodePath = useHref('/tools/decode?cipher=', { relative: 'path' });

  const encodeValue = () => {
    const value = btoa(valueToEncode);
    const shiftedValue = cryptoShift(value, shift);

    setEncodedValue(shiftedValue);
    setDecodeURL(`${window.location.host}/${decodePath}${encodeURI(shiftedValue)}`);
  };

  return {
    valueToEncode,
    encodedValue,
    decodeURL,
    isCopied,
    setValueToEncode,
    setIsCopied,
    encodeValue
  };
}
