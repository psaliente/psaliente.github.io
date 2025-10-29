import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export default function NightModeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="self-center font-[SourceCodePro] bg-gray-300 dark:bg-gray-800 transition delay-300 duration-500 rounded-xl overflow-hidden"
    >
      <div className="flex flex-row gap-4 text-lg md:text-2xl drop-shadow-lg dark:drop-shadow-white">
        <div className="-z-10 rounded-xl bg-white dark:bg-gray-600 dark:translate-x-full w-1/2 h-full absolute transition duration-1000"></div>
        <div className="z-10 py-2 px-6 text-center text-gray-800 dark:text-gray-600 transition delay-300 duration-500">
          Light Mode
        </div>
        <div className="z-10 py-2 px-6 text-center text-gray-100 dark:text-white transition delay-300 duration-500">
          Night Mode
        </div>
      </div>
    </button>
  );
}
