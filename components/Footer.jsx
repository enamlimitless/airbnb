import {
  GlobeAltIcon
} from "@heroicons/react/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 border-bottom max-w-4xl  mx-auto px-10  py-5 text-xs text-gray-600">
        <div className="text-gray-800 space-y-4 px-3">
          <h4 className="font-bold text-lg">Support</h4>
          <p>Help Center</p>
          <p> Cancellation options</p>
          <p>Safety information</p>
          <p>Our COVID-19 Response</p>
          <p>Supporting people with disabilities</p>
          <p>Report a neighborhood concern</p>
        </div>
        <div className="text-gray-800 space-y-4 px-2">
          <h4 className="font-bold text-lg">Community</h4>
          <p>Airbnb.org: disaster relief housing</p>
          <p>Support Afghan refugees</p>
          <p>Combating discrimination</p>
        </div>
        <div className="text-gray-800 space-y-4 px-2">
          <h4 className="font-bold text-lg">Hosting</h4>
          <p>Try hosting</p>
          <p>AirCover: protection for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>
        <div className="text-gray-800 space-y-4 px-2">
          <h4 className="font-bold text-lg">About</h4>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Lux</p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-4xl mx-auto py-4">
        <div className="flex">
          <p>&copy; 2022 Airbnb, Inc.</p>
          <ul className="flex px-5">
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="flex justify-end md:grid-cols-2">
          <GlobeAltIcon className="h-6 cursor-pointer text-gray-700 px-3" /> English
          (US)
          <p className="px-5">$ USD</p>
          <ul className="flex px-5">
            <li>
              <GlobeAltIcon className="h-6 cursor-pointer text-gray-700" />
            </li>
            <li>
              <GlobeAltIcon className="h-6 cursor-pointer text-gray-700" />
            </li>

            <li>
              <GlobeAltIcon className="h-6 cursor-pointer text-gray-700" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
