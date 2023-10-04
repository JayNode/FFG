import { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav>

        {/* onClick:  n==0    -> setIsNavExpanded(false)
                      n==Odd  -> setIsNavExpanded(true) 
                      n==Even -> setIsNavExpanded(false) */}
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}></button>

        {/* Logic:  isNavExpanded==true  -> className="nav-menu expanded"  
                    isNavExpanded==false -> className="nav-menu" */}
        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/catalog">Catalog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
