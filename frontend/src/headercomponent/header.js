function Header()
{
    return(
        <div>

  {/* Basic */}
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  {/* Mobile Metas */}
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/* Site Metas */}
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>FRUIT BASKET</title>

  {/* slider stylesheet */}
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />

  {/* bootstrap core css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

  {/* fonts style */}
  <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Dosis:400,600,700|Poppins:400,600,700&display=swap" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="/css/style.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="/css/responsive.css" rel="stylesheet" />

  <div className="hero_area">
    {/* header section strats */}
    <div className="brand_box">
      <a className="navbar-brand" href="index.html">
        <span>
        FRUIT BASKET
        </span>
      </a>
    </div>
    {/* end header section */}
    <div>
{/* slider section */}
<section className=" slider_section position-relative">
  <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="img-box">
          <img src="images/slider-img.jpg" alt=""/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="img-box">
          <img src="images/slider-img.jpg" alt=""/>
        </div>
      </div>
      <div className="carousel-item">
        <div className="img-box">
          <img src="images/slider-img.jpg" alt=""/>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="sr-only">Next</span>
    </a>
  </div>
</section>
{/* end slider section */}
      </div>
     </div>
      </div> 
    );
}
export default Header;