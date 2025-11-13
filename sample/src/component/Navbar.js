import React from 'react'
import "./Navbar.css"
import image1 from "../images/logo.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light py-3">
                <div class="container-fluid px-0 gap-5">
                    <Link class="navbar-brand me-auto" to="/">
                        <img src={image1} alt="logo" height="50px" width="80px"/>
                    </Link>


                    <ul class="navbar-nav flex-row align-items-center d-lg-none">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/login">
                                <i class="fa-solid fa-user me-1"></i>
                                <span class="d-none d-md-inline">LOGIN</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">
                                <i class="fa-solid fa-bag-shopping me-1"></i>
                                <span class="d-lg-inline d-none">$0.00</span>
                            </Link>
                        </li>
                    </ul>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                   
                    <div class="collapse navbar-collapse mt-3 mt-lg-0" id="navbarNav">
                        <div class="col-lg-5 col-12 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                            <form class="d-flex w-100 w-lg-auto">
                                <input type="search" name="requirements" placeholder="What are you looking for" class="form-control nav1"/>
                                <select class="form-select text-muted d-none d-lg-block nav2"  aria-label="Select Category">
                                    <option selected>Select Category</option>
                                    </select>
                                <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>


                        <div class="col-lg-4 col-12 d-flex justify-content-center justify-content-lg-end">
                            <div class="d-flex align-items-center gap-2">
                                <div class="rounded-pill">
                                    <i class="fa-solid fa-phone bg-dark text-light rounded-circle p-1"></i>
                                </div>
                                <div><p class="h6 mb-0">+73 099 321 312</p></div>
                            </div>
                        </div>


                        <div class="d-lg-none mt-4">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                                <li class="nav-item"><Link class="nav-link active" to="/">HOME</Link></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMobile" role="button" data-bs-toggle="dropdown" aria-expanded="false">SHOP</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMobile">
                                        <li><Link class="dropdown-item" href="#">Variable Product</Link></li>
                                        <li><Link class="dropdown-item" href="#">Product Gallery</Link></li>
                                        <li><Link class="dropdown-item" href="#">Custom Tab</Link></li>
                                        <li><Link class="dropdown-item" href="#">Advanced Review</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><Link class="nav-link" to="/news">NEWS</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="#">ABOUT US</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="#">CONTACT US</Link></li>
                            </ul>
                           
                            <div class="pt-3">
                                <div><i class="fa-solid fa-location-dot"></i><h6>Address:</h6><p class="text-muted">Street Name, NY 38954</p></div>
                                <div><i class="fa-solid fa-phone-volume"></i><h6>Phone:<br/><button type="button" class="btn btn-link text-muted textdecor">578-393-4937</button></h6></div>
                                <div><i class="fa-solid fa-clock"></i><h6>Opening hours</h6><p class="text-muted">9AM - 5PM</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light d-none d-lg-block border-top border-bottom">
                <div class="container-fluid px-0">
                    <ul class="navbar-nav gap-3 me-auto">
                        <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">HOME</Link></li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownDesktop" role="button" data-bs-toggle="dropdown" aria-expanded="false">SHOP</Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownDesktop">
                                <li><Link class="dropdown-item" to="#">Variable Product</Link></li>
                                <li><Link class="dropdown-item" to="#">Product Gallery</Link></li>
                                <li><Link class="dropdown-item" to="#">Custom Tab</Link></li>
                                <li><Link class="dropdown-item" to="#">Advanced Review</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item"><Link class="nav-link" to="/news">NEWS</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="#">ABOUT US</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="#">CONTACT US</Link></li>
                    </ul>
                    <ul class="navbar-nav gap-3">
                          <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/login">
                                <i class="fa-solid fa-user me-1"></i>
                                <span class="d-none d-md-inline">LOGIN</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">
                                <i class="fa-solid fa-bag-shopping me-1"></i>
                                <span class="d-lg-inline d-none">$0.00</span>
                            </Link>
                        </li>
                        
                        <li class="nav-item"><Link class="nav-link" to="#"><i class="fa-solid fa-shuffle me-1"></i>COMPARE</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="#"><i class="fa-solid fa-heart me-1"></i>WISHLIST</Link></li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}

export default Navbar

