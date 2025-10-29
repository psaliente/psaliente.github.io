import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export default function NightModeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="self-center font-[SourceCodePro] bg-gray-300 dark:bg-gray-800 transition delay-300 duration-500 rounded-xl"
    >
      <div className="flex flex-row gap-4 text-lg md:text-2xl drop-shadow-lg dark:drop-shadow-white">
        <div className="py-2 px-6 text-center rounded-xl text-gray-800 dark:text-gray-600 bg-white dark:bg-transparent transition delay-300 duration-500">
          Light Mode
        </div>
        <div className="py-2 px-6 text-center dark:rounded-xl text-gray-100 dark:text-white bg-transparent dark:bg-gray-600 transition delay-300 duration-500">
          Night Mode
        </div>
      </div>
    </button>
  );
}
