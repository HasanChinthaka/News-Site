const Navbar = ({
  setCategory,
  selectedCategory,
  setLanguage,
  selectedLanguage,
}) => {
  const languageMap = {
    ar: "Arabic",
    de: "German",
    en: "English",
    es: "Spanish",
    fr: "French",
    he: "Hebrew",
    it: "Italian",
    nl: "Dutch",
    no: "Norwegian",
    pt: "Portuguese",
    ru: "Russian",
    sv: "Swedish",
  };

  const categories = [
    { key: "general", label: "All" },
    { key: "technology", label: "Technology" },
    { key: "business", label: "Business" },
    { key: "entertainment", label: "Entertainment" },
    { key: "health", label: "Health" },
    { key: "science", label: "Science" },
    { key: "sports", label: "Sports" },
  ];

  

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary px-4"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => {
            setCategory("general");
            setLanguage("");
          }}
          style={{ cursor: "pointer" }}
        >
          <span className="badge text-bg-light text-dark fs-4">NEWS</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {categories.map(({ key, label }) => (
              <li className="nav-item" key={key}>
                <a
                  className={`nav-link ${
                    selectedCategory === key ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory(key)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language: {languageMap[selectedLanguage] ? languageMap[selectedLanguage] : "All"}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {Object.entries(languageMap).map(([code, name]) => (
                  <li key={code}>
                    <button
                      className={`dropdown-item ${
                        selectedLanguage === code ? "active" : ""
                      }`}
                      onClick={() => setLanguage(code)}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
