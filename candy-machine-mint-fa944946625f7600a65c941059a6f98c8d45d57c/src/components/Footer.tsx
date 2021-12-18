import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-5/6 border-t-2 lg:px-24 h-52 items-center justify-center">
      <div className="flex items-center justify-center space-x-12 lg:space-x-24 py-8">
        <a href="https://twitter.com/SpaceSharksNFT">
          <FaTwitter size="5rem" />
        </a>
        <a href="https://discord.gg/5JQVWXZ9hS">
          <FaDiscord size="5rem" />
        </a>
      </div>
      <p className="text-center">all rights reserved ©</p>
      <p className="text-center">Created by NEOTECH ART</p>
    </div>
  );
}

export default Footer;
