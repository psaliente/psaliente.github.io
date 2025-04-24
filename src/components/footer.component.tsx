export default function FooterComponent() {
  return (
    <div className="flex flex-col p-6 pt-20 gap-2 text-center dark:text-white">
      <div className="flex flex-row flex-wrap gap-3 w-full items-center justify-center">
        <a href="https://github.com/psaliente">My Github Profile</a>
        <a href="https://www.linkedin.com/in/peter-saliente-2a4aa942/">My LinkedIn Profile</a>
        <a href="mailto:pjc.saliente@gmail.com">My Contact Email</a>
      </div>
      <hr className="w-2/3 self-center border-gray-500" />
      <span>Peter John C. Saliente - 2021</span>
    </div>
  );
}
