import Image from "next/image";
import banner from "../media/banner.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="site-title">
        <h1>Fostira AB</h1>
        <p>Digital marknad och Webbyrå i sundsvall</p>
        <p>Vi hjälper ditt företag att växa</p>

        <div className="buttons">
          <Link href="#">Vad har vi att erbjuda?</Link>
          <Link href="#">Kontakta oss</Link>
        </div>
      </div>

      <Image src={banner} className="banner"/>
    </>
  )
}
