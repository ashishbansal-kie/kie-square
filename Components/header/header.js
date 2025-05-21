const logoPath = window.location.protocol === "file:" 
    ? "../../Home/Images/kielogo.jpeg"
    : "/Home/Images/kielogo.jpeg";

const header = ` <header class="header" id="header-container">
<nav class="navbar navbar-expand-lg py-xl-4">
    <div class="container">
      <div data-aos="fade-right">
        <a href="../../index.html"><img src="${logoPath}" alt="logo" class="img-fluid" width="240"
            height="65"></a>
      </div>
      <div data-aos="fade-right">
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
          aria-label="Toggle navigation">
          <!-- <span class="navbar-toggler-icon"></span> -->
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </button>
      </div>

      <div class="collapse navbar-collapse text-center" id="navbarScroll" data-aos="fade-left">

        <ul class="navbar-nav ms-auto  p-lg-0 align-items-center">
          <li class="nav-item px-3 px-lg-0 py-1 dropdown navItem">
            <a class="nav-link dropdown-toggle text-dark fw-medium " href="#" role="button" aria-expanded="false">
              Our Services
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item fw-medium" href="../../dataScience/dataScience.html">Data Science</a></li>
              <li><a class="dropdown-item fw-medium" href="../../dataEngineering/dataEngineering.html">Data Engineering</a>
              </li>
              <li><a class="dropdown-item fw-medium" href="../../data-visualization/dataVisualization.html">Data
                  Visualization</a></li>
            </ul>
          </li>

          <li class="nav-item px-3 px-lg-0 py-1 dropdown navItem">
            <a class="nav-link dropdown-toggle text-dark fw-medium" href="#" target="_blank"
              role="button" aria-expanded="false">
              Our Products
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item fw-medium" href="https://www.kieverse.ai/">KiEVerse</a></li>
                <!-- <div class="kieVerseDropdown">
                  <a class="nav-link dropdown-toggle text-dark fw-medium kieVerseDropdown"
                    href="https://www.kieverse.ai/brand-intelligence.html" target="_blank" role="button"
                    aria-expanded="false">
                    Brandverse
                  </a>
                </div>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item fw-medium" href="https://www.kieverse.ai/brand-intelligence.html"
                      target="_blank">Digi-Cadence</a></li>
                </ul>
              </li>
              
              <li class="nav-item px-3 px-lg-0 py-1 dropend  ">
                <div class="kieVerseDropdown spend">
                  <a class="nav-link dropdown-toggle text-dark fw-medium "
                    href="https://www.kieverse.ai/spend-intelligence.html" role="button" aria-expanded="false">
                    Spendverse
                  </a>
                </div> -->
                <!-- <ul class="dropdown-menu">
                  <li><a class="dropdown-item fw-medium" href="https://www.kieverse.ai/spend-intelligence.html">SOV
                      Tool</a></li>
                  <li><a class="dropdown-item fw-medium" href="https://www.kieverse.ai/spend-intelligence.html">MCA
                      Tool</a></li>
                  <li><a class="dropdown-item fw-medium"
                      href="https://www.kieverse.ai/spend-intelligence.html">Simulator-Spend & Sales</a></li>
                  <li><a class="dropdown-item fw-medium" href="https://www.kieverse.ai/spend-intelligence.html">Campaign
                      Optimization</a></li>
                
                </ul>
              </li> -->

              
              <!-- <li class="nav-item px-3 px-lg-0 py-1 dropend">
                <div class="kieVerseDropdown">
                  <a class="nav-link dropdown-toggle text-dark fw-medium kieVerseDropdown"
                    href="https://www.kieverse.ai/market-intelligence.html" role="button" aria-expanded="false">
                    Sellverse
                  </a>
                </div>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item fw-medium"
                      href="https://www.kieverse.ai/market-intelligence.html">Market360</a></li>
                </ul>
              </li> -->
            </ul>
          </li>
          <li class="nav-item px-3 px-lg-0 py-1 dropdown insights navItem">

            <a class="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" aria-expanded="false">
              Our People
            </a>
            <ul class="dropdown-menu text-dark">
              
              <li><a class="dropdown-item fw-medium" href="../../Careers/life-@-Kie.html">Life at KiE Square</a></li>

            </ul>
          </li>
          
          <li class="nav-item px-3 px-lg-0 py-1 dropdown navItem">
            
            <a class="nav-link dropdown-toggle text-dark fw-medium " href="#" role="button" aria-expanded="false">
              Industries
            </a>
                        <ul class="dropdown-menu">
              <li><a class="dropdown-item fw-medium" href="../../Industries/CPG&Retail.html">CPG & Retail</a></li>
            <!--  <li><a class="dropdown-item fw-medium" href="#">Pharma & Lifesciences</a> --!>
              </li>
              <li><a class="dropdown-item fw-medium" href="../../Industries/Telecom.html">Telecom</a></li>
              <li><a class="dropdown-item fw-medium" href="../../Industries/Banking&Insurance.html">Banking & Insurance
              </a></li>
              <li><a class="dropdown-item fw-medium" href="../../Industries/Manufacturing&Distribution.html">Manufacturing & Distribution
              </a></li>
              <li><a class="dropdown-item fw-medium" href="../../Industries/Government&PublicSector.html">Government & Public Sector</a></li>
            </ul>
          </li>
         
          
          <li class="nav-item px-3 px-lg-0 py-1 dropdown insights navItem">
            <a class="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" aria-expanded="false">
              Newsroom
            </a>
          <ul class="dropdown-menu text-dark">
              <li><a class="dropdown-item fw-medium" href="../../Newsroom/Kie-Blogs/blogs.html">Blogs</a></li>
              <li><a class="dropdown-item fw-medium" href="../../Newsroom/pressRelease.html">Press Release</a></li>
              <li><a class="dropdown-item fw-medium" href="../../Newsroom/press-and-media.html">Press & Media</a></li>
              

            </ul>
          </li>

          <li class="nav-item px-3 px-lg-0 py-1 dropdown navItem">
            <!-- <a class="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a> -->
            <a class="nav-link dropdown-toggle text-dark fw-medium" href="#" role="button"
              aria-expanded="false">
              About Us
            </a>
            <ul class="dropdown-menu">
              
              <li><a class="dropdown-item fw-medium" href="../../About-Page/about.html">About Us</a></li>
            <!--  <li><a class="dropdown-item fw-medium" href="../../About-Page/about.html">KiE Journey</a></li> --!>
              <li><a class="dropdown-item fw-medium" href="../../About-Page/executive-leadership.html">Executive Leadership</a></li>
             
            </ul>
          </li>
        </ul>
        <button type="button" class="btn  border- align-items-center px-3 fw-medium connectButton"
          id="connect-btn">
          <a href="../../Connect-with-us/connect.html">Contact Us</a>
        </button>
      </div>
    </div>
  </nav>
</header>
`

