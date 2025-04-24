import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export default function NightModeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="self-center font-[SourceCodePro] bg-gray-300 dark:bg-gray-800 rounded-xl">
      <div className="flex flex-row gap-4 drop-shadow-lg dark:drop-shadow-white">
        <div className="py-2 px-6 text-center text-2xl rounded-xl text-gray-800 dark:text-gray-600 bg-white dark:bg-transparent">
          Light Mode
        </div>
        <div className="py-2 px-6 text-center text-2xl dark:rounded-xl text-gray-100 dark:text-white bg-transparent dark:bg-gray-600">
          Night Mode
        </div>
      </div>
    </button>
  );
}
