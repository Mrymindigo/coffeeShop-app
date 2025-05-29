
import './Header.css'

function Header(){
    return(
        <>
        <header className='headerContainer'>
        <div className ="logoContiner">
            <img src="logo.png" />
        </div>
        <div className ="navbarContainer">
            <nav className ="navbar">
                <a className='navbarItem'>home</a>
                <a className='navbarItem'>about</a>
                <a className='navbarItem'>coffees</a>
                <a className='navbarItem'>shop</a>
                <a className='navbarItem'>blog</a>
                <a className='navbarItem'>contact</a>
            </nav>
        </div>
        <div className='btnContainer'>
            <div className='loginBtn'>
                <i></i>
                <span>login</span>
            </div>
            <div className='searchBtn'></div>
        </div>
        </header>
        </>
    )
}

export default Header;