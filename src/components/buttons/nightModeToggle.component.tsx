import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export default function NightModeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="self-center font-[SourceCodePro] bg-gray-300 dark:bg-gray-800 inset-shadow-sm/30 dark:inset-shadow-sm/90 transition delay-300 duration-500 rounded-xl overflow-hidden"
    >
      <div className="flex flex-row gap-4 text-lg md:text-2xl drop-shadow-sm/50 dark:drop-shadow-sm/90">
        <div className="-z-10 rounded-xl bg-white dark:bg-gray-600 dark:translate-x-full w-1/2 h-full absolute transition duration-1000"></div>
        <div className="z-10 py-2 px-6 text-center text-gray-800 dark:text-gray-400 transition delay-300 duration-500">
          Light Mode
        </div>
        <div className="z-10 py-2 px-6 text-center text-gray-600 dark:text-white transition delay-300 duration-500">
          Night Mode
        </div>
      </div>
    </button>
  );
}
