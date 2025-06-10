import Link from "next/link";
import { GiSpikedDragonHead } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="flex flex-col border-r border-[#3a3a3a] h-screen">
      <Link
        href={"/"}
        className="w-[65px] h-[65px] flex items-center justify-center border-b-1 border-[#3a3a3a]"
      >
        <GiSpikedDragonHead size={18} color={"#ddd"} />
      </Link>
      <Link
        href={"/"}
        className="w-[65px] h-[65px] flex items-center justify-center hover:bg-[#2a2a2a]"
      >
        <BiCookie size={18} color={"#ddd"} />
      </Link>
      <Link
        href={"/"}
        className="w-[65px] h-[65px] flex items-center justify-center hover:bg-[#2a2a2a]"
      >
        <RiDrinks2Fill size={18} color={"#ddd"} />
      </Link>
      <Link
        href={"/"}
        className="w-[65px] h-[65px] flex items-center justify-center hover:bg-[#2a2a2a]"
      >
        <GiCakeSlice size={18} color={"#ddd"} />
      </Link>
      <Link
        href={"/"}
        className="w-[65px] h-[65px] flex items-center justify-center hover:bg-[#2a2a2a]"
      >
        <BiCookie size={18} color={"#ddd"} />
      </Link>
      <Link
        href={"/"}
        className="w-[65px] h-[65px] flex items-center justify-center hover:bg-[#2a2a2a]"
      >
        <RiDrinks2Fill size={18} color={"#ddd"} />
      </Link>
      <Link
        href={"/"}
        className="w-[65px] h-[65px] flex items-center justify-center hover:bg-[#2a2a2a]"
      >
        <GiCakeSlice size={18} color={"#ddd"} />
      </Link>
    </nav>
  );
}
