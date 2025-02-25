import { Link } from "react-router";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#00987b]">
      <div className="mx-10">
        <div className="flex items-center justify-center gap-10">
          <div className="text-xl text-gray-800 border-b-2 my-1">
            <Link to="/allbooks">ALL BOOKS</Link>
          </div>
          <div className="text-xl text-gray-800 border-b-2 my-1 shadow-2xl">
            <Link to="/createbook">CREATE BOOK</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
