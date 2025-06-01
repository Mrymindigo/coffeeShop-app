import './App.css'
import Header from './Header/Header'
import HeadSwiper from './Head-swiper/Head-swiper'
import Product from './Product/Product'
import SectionTitle from './Sections-title/SectionTitle'


function App() {
  return (

    <>
      <Header />
      <HeadSwiper />
      <div className="productSection">
        <SectionTitle value="OUR Coffee OFFER" />
        <div className="productBoxContainer">
          <Product image="img-1.png" title="TYPES OF COFFEE" description="looking at its layout. The point of" />
          <Product image="img-2.png" title="BEAN VARIETIES" description="looking at its layout. The point of" />
          <Product image="img-3.png" title="COFFEE & PASTRY" description="looking at its layout. The point of" />
          <Product image="img-4.png" title="COFFEE TO GO" description="looking at its layout. The point of" />
        </div>
      </div>
      <SectionTitle value="About Our shop" />
    </>
  );
}

export default App;
