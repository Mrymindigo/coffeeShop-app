import './App.css'
import Header from './Header/Header'
import HeadSwiper from './Head-swiper/Head-swiper'
import Product from './Product/Product'
import SectionTitle from './Sections-title/SectionTitle'
import AboutSection from './aboutUs/AboutSection'


function App() {
  const allProducts = [
    { id: "1", image: "img-1.png", title: "TYPES OF COFFEE", description: "looking at its layout. The point of 1" },
    { id: "2", image: "img-2.png", title: "BEAN VARIETIES", description: "looking at its layout. The point of 2" },
    { id: "3", image: "img-3.png", title: "COFFEE & PASTRY", description: "looking at its layout. The point of 3" },
    { id: "4", image: "img-4.png", title: "COFFEE TO GO", description: "looking at its layout. The point of 4" }
  ]

  return (
    <>
      <Header />
      <HeadSwiper />
      <div className="productSection">
        <SectionTitle value="OUR Coffee OFFER" />
        <div className="productBoxContainer">
          <Product {...allProducts[0]} />
          <Product {...allProducts[1]} />
          <Product {...allProducts[2]} />
          <Product {...allProducts[3]} />
        </div>
      </div>
      <SectionTitle value="About Our shop" />
      <AboutSection />
    </>
  );
}

export default App;
