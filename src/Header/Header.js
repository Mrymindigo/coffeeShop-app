
import './Header.css'
import NavbarItem from './Navbar-item'


function Header() {
    return (
        <>
            <header className='headerContainerBack'>
                <div className="headerContainer">
                    <div className="logoContainer">
                        <img src="logo.png" alt='logo' />
                    </div>
                    <nav className="navbarContainer">
                        <ul className="navbar">
                            <NavbarItem value="home"  />
                            <NavbarItem value="about" />
                            <NavbarItem value="coffees" />
                            <NavbarItem value="shop" />
                            <NavbarItem value="blog" />
                            <NavbarItem value="contact" />
                        </ul>
                    </nav>
                    <button className="loginBtn">login</button>
                </div>

            </header>
        </>
    )
}

export default Header;