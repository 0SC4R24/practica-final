import "bootstrap/dist/css/bootstrap.css";
import "@/components/Searchbar";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <div className="container-fluid">
      <h1 className="text-center display-1 mt-5 p-5">Hello World!</h1>
      <p className="text-center p-5 mt-5">Main page</p>
      <Searchbar />
    </div>
  )
}
