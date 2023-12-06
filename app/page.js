import "bootstrap/dist/css/bootstrap.css";
import Searchbar from "@/components/Searchbar";
import MainCarousel from "@/components/MainCarousel";
import Carousel from "@/components/Carousel";
import MainCards from "@/components/MainCards";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <MainCarousel />
      <h1 className="text-center display-5 mt-5 p-5">Slogan</h1>
      <p className="text-center p-5 mt-4">What is the page about? Maybe add an image</p>
      <hr className="my-5"/>
      <h1 className="text-center display-5 mt-5 p-5">Check out some commerces</h1>
      <MainCards />
    </div>      
  )
}
