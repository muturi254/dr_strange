import React from "react";

const Header = () => {
    return (
        <nav className="bg-[#41BFF5] flex flex-row justify-between h-12 items-center px-6 mb-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>

            <ul className="text-white flex flex-row font-bold">
                <li className="mr-3">Home</li>
                <li className="mr-3">About</li>
                <li className="">Contact</li>
            </ul>
        </nav>
    )
}

export default Header;