import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
    return (
        // @crucial @learning 
        <section
            id="products"
            className="max-container max-sm:mt-12"
        >
            {/** wrapper div for text elements*/}
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Pupular</span> Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
            </div>

            {/** wrapper div for cards*/}
            {/** @learning @crucial use grid for mobile responsiveness*/}
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {products.map((product) => (
                    // @learning @crucial by using the spread operator ({...product}), you are passing all the properties of the product object as individual props
                    <PopularProductCard key={product.name} {...product} />
                ))}
            </div>

        </section>
    )
}

export default PopularProducts