
const footer = `
<footer class="d-block mt-4 mb-4">
  <div class="container-fluid">
    <div class="row justify-content-between text-center text-lg-start">
      <!-- Our Services -->
      <div class="col-6 col-lg-4 col-lg-custom  text-columns">
        <h6 class="fw-bold">Our Services</h6>
        <ul class="list-unstyled">
          <li><a href="../../dataScience/datascience.html" class="text-decoration-none text-dark">Data Science</a></li>
          <li><a href="../../dataEngineering/dataEngineering.html" class="text-decoration-none text-dark">Data Engineering</a></li>
          <li><a href="../../data-visualization/dataVisualization.html" class="text-decoration-none text-dark">Data Visualization</a></li>
        </ul>
      </div>

      <!-- Our Products -->
      <div class="col-6 col-lg-4 col-lg-custom text-columns">
        <h6 class="fw-bold">Our Products</h6>
        <ul class="list-unstyled">
          <li><a class="text-decoration-none text-dark" href="https://www.kieverse.ai/">KiEVerse</a></li>
        </ul>
      </div>
 <!-- Our People -->
      <div class="col-6 col-lg-4 col-lg-custom text-columns">
        <h6 class="fw-bold">Our People</h6>
        <ul class="list-unstyled">
          <li><a class="text-decoration-none text-dark" href="../../Careers/life-@-Kie.html">Life at KiE Square</a></li>
        </ul>
      </div>
      <!-- Social + Logo -->
      <div class="col-12 col-md-12 col-lg-custom text-center ">
        <div class="mb-2">
          <!-- <a href="https://www.x.com/kiesquare"><i class="fa-brands fa-square-x-twitter me-2" style="font-size: 40px; color: black;"></i></a> --!>
          <a href="https://www.facebook.com/profile.php?id=61561187012133"><i class="fa-brands fa-square-facebook me-2" style="font-size: 40px; color: black;"></i></a>
          <a href="https://www.instagram.com/kie_square?igsh=Y3l1ZGdremRrMmNw"><i class="fa-brands fa-square-instagram me-2" style="font-size: 40px; color: black;"></i></a>
          <a href="https://www.linkedin.com/company/887833/"><i class="fa-brands fa-linkedin me-2" style="font-size: 40px; color: black;"></i></a>
          <a href="https://www.youtube.com/@KiESquareAnalytics-cz4uv"><i class="fa-brands fa-square-youtube me-2" style="font-size: 40px; color: black;"></i></a>
        </div>
        <div>
          <img src="../../Home/Images/kielogo.jpeg" alt="Additional Logo" class="img-fluid" style="max-width: 185px;">
        </div>
      </div>
    
      
      <!-- Newsroom -->
      <div class="col-6 h col-lg-custom text-columns">
        <h6 class="fw-bold">Newsroom</h6>
        <ul class="list-unstyled">
          <li><a class="text-decoration-none text-dark" href="../../Newsroom/Kie-Blogs/blogs.html">Blogs</a></li>
          <li><a class="text-decoration-none text-dark" href="../../Newsroom/pressRelease.html">Press Release</a></li>
          <li><a class="text-decoration-none text-dark" href="../../Newsroom/press-and-media.html">Press & Media</a></li>
        </ul>
      </div>

      <!-- Industries -->
      <div class="col-6 col-lg-4 col-lg-custom text-columns">
        <h6 class="fw-bold">Industries</h6>
        <ul class="list-unstyled">
          <li> <a class="text-decoration-none text-dark" href="../../Industries/CPG&Retail.html"> CPG & Retail</a></li>
          <!-- <li>Pharma & Lifesciences</li> --!>
                    <li> <a class="text-decoration-none text-dark" href="../../Industries/Telecom.html">Telecom</a></li>
                    <li> <a class="text-decoration-none text-dark" href="../../Industries/Banking&Insurance.html"> Banking & Insurance</a></li>
                    <li> <a class="text-decoration-none text-dark" href="../../Industries/Manufacturing&Distribution.html">Manufacturing </a></li>
                    <li> <a class="text-decoration-none text-dark" href="../../Industries/Government&PublicSector.html">Government Sector</a></li>        </ul>
      </div>

      <!-- About Us -->
      <div class="col-6 col-lg-4 col-lg-custom text-columns">
        <h6 class="fw-bold">About Us</h6>
        <ul class="list-unstyled">
          <li><a class="text-decoration-none text-dark" href="../../About-Page/about.html">About Us</a></li>
         <!-- <li><a class="text-decoration-none text-dark" href="#">KiE Journey</a></li> --!>
          <li><a class="text-decoration-none text-dark" href="../../About-Page/executive-leadership.html">Executive Leadership</a></li>
        </ul>
      </div>

      

    <div class="row mt-3 align-items-center">
      <div class="col-md-9 text-center text-md-start">
        <p class="mb-0">Copyright © 2024 KIE Square Corporation - All Rights Reserved</p>
      </div>
      <div class="col-md-3 text-center text-md-end">
      <strong>  <a href="../../Connect-with-us/connect.html" class="text-decoration-none text-black me-3">Contact Us</a> </strong>
        <a href="#" class="text-decoration-none text-black">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>

`

const  footerStyle = document.createElement('style');
footerStyle.textContent = `
@media (min-width: 992px) {
  footer .row > div {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (min-width: 992px) {
  .col-lg-custom {
    flex: 0 0 14.2857% !important;
    max-width: 15.2857% !important;
  }
}

`

document.getElementById('footer-container').innerHTML = footer;
document.head.appendChild(footerStyle);