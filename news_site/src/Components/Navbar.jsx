const Navbar = ({ setCategory}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-4" data-bs-theme="dark" style={{ cursor: 'default', display:'flex', justifyContent: 'center' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => setCategory("general")}><span className="badge text-bg-light text-dark fs-4">NEWS</span></a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">NEWS</span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav nav-underline" style={{listStyle: "none", margin: 0, padding: 0}}>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                            </li>
                            {/* <li class="nav-item dropdown" style={{float: "left", margin: 0, padding: 0, position: 'absolute', right:50}}>
                                <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Lng</div>
                                <ul class="dropdown-menu">
                                    <li><div class="dropdown-item" onClick={() => setLanguage("ar")}>Arabic</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("de")}>German</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("en")}>English</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("es")}>Spanish</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("fr")}>French</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("he")}>Hebrew</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("it")}>Italian</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("nl")}>Dutch</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("no")}>Norwegian</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("pt")}>Portuguese</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("ru")}>Russian</div></li>
                                    <li><div class="dropdown-item" onClick={() => setLanguage("sv")}>Swedish</div></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar