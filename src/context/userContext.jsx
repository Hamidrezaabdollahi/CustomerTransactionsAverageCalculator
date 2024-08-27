import { createContext, useContext, useState } from "react";
// import data from "../db";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import useFetch from '../hooks/useFetch';

const UserContext = createContext();


export function UserProvider({ children }) {
  const [userIdInput, setUserIdInput] = useState();
  const {data, isLoading} = useFetch(`http://localhost:5000/users`, `userId=${userIdInput}`)
  const [values, setValues] = useState([
    new DateObject({ calendar: persian }).add(-30, "days"),
    new DateObject({ calendar: persian }).subtract(0, "days"),
  ]);
  
  const validUser = data
  const userTranses = validUser[0]?.transactions;

  const start = values[0];
  const end = values[1];

  const stringedStart = `${start?.year}/${String(start?.month).padStart(
    2,
    "0"
  )}/${String(start?.day).padStart(2, "0")}`;
  const stringedEnd = `${end?.year}/${String(end?.month).padStart(
    2,
    "0"
  )}/${String(end?.day).padStart(2, "0")}`;

  const sortedTransactions = userTranses?.filter(
    (item) =>
      stringedStart <= item.date && item.date <= stringedEnd
  );

 

  return (
    <UserContext.Provider
      value={{
        userIdInput,
        setUserIdInput,
        validUser,
        userTranses,
        sortedTransactions,
        values,
        setValues,
        isLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of ThemeProvier");
  return context;
}
