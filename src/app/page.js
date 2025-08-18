import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white flex flex-col">
      <Header />
      <Hero />
      <Footer textColor="black" />
    </div>
  );
}
