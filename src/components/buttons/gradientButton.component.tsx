export default function GradientButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children } = props;

  return (
    <button
      className="bg-linear-to-tr rounded-full px-8 py-1 transition delay-100 duration-500 hover:scale-[1.1] from-blue-500 to-emerald-300 text-2xl shadow-md text-gray-200"
      {...props}
    >
      {children}
    </button>
  );
}
