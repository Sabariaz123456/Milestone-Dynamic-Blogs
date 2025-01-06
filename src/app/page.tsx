// import Image from "next/image";
import Authorcard from "./components/AuthoreCard";
// import Feature from "./components/Feature";

import Portfolio from "./components/Portfolio";
import Blog from "./blogs/blogs";

export default function Home() {
  return (
    <div >
      <Portfolio/>
      {/* <Feature/> */}
      {/* <Blog2/> */}
      <Blog/>
      <Authorcard/>
    </div>
  )}