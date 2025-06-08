import './App.css'
import Header from './Header/Header'
import HeadSwiper from './Head-swiper/Head-swiper'
import Product from './Product/Product'
import SectionTitle from './Sections-title/SectionTitle'
import AboutSection from './aboutUs/AboutSection'
import Customer from './customers/Customer'


function App() {
  const allProducts = [
    { id: "1", image: "img-1.png", title: "TYPES OF COFFEE", description: "looking at its layout. The point of 1" },
    { id: "2", image: "img-2.png", title: "BEAN VARIETIES", description: "looking at its layout. The point of 2" },
    { id: "3", image: "img-3.png", title: "COFFEE & PASTRY", description: "looking at its layout. The point of 3" },
    { id: "4", image: "img-4.png", title: "COFFEE TO GO", description: "looking at its layout. The point of 4" }
  ]

  const allCustomers = [
    { id: '1', image: 'client-img1.png', name: 'Joy Moark', comment: 'now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text,' },
    { id: '2', image: 'client-img2.png', name: 'Mihacal', comment: 'now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text,' },
    { id: '3', image: 'client-img3.png', name: 'Uliya den', comment: 'now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text,' }
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

      <div className="customersSection">
        <SectionTitle value="What says customers" />
        <div className="customerBoxContainer">
          <Customer {...allCustomers[0]} />
          <Customer {...allCustomers[1]} />
          <Customer {...allCustomers[2]} />
        </div>
      </div>
    </>
  );
}

export default App;
