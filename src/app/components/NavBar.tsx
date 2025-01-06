import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container  flex bg-gradient-to-r from-teal-500 to-coral-500 p-2  md:flex-row items-center">
        <a>
          <span className="text-xl">BEAUTY CITY</span>
        </a>
        <nav className=" md:ml-4 flex items-center text-base justify-center">
         <Link href={'/'} ><li className="mr-5 hover:text-gray-900">Home</li></Link>
      <Link href={'/About'} ><li className="mr-5 hover:text-gray-900">About</li></Link>
          <Link href={'/Contact'}><li className="mr-5 hover:text-gray-900">Contact</li></Link>
        </nav>
        <br></br>
        <br></br>
        
      </div>
    </header>
  );
}
