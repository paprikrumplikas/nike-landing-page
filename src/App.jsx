import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav.jsx";

const App = () => (
  // @crucial @learning he relative class in the <main> element is used to set the positioning context for its child elements. When you apply position: relative to an element, it allows you to position its child elements absolutely within it. T
  <main className="relative">
    <Nav />

    {/** @learning @note the custom utility classes that we defined in index.css */}
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding-x py-10 ">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App;