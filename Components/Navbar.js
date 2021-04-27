import Image from "next/image";
import Link from "next/link";

function Navbar(props) {
  return (
    <nav className="bg-gray-200 ">
      {/* containing div wrapping the contents of the navbar */}
      <div className="flex justify-between px-10 py-3">
        <Image className="" src="/logo.svg" width={100} height={50} />
        <p className="text-gray-800 self-center">
          {props.text}
          <Link href={props.componentRendered}>
            <a className="text-purple-900 underline">
              {props.link}
            </a>
          </Link>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
