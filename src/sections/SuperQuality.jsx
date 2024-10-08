import Button from "../components/Button";
import { shoe8 } from "../assets/images";


const SuperQuality = () => {
    return (
        <section
            id="about-us"
            // max-lg:flex-col = on screens smaller than 1024px we are gonna have a col
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            {/** wrapper for text and button*/}
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
                    We Provide You
                    <span className="text-coral-red"> Super</span>
                    <span className="text-coral-red"> Quality</span> Shoes
                </h2>
                <p className="mt-4 info-text lg:max-w-lg">
                    Ensuring premium comfort and style, our meticulously crafted footwear
                    is designed to elevate your experience, providing you with unmatched
                    quality, innovation, and a touch of elegance.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction.</p>
                {/** @note button would expand to full width if not in this div */}
                <div className="mt-11">
                    <Button label="View details" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default SuperQuality