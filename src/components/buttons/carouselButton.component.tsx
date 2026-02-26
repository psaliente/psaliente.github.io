export default function CarouselButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children } = props;

  return (
    <button
      className="rounded-full bg-white dark:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-50 dark:disabled:bg-gray-950 dark:disabled:text-gray-700 hover:scale-[1.1] active:scale-[1] dark:text-white size-12 drop-shadow-sm transition-colors delay-300 duration-500"
      {...props}
    >
      {children}
    </button>
  );
}
