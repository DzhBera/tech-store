function Header () {
    return (
        <header>
            <div className="header-top">
                <div className="container header-top__content">
                    <div className="header-top__schedule">
                        Mon-Thu:  9:00 AM - 5:30 PM
                        </div>
                        <p className="header-top__address">Visit our showroom in 1234 Street Adress City Address, 1234  
                        <a href="#">Contact Us</a></p>
                        <div className="header-top__contacts">
                        <div className="header-top__phone">
                        Call Us: <a href="" className="tel:0012345678">(00) 1234 5678</a>
                        </div>
                        <a href="https://www.facebook.com/"><img src="" alt="" /></a>
                        <a href="https://www.instagram.com/"><img src="" alt="" /></a>
                        </div>
                        
                </div>
            </div>
            
                <div className="container header-main">
               <nav className="links">
                   <a href="#">Laptops</a>
                   <a href="#">Desktop PCs</a>
                   <a href="#">Networking Devices</a>
                   <a href="#">PC Parts</a>
                   <a href="#">All Other Products</a>
                   <a href="#">Repairs</a>
                   <a href="#">Our Deals</a>
               </nav>
               <div className="actions"></div>
               <button className="btn" > 
               <img src="" alt="" /></button>

               <button className="btn" > 
               <img src="" alt="" /></button>

               <button className="avatar" > 
               <img src="" alt="" /></button>


                </div>
        
        </header>
    )
}
export default Header; 