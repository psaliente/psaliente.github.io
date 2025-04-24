export default function useEncryptionService() {
  /// reference: https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js
  const Encrypt = async (value: string, key: string): Promise<string> => {
    console.log(`Encrypt(value: ${value}, key: ${key})`);
    const { subtle } = window.crypto;
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const aesKeyGenParams: AesKeyGenParams = {
      name: 'AES-CBC',
      length: 256
    };
    const cryptoKey = await subtle.generateKey(aesKeyGenParams, false, ['encrypt', 'decrypt']);
    const aesCbcParams: AesCbcParams = {
      iv: crypto.getRandomValues(new Uint8Array(16)),
      name: 'AES-CBC'
    };
    const encodedBytes = await subtle.encrypt(aesCbcParams, cryptoKey, encoder.encode(value));
    return decoder.decode(encodedBytes);
  };

  const Decrypt = async (value: string, key: string): Promise<string> => {
    console.log(`Decrypt(value: ${value}, key: ${key})`);
    const { subtle } = window.crypto;
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const aesKeyGenParams: AesKeyGenParams = {
      name: 'AES-CBC',
      length: 256
    };
    const cryptoKey = await subtle.generateKey(aesKeyGenParams, false, ['encrypt', 'decrypt']);
    const aesCbcParams: AesCbcParams = {
      iv: crypto.getRandomValues(new Uint8Array(16)),
      name: 'AES-CBC'
    };
    const decodedBytes = await subtle.decrypt(aesCbcParams, cryptoKey, encoder.encode(value));
    return decoder.decode(decodedBytes);
  };

  return {
    Encrypt,
    Decrypt
  };
}
