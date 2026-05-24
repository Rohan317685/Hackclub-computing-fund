export function Menu() {
  return (
    <div className="flex justify-between w-full">
      <div className="group relative">
        <img
          src="/flag-orpheus-left.png"
          alt="orpheus-left-flag"
          className="w-55 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        />
        <img
          src="/flag-orpheus-top.png"
          alt="flag-orpheus-top"
          className="opacity-0 w-55 group-hover:opacity-100 transition-opacity absolute top-0 duration-200"
        />
      </div>
      <ul className="flex gap-2 h-min text-[22px] p-4 items-baseline">
        <li className="bg-white px-3 py-1 hover:bg-[#ff8c37] cursor-pointer hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:border-black hover:border-r-8 hover:border-t-2 hover:border-l-2 hover:border-b-8 transition-all">
          About
        </li>
        <li className="bg-white px-3 py-1 hover:bg-[#a633d6] cursor-pointer hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:border-black hover:border-r-8 hover:border-t-2 hover:border-l-2 hover:border-b-8 transition-all">
          Programs
        </li>
        <li className="bg-white px-3 py-1 hover:bg-[#33d6a6] cursor-pointer hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:border-black hover:border-r-8 hover:border-t-2 hover:border-l-2 hover:border-b-8 transition-all">
          Clubs
        </li>
        <li className="bg-white px-3 py-1 hover:bg-[#338eda] cursor-pointer hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:border-black hover:border-r-8 hover:border-t-2 hover:border-l-2 hover:border-b-8 transition-all">
          Resources
        </li>
        <button className="bg-white px-5 py-1 hover:shadow-2xl shadow-[#ff8c37] hover:bg-[#ec3750] cursor-pointer hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:border-black hover:border-r-8 hover:border-t-2 hover:border-l-2 hover:border-b-8 transition-all">
          Donate
        </button>
      </ul>
    </div>
  );
}