const headerStyle = document.createElement('style');
headerStyle.textContent = `
.header{
z-index: 1000;
 position: sticky !important;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
}
.navbar {

    width: 100%;
   
    /* overflow: hidden; */
}
.dropdown-menu {
    display: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.dropdown:hover>.dropdown-menu,
.dropdown:focus-within>.dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
}

.dropend:hover>.dropdown-menu,
.dropend:focus-within>.dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
}

.dropdown-menu {
    margin-top: 0.5rem;
    margin-left: 0;
}

.dropend>.dropdown-menu {
    margin-top: 0;
    margin-left: 0.5rem;
}


@media screen and (min-width:769px) {
    .dropend:hover>.dropdown-menu {
        position: absolute;
        top: 0;
        left: 100%;
        margin-left: .125em;

    }

}

.dropdown-item:hover {
    background-color: #F0F0F0 !important;
    color: inherit !important;

}

.dropdown-item:active {
    background-color: #F0F0F0 !important;
    color: inherit !important;
}

.nav-item {
    font-size: 17px !important;
    justify-content: flex-end;
    align-items: center;

}

#connect-btn {
    font-size: 17px !important;
}

.dropdown-item {
    font-size: 17px !important;
}


.navItem {
    margin-left: 14px;
}
.dropdown-item {
    padding-left: 20px !important;
}

.kieVerseDropdown {
    padding-left: 10px;
}

.kieVerseDropdown:hover {
    background-color: #F0F0F0 !important;
    color: inherit !important;
}

.kieVerseDropdown:active {
    background-color: #F0F0F0 !important;
    color: inherit !important;
}

.spend {
    padding-left: 10px;
}

#connect-btn {
    border-radius: 50px;
    padding: 12px 40px;
    font-size: 17px;
    text-align: center;
    transition: all 0.3s ease;
    text-decoration: none;
    margin-left: 30px;
    background-color: rgba(235, 107, 107, 0.9);
    
}

#connect-btn a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
}

#connect-btn:hover {
    background-color: rgba(201, 68, 68, 0.9);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 9px rgba(201, 68, 68, 0.9), 0 0 15px rgba(0, 0, 0, 0.7);
}

#connect-btn a:hover {
    color: #fff;
}

#connect-btn:active {
    background-color: #c94e4e;
    transform: scale(1);
}
@media (min-width: 1200px) and (max-width: 1400px){
  .navbar .container {
    padding-left: 10px !important;
    padding-right: 10px !important;
    max-width: 100% !important;
  }
}
@media (max-width: 768px) {

    .navbar-collapse{
        position: fixed;
        transform: translateX(-100%);
        top: 60px;
        height: max-content;
        padding-bottom: 30px;
        width: 100%;
        background-color: #fff;
        transition: all 350ms ease-in-out;
    }
    .navbar-collapse.show {
        position: fixed;
        transform: translateX(0);
        top: 60px;
        left: 0;
    }
    .nav-item, .dropdown-item {
        width: 100%;
        padding: 0;
    }
    .connectButton {
        width: calc(100% - 32px);
        margin: 0 auto;
        padding: .75rem 0;
    }
    .hamburger {
    cursor: pointer;
    }
    
    .bar {
    display: block;
    background-color: #101010;
    width: 24px;
        height: 2px;
    margin: 6px auto; 
    transition: all 300ms ease-in-out;
    }
    
    .hamburger.active .bar:nth-child(2) {
    opacity: 0
    }
    
    .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    }

   
}
`
document.getElementById("header-container").innerHTML = header;
document.head.appendChild(headerStyle);

