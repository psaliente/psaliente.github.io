export default function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className, children } = props;
  const defaultClassNameValue =
    'font-[SourceCodePro] dark:bg-gray-900 dark:text-gray-50 border border-gray-300 rounded-xl p-2';

  return (
    <textarea className={className ?? defaultClassNameValue} {...props}>
      {children}
    </textarea>
  );
}
