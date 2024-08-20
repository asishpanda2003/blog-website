import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare, FaFacebook } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const location = useLocation();
  const { mode } = useContext(Context);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "180e788a-2ec8-41a6-b7f2-c6d3c481e707");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    alert("Sending Sucessfully")

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <footer
      className={
        location.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            "Create powerful full-stack applications effortlessly with the MERN
            stack—MongoDB, Express.js, React, and Node.js—offering seamless
            JavaScript integration from front-end to back-end for robust,
            dynamic web projects."
          </p>
          <p>
            <span>Email:</span> asishpanda018@gmail.com
          </p>
          <p>
            <span>Phone:</span> +91 7735007723
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <form className="news_letter">
          <div>
            <h3>Weekly NewsLetter</h3>
            <p>Get blog articles and offers via email</p>
          </div>
          <div>
            <input type="email" placeholder="Your Email" name="email" />
            <button  onSubmit={onSubmit}>Subscribe</button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="logo">
          ASISH <span>BLOG</span>
        </div>
        <div className="links">
          <Link to="https://www.instagram.com/heyy._asish/" target="_blank" aria-label="Instagram">
            <AiFillInstagram />
          </Link>
          <Link to="https://github.com/asishpanda2003" target="_blank" aria-label="GitHub">
            <FaGitSquare />
          </Link>
          <Link to="https://www.facebook.com/asish.kumar.panda" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </Link>
          <Link to="https://www.linkedin.com/in/asish-kumar-panda-34ba94255/" target="_blank" aria-label="LinkedIn">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
