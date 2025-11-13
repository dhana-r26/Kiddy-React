import React from 'react'
import image1 from "../images/logo.svg"

const Bottomcontent = () => {
  return (
    <div>
      {/* <section class="container pt-5">
     <div class="bg-dark text-white rounded p-4">
   <div class="row row-cols-md-2 row-cols-sm-1 row-cols-lg-4 justify-content-center align-items-center g-3">
   
      <div class="d-flex gap-2">
      <div>
      <i class="fa-solid fa-credit-card"></i>
      </div>
      <div>
        <p class="h6">Secure Payments</p>
        <p>Tellus gravida ipsum aut facilisis tempus at et aliquam estsem.</p>
      </div>
      </div>
  
        <div class="d-flex gap-2">
      <div>
   <i class="fa-solid fa-truck-fast"></i>
      </div>
      <div>
    <p class="h6">Free Shipping</p>
    <p>Non pulvinar aenean ultrices lectus vitae imperdiet aeu.</p>

      </div>
      </div>

   
           <div class="d-flex gap-2">
      <div>
<i class="fa-solid fa-comments"></i>
      </div>
      <div>
<p class="h6">24/7 Support</p>
<p>Nullam iaculis vestibulum arcu id urnain pellentesque quis.</p>
      </div>
      </div>
  

           <div class="d-flex gap-2">
      <div>
     <i class="fa-solid fa-gift"></i>
      </div>
      <div>
<p class="h6">Gifts & Sales</p>
        <p>Aliquet ullamcorper leo mi vel sit pretium euismod eget libero.</p>

      </div>
      </div>
      <div>
  </div>

</section> */}


<section class="container pt-5">
 
  <div class="d-flex p-5">
<div class="col-6">
  <div>
<img src={image1} alt="logo" height="60px" width="90px"/>
</div>
<div>
  <p class="text-muted fs-5">Discover our unique assortment of children's apparel and playthings in preparation for the upcoming fall season.</p>
</div>
</div>
<div class="col-6 d-flex justify-content-end">
  <div class="d-flex gap-2">
        <div class="rounded-pill">
          <i class="fa-solid fa-phone bg-dark text-light rounded-circle p-1"></i>
          </div>
          <div><p class="h6">+73 099 321 312</p></div>
        </div>
    </div>
    </div>
    <hr class="text-muted"/>
</section>

<section class="container">
  <center>
<div class="row pt-5 ps-5">
  <div class="col-lg-3 col-md-6 col-sm-12">
    <p class="fs-4"><b>Shop</b></p>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Dresses & Suits</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Shoes & Socks</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Blouses & T-Shirts</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Toys & Games</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Caps & Accessories</a>
  </div>
    <div class="col-lg-3 col-md-6 col-sm-12">
    <p class="fs-4"><b>Company</b></p>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">About Us</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">FAQ</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Our News</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Our Story</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Contact Us</a>
  </div>
    <div class="col-lg-3 col-md-6 col-sm-12">
    <p class="fs-4"><b>Useful</b></p>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Site Map</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Affiliate Area</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Delivery</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Locations</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Collaboration</a>
  </div>
    <div class="col-lg-3 col-md-6 col-sm-12">
    <p class="fs-4"><b>Legal</b></p>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Shipping Policy</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Returns & Exchanges</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Terms of Use</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Privacy Policy</a><br/>
    <a class="text-dark h6 text-decoration-none" href="#" role="button">Cookies Policy</a>
  </div>
</div>
</center>
</section>
    </div>
  )
}

export default Bottomcontent
