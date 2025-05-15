import TextInput from './textInput.component';

type FormTextInputPropsType = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FormTextInput(props: FormTextInputPropsType) {
  const { label, name } = props;

  return (
    <div className="flex flex-col gap-2">
      <label className="dark:text-white" htmlFor={name}>
        {label}
      </label>
      <TextInput {...props} />
    </div>
  );
}
