interface HamburgerProps {
  toggleSideBar: React.MouseEventHandler<HTMLElement>;
}

const Hamburger = ({ toggleSideBar }: HamburgerProps) => {
  return (
    <button
      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 md:hidden"
      onClick={toggleSideBar}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
