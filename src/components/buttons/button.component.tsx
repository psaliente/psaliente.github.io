export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children } = props;
  const defaultClassNameValue =
    'bg-blue-700 disabled:bg-blue-300 text-white disabled:text-gray-400 py-1 px-4 rounded-xl';

  return (
    <button className={className ?? defaultClassNameValue} {...props}>
      {children}
    </button>
  );
}
