
import Header from "./header/page";
import Main from "./main/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0">
      <Header />
      </div>
      <Main />
      <Footer />
      
    </div >
  );
}
