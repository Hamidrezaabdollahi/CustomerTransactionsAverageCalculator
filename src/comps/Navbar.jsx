import { useUser } from "../context/userContext";
import NumberToPersianWord from "number_to_persian_word";


function Navbar() {
  const {validUser} = useUser()
  const user = validUser[0]

  if (!user) return 
  return (
    <div className="navbar">
      <div className="customerInfo">
        <h3>مشخصات کاربر</h3>
        <ul>
          <li>
            نام  <span>{user?.userFirstName}</span>
          </li>
          <li>
            نام خانوادگی  <span>{user?.userLastName}</span>
          </li>
          <li>
            نام پدر  <span>{user?.fatherName}</span>
          </li>
          <li>
            کد ملی  <span>{NumberToPersianWord.convertEnToPe(user?.userId)}</span>
          </li>
          <li>
            کد بورسی  <span>{user?.stockId}</span>
          </li>
          <li>
            شماره موبایل  <span>{NumberToPersianWord.convertEnToPe(user?.mobile)}</span>
          </li>
          <li>
            تلفن ثابت  <span>{NumberToPersianWord.convertEnToPe(user?.telephone)}</span>
          </li>
          <li>
            تاریخ تولد  <span>{NumberToPersianWord.convertEnToPe(user?.birthday)}</span>
          </li>
          <li>
            تاریخ ثبت نام  <span>{NumberToPersianWord.convertEnToPe(user?.signUpDay)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
