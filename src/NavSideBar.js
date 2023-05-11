/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
const NavSideBar=()=>{
    return(
        <nav className="nav-sidebar-main">
        <ul className="nav-sidebar-links">
            <div>
            <li className="nav-siebar-item  nav-siebar-item-first"><a className="nav-side-link"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon icon-sidebar" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M256 48v416M464 256H48"/></svg>
            <p>Explore Receipies</p>
            </a></li>
            <li className="nav-siebar-item">
                <a href="" className="nav-side-link">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon icon-sidebar" viewBox="0 0 512 512"><rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" x="48" y="80" width="416" height="384" rx="48"/><circle cx="296" cy="232" r="24"/><circle cx="376" cy="232" r="24"/><circle cx="296" cy="312" r="24"/><circle cx="376" cy="312" r="24"/><circle cx="136" cy="312" r="24"/><circle cx="216" cy="312" r="24"/><circle cx="136" cy="392" r="24"/><circle cx="216" cy="392" r="24"/><circle cx="296" cy="392" r="24"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M128 48v32M384 48v32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M464 160H48"/></svg>
                <p className="nav-side-text">Meal Planing</p>
               
                </a>

            </li>
            <li className="nav-siebar-item"><a className="nav-side-link">
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon icon-sidebar" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                <p>My saved Receipies</p>
                </a></li>
           
            </div>
            <li className="nav-siebar-item nav-siebar-last">
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon  icon-sidebar" viewBox="0 0 512 512"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
            <p>My saved Receipies</p>
            </li>
        </ul>

        </nav>

    )
}
export default NavSideBar;