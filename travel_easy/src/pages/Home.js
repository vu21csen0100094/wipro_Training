import React from "react";
import DestinationCard from "../components/DestinationCard";
import heroImg from "../assets/travel-bg.png";   // your background image

const Home = () => {

  const destinations = [
    {
      title: "Hampi",
      image: "https://www.stayvista.com/blog/wp-content/uploads/2024/09/Hampi_karnataka.jpg",
      description: "Vijayanagara Empire in southern India, a rich cultural heritage."
    },
    {
      title: "Kolkata",
      image: "https://media.assettype.com/outlooktraveller%2F2024-01%2Fa369e7e3-f7c8-4210-ae58-1800ea5cb2ea%2FKolkata1.jpg?w=480&auto=format%2Ccompress&fit=max",
      description: "Vibrant culture, historic architecture, and rich traditions."
    },
    {
      title: "Jaipur",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1200px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
      description: "The Pink City — forts, palaces and majestic heritage."
    }
  ];

  return (
    <div>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="my-hero"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="hero-inner">
          <h1>Discover Beautiful Places</h1>
          <p>Travel with comfort, safety and joyful experiences.</p>
          <a className="hero-btn" href="/packages">Explore Packages</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-block container">
        <h2>About TravelEase</h2>
        <p>
          TravelEase helps you explore amazing destinations with curated trips,
          premium services and easy booking.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-block">
        <h2>Why Choose Us?</h2>
        <div className="row justify-content-center mt-4">
          <div className="col-md-3 feature-card">
            <h4>Best Deals</h4>
            <p>Affordable packages crafted with care.</p>
          </div>

          <div className="col-md-3 feature-card">
            <h4>Trusted Travel</h4>
            <p>Reliable services with verified partners.</p>
          </div>

          <div className="col-md-3 feature-card">
            <h4>24/7 Support</h4>
            <p>Your comfort and queries are our priority.</p>
          </div>
        </div>
      </section>

      {/* TOP DESTINATIONS */}
      <section className="container mt-5">
        <h2 className="text-center">Top Destinations</h2>
        <div className="row mt-4">
          {destinations.map((d, index) => (
            <DestinationCard key={index} {...d} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta container">
        <h2>Start Your Journey Today</h2>
        <p>Book your favorite trip now and create unforgettable memories.</p>
        <a className="hero-btn" href="/book">Book Now</a>
      </section>

    </div>
  );
};

export default Home;
