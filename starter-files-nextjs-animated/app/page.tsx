import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { KeyMetrics } from "@/components/KeyMetrics";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Stack/>
        <LogoAnimation/>
        <Portfolio/>
        <KeyMetrics/>
        <Services/>
        <Contact/>
        <Footer/>
    </>  
    );
}
