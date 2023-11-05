
const netflixLogo = 'src/assets/netflixLogo.png'
const netflixAvatar = 'src/assets/Netflix-avatar.png'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full pr-6 fixed bg-[#111] z-50">
        <img src={netflixLogo} alt="Netflix Logo" className=" w-24" />
        <img src={netflixAvatar} alt="Netflix Logo" className=" w-5 h-5 " />
    </div>
  )
}

export default NavBar