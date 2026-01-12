import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { userData } from "@/data/user/user";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchResults(userData);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.branch.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered);
  };

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "ig");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };


  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.logo}>CMS</div>
          <ul className={`${styles.links} mb-0`}>
            <li>Home</li>
            <li>Department</li>
          </ul>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <input
            type="text"
            placeholder="Search student..."
            className={styles.search}
            value={query}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          />

          <div className={styles.profile}>👤</div>

          <div className={styles.hamburger} onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>

        {/* Search Results */}
        {isFocused && (
          <div className={styles.searchResults}>
            {searchResults.length > 0 ? (
              <ul className={styles.resultsList}>
                {searchResults.map((user, index) => (
                  <li key={index}>
                    <div className={styles.avatar}>👤</div>
                    <div>
                      <a href="#">{highlightText(user.name, query)}</a>
                      <p>{highlightText(user.branch, query)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noResult}>No results found</p>
            )}
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>Home</li>
            <li>Department</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
