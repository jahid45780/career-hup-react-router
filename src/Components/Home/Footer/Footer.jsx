const Footer = () => {
    return (
     
<footer className="  p-10 bg-base-200 text-base-content">
  <footer className=" grid grid-cols-2 lg:grid-cols-4 footer max-w-6xl mx-auto"  >
  <aside>
    <img className=" h-24 w-20 rounded-full" src="https://i.ibb.co/3THZqPr/career-growth-icon-image-suitable-for-mobile-apps-web-apps-and-print-media-vector.jpg" alt="" />
    <p>Career Hub<br/>Providing reliable tech since 2023</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </footer>
</footer>

    );
};

export default Footer;