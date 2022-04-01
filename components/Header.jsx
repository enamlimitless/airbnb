import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-4 bg-white md:px-10">
      <Head>
        <link
          rel="shortcut icon"
          sizes="76x76"
          type="image/x-icon"
          href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
        />
        <title>
          Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes &amp;
          Experiences
        </title>
      </Head>
      <div className="flex relative cursor-pointer h-10 my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 border-gray-100 rounded-full p-2 py-1 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-2 flex-grow outline-none text-sm text-gray-900 placeholder-gray-900"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="h-8 hidden md:inline-flex bg-red-400 text-white p-2 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-end space-x-4">
        <p className="font-bold hidden md:inline-flex cursor-pointer">
          Become a Host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer text-gray-700" />
        <div className="border-2 flex items-center rounded-full px-2 hover:shadow-md cursor-pointer">
          <MenuIcon className="h-6 text-gray-500" />
          <UserCircleIcon className="h-8 text-gray-500" />
        </div>
      </div>
      {searchInput && (
        <div className="flex col-span-3 flex-col mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center pb-4 border-b">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-8 text-gray-800" />
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              min={1}
              className=" border w-14 ml-4 outline-red-500 px-1"
              type="number"
            />
          </div>
          <div className="flex flex-grow">
            <button>Search</button>
            <button className="text-red-600 px-8 py-4">Cancel</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
