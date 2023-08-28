import MoonIcon from "./icons/MoonIcon";
const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8  ">
      <div className="flex justify-between">
        <h1 className="uppercase text-white tracking-[0.3em] text-3xl  font-semibold">
          Todo
        </h1>
        <button>
          <MoonIcon className=" fill-red-400" />
        </button>
      </div>
    </header>
  );
};
export default Header;
