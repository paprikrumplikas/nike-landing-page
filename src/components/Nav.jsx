import { useState } from "react";

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

// @note this is used to present data in a simpler way
import { navLinks } from "../constants";


const Nav = () => {

    const [toggleDrawer, setToggleDrawer] = useState(false);

    return (
        //{/** @learning @crucial this could have been a div but semantic tags are better for readability */ }
        // e.g. <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>, <figure>, <figcaption>, <mark>, <time>
        < header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex-1 justify-center items-center gap-16 hidden lg:flex">
                    {navLinks.map((item) =>
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-grey"
                            >
                                {item.label}
                            </a>
                        </li>
                    )}
                </ul>

                {/** hamburger menu for mobile -  hidden for screens larger than sm*/}
                <div className="lg:hidden">
                    <img
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                        onClick={() => setToggleDrawer((prev) => (!prev))}
                    />
                </div>

                <div
                    id="drawer-menu"
                    className={`lg:hidden absolute top-[60px] bg-gray-300 right-0 left-0 z-10 py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
                    <ul className="gap-16">
                        {navLinks.map((item) =>
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat leading-normal text-lg text-slate-grey"
                                    onClick={() => { setToggleDrawer(false); }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>

            </nav>
        </header >
    )
}

export default Nav