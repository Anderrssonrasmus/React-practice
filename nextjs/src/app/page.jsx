import Image from "next/image";
import banner from "../media/banner.jpg";

export default function Home() {
  return (
    <>
      <div className="site-title">
        <h1>Fostira AB</h1>
        <p>Digital marknad och Webbyrå i sundsvall</p>
        <p>Vi hjälper ditt företag att växa</p>
        <Image className="banner" 
          src={banner}
        />
      </div>
    </>
  )
}
