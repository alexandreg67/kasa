import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";

export default function Home() {
  return (
    <div className="container_home">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  )
}