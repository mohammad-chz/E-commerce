import React, { useContext, useState } from 'react'
import { images } from '../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoredContext';

const Navbar = ({ setIsShow, footerRef, navbarRef }) => {
    const [menu, setMenu] = useState("home");
    const [isOpenMenu, setIsopenMenu] = useState(false);
    const {getTotalPrice} = useContext(StoreContext)

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        // Desktop Responsive
        <header className='relative flex items-center justify-between bg-orange-100 py-4 px-14   max-sm:gap-4 max-sm:py-2 max-sm:px-4' id='navbar' ref={navbarRef}>
            <img className='hidden md:block w-20' src={images.logo} alt="Cart Logo" />
            <ul className='hidden md:flex items-center justify-center gap-12'>
                <Link to='/' className=''><li onClick={() => setMenu("home")} className={`${menu === "home" ? "text-orange-600 font-bold" : "text-slate-800"} hover:text-orange-400 cursor-pointer`}>خانه</li></Link>
                <Link><li onClick={() => setMenu("menu")} className={`${menu === "menu" ? "text-orange-600 font-bold" : "text-slate-800"} hover:text-orange-400 cursor-pointer`}>منو</li></Link>
                <Link><li onClick={() => setMenu("app")} className={`${menu === "app" ? "text-orange-600 font-bold" : "text-slate-800"} hover:text-orange-400 cursor-pointer`} >برنامه موبایل</li></Link>
                <li onClick={scrollToFooter} className={`${menu === "contact" ? "text-orange-600 font-bold" : "text-slate-800"} hover:text-orange-400 cursor-pointer`}>تماس با ما</li>
            </ul>
            <div className='hidden md:flex items-center justify-center gap-6'>
                <img className='w-10' src={images.search} alt="Search Logo" />
                <div className='relative'>
                    <Link onClick={() => setMenu("cart")} to='/cart'><img className={`${menu === 'cart' ? 'w-14' : 'w-10'}`} src={images.iconCart} alt="Search Logo" /></Link>
                    <div className={`absolute top-0 w-4 h-4 rounded-full ${getTotalPrice() === 0 ? "" : "bg-orange-500"}`}></div>
                </div>
                <button onClick={() => setIsShow(true)} className='outline-none border-none bg-orange-300 font-bold text-slate-700 hover:bg-orange-400 px-4 py-2 rounded-lg'>ورود و ثبت نام</button>
            </div>

            {/* Mobile responsive */}
            <div className='flex md:hidden items-center justify-center gap-4'>
                <img className='block md:hidden w-14' src={images.logo} alt="Cart Logo" />
                <img className='w-7' src={images.search} alt="Search Logo" />
                <img className='w-7' src={images.iconCart} alt="Search Logo" />
                <button onClick={() => setIsShow(true)} className='flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold'>ورود</button>
            </div>

            <img onClick={() => setIsopenMenu(prevOpen => !prevOpen)} className='md:hidden w-6 cursor-pointer' src={images.menu} alt="menu" />
            {isOpenMenu && <div className='fixed inset-0 bg-black bg-opacity-50 z-10'></div>}
            <ul
                className={`md:hidden fixed flex flex-col items-center justify-start py-10 z-20
                    gap-4 top-0 bg-orange-300 h-screen w-32 ${isOpenMenu ? "translate-x-0 left-0" : "-translate-x-full -left-full"} transition-transform duration-500`}>
                <li className='w-full flex justify-start mr-4'>
                    <img onClick={() => setIsopenMenu(prevOpen => !prevOpen)} className='w-6 cursor-pointer' src={images.close} alt="close Icon" />
                </li>
                <li onClick={() => setMenu("home")} className={`${menu === "home" ? "text-red-500 font-bold" : ""} hover:text-orange-400 cursor-pointer p-2`}>خانه</li>
                <li onClick={() => setMenu("menu")} className={`${menu === "menu" ? "text-red-500 font-bold" : ""} hover:text-orange-400 cursor-pointer p-2`}>منو</li>
                <li onClick={() => setMenu("app")} className={`${menu === "app" ? "text-red-500 font-bold" : ""} hover:text-orange-400 cursor-pointer p-2`}>برنامه موبایل</li>
                <li onClick={() => setMenu("contact")} className={`${menu === "contact" ? "text-red-500 font-bold" : ""} hover:text-orange-400 cursor-pointer p-2`}>تماس با ما</li>
            </ul>
        </header>
    )
}

export default Navbar