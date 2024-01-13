import Link from "next/link";
export default function NavBar() {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gray-900 border-b-2 border-green-500 sticky top-0 z-50 w-full ">
      <Link
        className="text-green-500 text-3xl font-extrabold hover:scale-105 active:scale-95 duration-75"
        href="/"
      >
        Wordleo
      </Link>
    </div>
  );
}
