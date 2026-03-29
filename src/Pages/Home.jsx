import { Footer } from "../Components/HomePage/Footer";
import { HeroSection } from "../Components/HomePage/HeroSection";
import { HomeNavbar } from "../Components/HomePage/HomeNavbar";

export function Home() {
    return (
        <div>
            <HomeNavbar />
            <HeroSection/>
            <Footer/>
        </div>
    )
}