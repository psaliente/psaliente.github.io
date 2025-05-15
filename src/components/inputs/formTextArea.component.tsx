import TextArea from './textArea.component';

type FormTextAreaPropsType = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function FormTextArea(props: FormTextAreaPropsType) {
  const { name, label } = props;

  return (
    <div className="flex flex-col gap-2">
      <label className="dark:text-white" htmlFor={name}>
        {label}
      </label>
      <TextArea {...props} />
    </div>
  );
}
