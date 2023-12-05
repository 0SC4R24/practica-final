import "bootstrap/dist/css/bootstrap.css";
import Searchbar from "@/components/Searchbar";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="container-fluid">
      <h1 className="text-center display-1 mt-5 p-5">Hello World!</h1>
      <p className="text-center p-5 mt-5">Main page</p>
      <Searchbar />
      <Carousel />
    </div>
  )
}
