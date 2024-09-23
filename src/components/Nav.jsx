import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

// @note this is used to present data in a simpler way
import { navLinks } from "../constants";


const Nav = () => {
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
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
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

            </nav>
        </header >
    )
}

export default Nav