
import CarRentalPage from "./components/CarRentalPage";
import Hero from "./components/Hero";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Hero />
      <Popular />
      <CarRentalPage />
    </div>
  );
}
