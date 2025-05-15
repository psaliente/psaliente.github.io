export default function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const defaultClassName = 'dark:bg-gray-900 dark:text-gray-50 border border-gray-300 rounded-xl p-2';

  return <input type="text" className={props.className ?? defaultClassName} {...props} />;
}
