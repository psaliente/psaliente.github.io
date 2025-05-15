import { useEffect, useState } from 'react';
import { useCommonHook } from '../../../../hooks/common.hook';

export default function useEncodePage() {
  const { cryptoShift, getURLParams } = useCommonHook();
  const [valueToEncode, setValueToEncode] = useState('');
  const [encodedValue, setEncodedValue] = useState('');
  const [decodeURL, setDecodeURL] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const encodeValue = () => {
    const value = btoa(valueToEncode);
    const shiftedValue = cryptoShift(value, 5);

    setEncodedValue(shiftedValue);
    setDecodeURL(`https://psaliente.github.io/tools/decode?cipher=${encodeURI(shiftedValue)}`);
  };

  useEffect(() => {
    const params = getURLParams();
    if (params.has('msg')) {
      setValueToEncode(params.get('msg') ?? '');
    }
  }, [getURLParams]);

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
