import { useState } from 'react';

import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";

// basic array for values
import { shoes, statistics } from "../constants";

import { bigShoe1 } from "../assets/images";


const Hero = () => {

    // this is a string
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        // on XL, it is flex-row, on mobile it it flex-col
        // max-container is our own style
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >

            {/** left part of the hero section: text and stats */}
            <div
                className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
            >
                <p className="text-xl font-montserrat text-coral-red"> Our Summer Collection
                </p>

                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    {/** on xlarge devices bg is white because on these devices text goes above the image */}
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike
                    </span> Shoes
                </h1>

                <p className="font-montserrat  text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

                <Button
                    label="Shop now"
                    iconURL={arrowRight}
                />

                {/**Container for statistics */}
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div
                            key={stat.label}
                        >
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/** right part of the hero section: img */}
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="shoe collection"
                    width={610}
                    height={540}
                    className="object-contain relative z-10 "
                />

                {/** container for the little 3 images that allows to change the big image */}
                {/** @learning  absolute: removes the element from the normal document flow, allowing it to be positioned relative to its nearest positioned ancestor (or the initial containing block*/}
                {/** @crucial By setting position: relative; on a parent element, you create a positioning context for the absolutely positioned child. This means the child's coordinates (top, right, bottom, left) will be calculated relative to the boundaries of this parent, not the entire viewport. */}
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}   // object
                                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg} // string
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default Hero