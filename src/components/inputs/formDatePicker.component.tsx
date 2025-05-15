import DatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';

type FormDatePickerPropsType = {
  label: string;
} & DatePickerProps;

export default function FormDatePicker(props: FormDatePickerPropsType) {
  const { label, name } = props;
  const defaultClassName = 'dark:bg-gray-900 dark:text-gray-50 border border-gray-300 rounded-xl p-2';

  return (
    <div className="flex flex-col gap-2">
      <label className="dark:text-white" htmlFor={name}>
        {label}
      </label>
      <DatePicker className={props.className ?? defaultClassName} {...props} />
    </div>
  );
}
