import persian from "react-date-object/calendars/persian";
import { useState } from "react";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import { HiCalendar } from "react-icons/hi";
import "react-multi-date-picker/styles/colors/teal.css";
import { useUser } from "../context/userContext";

function Header() {
  const { values, setValues } = useUser();

  function handleAverage(periode) {
    periode === "oneMonth"
      ? setValues([
          new DateObject({ calendar: persian }).add(-30, "days"),
          new DateObject({ calendar: persian }).subtract(0, "days"),
        ])
      : setValues([
          new DateObject({ calendar: persian }).add(-90, "days"),
          new DateObject({ calendar: persian }).subtract(0, "days"),
        ]);
  }

  const { userIdInput, setUserIdInput } = useUser();

  return (
    <div className="header">
      <div className="headerMain">
        <HeaderForm userIdInput={userIdInput} setUserIdInput={setUserIdInput} />
        <PickRange values={values} setValues={setValues} />
        <AverageController handleAverage={handleAverage} />
      </div>
    </div>
  );
}

export default Header;

const HeaderForm = ({ setUserIdInput }) => {
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setUserIdInput(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-4/12 mx-4">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-teal-500 dark:text-teal-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={inputValue}
          autoComplete="off"
          autoCorrect="off"
          onChange={(e) => setInputValue(e.target.value)}
          type="search"
          id="search-input"
          className="focus:outline-none focus:border-teal-900 block w-full p-4 ps-10 text-sm text-teal-900 border border-teal-500 rounded-lg bg-white focus:ring-teal-500  dark:bg-teal-700 dark:border-teal-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          placeholder="کد ملی کاربر را وارد کنید"
          required
        ></input>
        <button
          type="submit"
          className="text-teal-100 absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          جست و جو
        </button>
      </div>
    </form>
  );
};

const PickRange = ({ values, setValues }) => {
  // const one = new DateObject({ calendar: persian }).format();
  // const two = new DateObject({ calendar: persian }).add(10, "days").format();
  // const transitionDate = new DateObject({ calendar: persian })
  //   .add(5, "days")
  //   .format();
  // console.log(one, transitionDate, two);
  // console.log(two > transitionDate && transition > one);

  return (
    <div className="datePickerContainer mx-4">
      <div>
        <DatePicker
          onChange={setValues}
          value={values}
          animations={[transition({ duration: 800, from: 35 })]}
          className="teal"
          range
          dateSeparator=" ~ "
          rangeHover
          inputClass="custom-input"
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        />
      <HiCalendar className="headerIcon" />
      </div>
    </div>
  );
};

const AverageController = ({ handleAverage }) => {
  return (
    <>
      <button
        onClick={() => handleAverage("oneMonth")}
        className=" font-thin mx-4 bg-white hover:bg-teal-900 text-teal-700  hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
      >
        گردش حساب یک ماه
      </button>
      <button
        onClick={() => handleAverage("threeMonth")}
        className=" font-thin mx-4 bg-white hover:bg-teal-900 text-teal-700  hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
      >
        گردش حساب سه ماه
      </button>
    </>
  );
};
