import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">OurCart was developed by Bill Risher, see more of his work at <a href="https://billrisher.com">billrisher.com</a>.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          {/*<li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>*/}
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
