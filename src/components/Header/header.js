import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assect/1-removebg-preview (1).png'; // Adjust the relative path as per your folder structure

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // For the mobile hamburger menu
    const [activeDropdown, setActiveDropdown] = useState(null); // For dropdown menus

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu
        setActiveDropdown(null); // Close any active dropdown
    };

    const toggleDropdown = (menuName) => {
        setActiveDropdown(activeDropdown === menuName ? null : menuName);
    };

    return (
        <header>
            {/* Top Attention Bar */}
            <div className="attention-bar">
                <span role="img" aria-label="alert">📢</span>
                <strong>Attention:</strong> File GSTR 9/9C by 31 Dec — Avoid Penalties Now!{' '}
                <Link to="/contact" className="attention-link" onClick={(e) => e.stopPropagation()}>
                    Talk to our expert
                </Link>
            </div>

            {/* Main Navigation */}
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="Company Logo" />
                </div>

                {/* Menu Items */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#incorporation" onClick={() => toggleDropdown('incorporation')} aria-expanded={activeDropdown === 'incorporation'}>
                            Incorporation ▼
                        </a>
                        {activeDropdown === 'incorporation' && (
                            <ul className="dropdown-menu" onClick={closeMenu}>
                                <li><Link to="/privatelimitedcompany" onClick={closeMenu}>Private Limited Company</Link></li>
                                <li><Link to="/limitedliabilitypartnership" onClick={closeMenu}>Limited Liability Partnership</Link></li>
                                <li><Link to="/onepersoncompany" onClick={closeMenu}>One Person Company</Link></li>
                                <li><Link to="/soleproprietorship" onClick={closeMenu}>Sole Proprietorship</Link></li>
                                <li><Link to="/section8companypartnership" onClick={closeMenu}>Section 8 Company Partnership</Link></li>
                                <li><Link to="/trustregistration" onClick={closeMenu}>Trust Registration</Link></li>
                                <li><Link to="/publiclimitedcompany" onClick={closeMenu}>Public Limited Company</Link></li>
                                <li><Link to="/microfinancecompany" onClick={closeMenu}>Micro Finance Company</Link></li>
                                <li><Link to="/producercompany" onClick={closeMenu}>Producer Company</Link></li>
                                <li><Link to="/indiansubsidiary" onClick={closeMenu}>Indian Subsidiary</Link></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a href="#registration" onClick={() => toggleDropdown('registration')} aria-expanded={activeDropdown === 'registration'}>
                            Registration ▼
                        </a>
                        {activeDropdown === 'registration' && (
                            <ul className="dropdown-menu" onClick={closeMenu}>
                                <li><Link to="/startup-india" onClick={closeMenu}>Startup India</Link></li>
                                <li><Link to="/darpan-registration" onClick={closeMenu}>Darpan Registration</Link></li>
                                <li><Link to="/digital-signature" onClick={closeMenu}>Digital Signature</Link></li>
                                <li><Link to="/fssai-registration" onClick={closeMenu}>FSSAI Registration</Link></li>
                                <li><Link to="/udyam-registration" onClick={closeMenu}>Udyam Registration</Link></li>
                                <li><Link to="/fcra-registration" onClick={closeMenu}>FCRA Registration</Link></li>
                                <li><Link to="/12a-and-80g-registration" onClick={closeMenu}>12A and 80G Registration</Link></li>
                                <li><Link to="/pf-registration" onClick={closeMenu}>PF Registration</Link></li>
                                <li><Link to="/esi-registration" onClick={closeMenu}>ESI Registration</Link></li>
                                <li><Link to="/professional-tax-registration" onClick={closeMenu}>Professional Tax Registration</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/mcaservices" onClick={closeMenu}>MCA Services</Link></li>

                    <li>
                        <a href="#companyconversion" onClick={() => toggleDropdown('companyconversion')} aria-expanded={activeDropdown === 'companyconversion'}>
                            Company Conversion ▼
                        </a>
                        {activeDropdown === 'companyconversion' && (
                            <ul className="dropdown-menu" onClick={closeMenu}>
                                <li><Link to="/private-limited-to-public-limited-company" onClick={closeMenu}>Private Limited to Public Limited Company</Link></li>
                                <li><Link to="/opc-to-private-limited-company" onClick={closeMenu}>OPC to Private Limited Company</Link></li>
                                <li><Link to="/proprietorship-to-private-limited-company" onClick={closeMenu}>Proprietorship to Private Limited Company</Link></li>
                                <li><Link to="/partnership-firm-to-llp" onClick={closeMenu}>Partnership Firm to LLP</Link></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a href="#trademark" onClick={() => toggleDropdown('trademark')} aria-expanded={activeDropdown === 'trademark'}>
                            Trademark ▼
                        </a>
                        {activeDropdown === 'trademark' && (
                            <ul className="dropdown-menu" onClick={closeMenu}>
                                <li><Link to="/trademark-registration" onClick={closeMenu}>Trademark Registration</Link></li>
                                <li><Link to="/trademark-search" onClick={closeMenu}>Trademark Search</Link></li>
                                <li><Link to="/trademark-certificate" onClick={closeMenu}>Trademark Certificate</Link></li>
                                <li><Link to="/trademark-hearing" onClick={closeMenu}>Trademark Hearing</Link></li>
                                <li><Link to="/trademark-renewal" onClick={closeMenu}>Trademark Renewal</Link></li>
                                <li><Link to="/expedited-tm-registration" onClick={closeMenu}>Expedited TM Registration</Link></li>
                                <li><Link to="/logo-designing" onClick={closeMenu}>Logo Designing</Link></li>
                            </ul>
                        )}
                    </li>
                      {/* GST Dropdown */}
                                        <li>
                                            <a href="#gst" onClick={() => toggleDropdown('gst')} aria-expanded={activeDropdown === 'gst'}>
                                                GST ▼
                                            </a>
                                            {activeDropdown === 'gst' && (
                                                <ul className="dropdown-menu gst-menu">
                                                    <li className="dropdown-section">
                                                        <h4>Composite /Regular GST Dealer</h4>
                                                        <ul>
                                                            <li><Link to="/composite-gst-registration" onClick={closeMenu}>GST Registration</Link></li>
                                                            <li><Link to="/composite-gst-return" onClick={closeMenu}>GST Return</Link></li>
                                                            <li><Link to="/composite-gst-annual-return" onClick={closeMenu}>GST Annual Return</Link></li>
                                                            <li><Link to="/gst" onClick={closeMenu}>Other</Link></li>
                                                        </ul>
                                                   
                                                    </li>
                                                </ul>
                                            )}
                                        </li>

                    <li><Link to="/bookkeeping" onClick={closeMenu}>Book Keeping</Link></li>
                  
                    <li><Link to="/incometax" onClick={closeMenu}>Income Tax</Link></li>
                </ul>

                {/* Contact Button */}
                <div className="contact">
                    <Link to="/contact" className="contact" onClick={closeMenu}>Contact</Link>
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
            </nav>
        </header>
    );
};

export default Header;
