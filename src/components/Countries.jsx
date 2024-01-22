import { useEffect, useState, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

const CustomDropdown = ({ countries }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const dropdownRef = useRef(null);

  const handleSelectChange = (iso2) => {
    const selectedCountry = countries.find((country) => country.iso2 === iso2);
    setSelectedValue(iso2);
    setSelectedCountry(selectedCountry);
    setDropdownOpen(false);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  useEffect(() => {
    // Simulate loading delay
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="relative inline-block text-left w-full sm:max-w-[30rem]"
      ref={dropdownRef}
    >
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition duration-150 ease-in-out"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {loading ? (
              <>
                <Skeleton
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                <Skeleton width={80} height={20} />
              </>
            ) : selectedCountry ? (
              <>
                {selectedCountry.flag && (
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-6 h-6 mr-2"
                  />
                )}
                {selectedCountry.name}
              </>
            ) : (
              "Select a country"
            )}
          </button>
        </span>
      </div>

      {dropdownOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg overflow-y-auto max-h-40">
          <div className="rounded-md bg-white shadow-xs">
            <ul>
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <li
                      key={index}
                      className="cursor-pointer flex items-center py-2 px-4"
                    >
                      <Skeleton
                        width={20}
                        height={20}
                        style={{ marginRight: "8px" }}
                      />
                      <Skeleton width={80} height={20} />
                    </li>
                  ))
                : countries.map((country) => (
                    <li
                      key={country.iso2}
                      onClick={() => handleSelectChange(country.iso2)}
                      className="cursor-pointer flex items-center py-2 px-4 hover:bg-gray-100"
                    >
                      {country.flag && (
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-6 h-6 mr-2"
                        />
                      )}
                      {country.name}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      )}
      <input
        type="hidden"
        value={selectedCountry ? selectedCountry.name : ""}
        name="country_name"
      />
    </div>
  );
};

CustomDropdown.propTypes = {
  countries: PropTypes.array.isRequired,
};

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries data from the API
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => {
        if (response.data && response.data.data) {
          setCountries(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return <CustomDropdown countries={countries} />;
};

export default Countries;
