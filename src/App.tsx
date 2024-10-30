import "react-multi-carousel/lib/styles.css";
import BannerCategories from "./ui/BannerCategories";
import HomeBanner from "./ui/HomeBanner";
import Hightlights from "./ui/Hightlights";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";
import DiscountedBanner from "./ui/DiscountedBanner";
import Blog from "./ui/Blog";
import BrandSection from "./ui/BrandSection";
import BenefitsSection from "./ui/BenefitsSection";
// import FiltersExample from "./pages/FiltersExample";
function App() {
  return (
    <main>
      {/* <BannerCategories /> */}
      <HomeBanner />
      {/* <FiltersExample/> */}
      <Categories />
      {/* <Hightlights /> */}
      <BrandSection/>
      <BenefitsSection/>
      <ProductList />
      {/* DiscountedBanner */}
      {/* <DiscountedBanner /> */}
      {/* Blog */}
      <Blog />
    </main>
  );
}

export default App;
