import { useState } from 'react';
import { useEncryptionService } from '../../../services';

export default function useEncryptionToolPage() {
  const [encKey, setEncKey] = useState('');
  const [encMsg, setEncMsg] = useState('');
  const [encResult, setEncResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { Encrypt } = useEncryptionService();

  const EncryptMessage = () => {
    setIsLoading(true);

    Encrypt(encMsg, encKey)
      .then((result) => {
        setEncResult(result);
      })
      .catch((err) => {
        setEncResult(`error encrypting value: ${JSON.stringify(err)}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    encKey,
    encMsg,
    encResult,
    isLoading,
    setEncKey,
    setEncMsg,
    setEncResult,
    EncryptMessage
  };
}
