import { useState } from 'react';
import { useEncryptionService } from '../../../../services';

export default function useDecryptionToolPage() {
  const [decKey, setDecKey] = useState('');
  const [decMsg, setDecMsg] = useState('');
  const [decResult, setDecResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { Decrypt } = useEncryptionService();

  const DecryptMessage = () => {
    setIsLoading(true);

    Decrypt(decMsg, decKey)
      .then((result) => {
        setDecResult(result);
      })
      .catch((err) => {
        setDecResult(`error decrypting value: ${JSON.stringify(err)}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    decKey,
    decMsg,
    decResult,
    isLoading,
    setDecKey,
    setDecMsg,
    setDecResult,
    DecryptMessage
  };
}
