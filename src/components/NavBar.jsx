import { useEffect, useState } from "react";

const netflixLogo = 'src/assets/netflixLogo.png'
const netflixAvatar = 'src/assets/Netflix-avatar.png'

const NavBar = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener('scroll');
        // };
    }, []);
  return (
    <div className='flex cursor-pointer justify-between items-center w-full pr-6 fixed bg-[#111] z-50 '>
        <img src={netflixLogo} alt="Netflix Logo" className=" w-24" />
        <img src={netflixAvatar} alt="Netflix Logo" className=" w-5 h-5 " />
    </div>
  )
}

export default NavBar