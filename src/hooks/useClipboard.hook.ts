export default function useClipboard() {
  const copyToClipboard = (textToCopy: string) => navigator.clipboard.writeText(textToCopy);

  return {
    copyToClipboard
  };
}
