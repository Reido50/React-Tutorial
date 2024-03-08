const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>reid blog</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: 8
                }}>new blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;