import React from 'react';
import { Link } from 'react-router-dom';
import img from "./assets/1.jpg";
import img from "./assets/2.jpg";

const Header = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStart.</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src =" 2.jpg" alt="Graphics" />
        <div>
          <p>
            SSL/TLS certificates are essential for enabling HTTPS on your servers(to performs encryption/ decryption) but if they are not used wisely (specially if their private keys are not protected safely) then this can cause data leaks by any attackers/hackers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
