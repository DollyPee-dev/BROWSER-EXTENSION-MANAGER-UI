import whiteLogo from '/assets/images/Logo.png'
import blackLogo from '/assets/images/logo.svg'
import moonIcon from '/assets/images/icon-moon.svg'
import sunIcon from '/assets/images/icon-sun.svg'


const Navbar = ({ theme, handleTheme }) => {
  return (
    <header className='py-6'>
      <nav className={`
        ${theme? 'bg-neutral-100/20': 'bg-white'}
        flex items-center justify-between container p-2 rounded-xl
        shadow-sm`}>
        <a href="">
          <img className='w-[140px]' src={theme ? whiteLogo : blackLogo} alt="" />
        </a>
        <div className={`${theme? 'bg-neutral-100/10' : 'bg-black/5'} backdrop-blur-md p-2 rounded-md cursor-pointer 
        border border-transparent hover:border-red-400`}>
          <img onClick={() => handleTheme()} src={theme ? sunIcon : moonIcon} alt="" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar