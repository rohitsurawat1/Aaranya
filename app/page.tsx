// import Image from "next/image";
import Hero from "../components/Hero";
import Product  from "../components/Product";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Iconic from "../components/Iconic";
import { Newsletter } from "../components/newsletter";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex-grow">
        <Hero />
        <Product />
        
        <Iconic />
        <Newsletter />
        {/* Add other main content sections here */}
      </main>
      <Footer />
    </div>
  );
}
