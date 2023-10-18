import Brand from "../Brand/Brand";
import FeaturedListings from "../FeaturedListings/FeaturedListings";
import Footer from "../Footer/Footer";
import WhyChooseUs from "../WhychoseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <FeaturedListings></FeaturedListings>
      <Brand></Brand>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
