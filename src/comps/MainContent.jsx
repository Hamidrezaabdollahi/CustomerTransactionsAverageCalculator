
import { useUser } from "../context/userContext";
import NumberToPersianWord from "number_to_persian_word";

function MainContent() {
  const {  sortedTransactions } = useUser();

  let total = 0;
  sortedTransactions?.map((transaction) => (total += Number(transaction.total)));
    
  if( !sortedTransactions)return;

  
  
  return (
    <div className="mainContent">
      <div className=" w-full rounded relative overflow-x-auto">
        {sortedTransactions && (
          <table className=" w-full text-sm text-center text-gray-500 ">
            <thead className="text-xs text-teal-900 border-b border-b-teal-600 uppercase bg-opacity-0 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  تاریخ
                </th>
                <th scope="col" className="px-6 py-3">
                  نماد
                </th>
                <th scope="col" className="px-6 py-3">
                  نوع معامله
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت
                </th>
                <th scope="col" className="px-6 py-3">
                  مقدار
                </th>
                <th scope="col" className="px-6 py-3">
                  کل
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions?.map((transaction) => (
                <tr key={transaction.transactionId} className="bg-opacity-0 border-b ">
                  <td className="px-6 py-4">{NumberToPersianWord.convertEnToPe(transaction.date)}</td>
                  <td className="px-6 py-4">{transaction.stockSymbol}</td>
                  <td
                    className={` ${
                      transaction.transactionType === "buy"
                        ? "text-emerald-500"
                        : "text-red-500"
                    } px-6 py-4`}
                  >
                    {transaction.transactionType === "buy" ? "خرید" : "فروش"}
                  </td>
                  <td className="px-6 py-4">{NumberToPersianWord.convertEnToPe(NumberToPersianWord.sliceNumber(transaction.price))}</td>
                  <td className="px-6 py-4">{NumberToPersianWord.convertEnToPe(NumberToPersianWord.sliceNumber(transaction.quantity))}</td>
                  <td className="px-6 py-4">{NumberToPersianWord.convertEnToPe(NumberToPersianWord.sliceNumber(transaction.total))}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="ext-xs text-teal-900 border-t-2  uppercase bg-opacity-0 ">
                <td className="px-6 py-4">گردش حساب</td>
                <td className="px-6 py-4"> {NumberToPersianWord.convertEnToPe(NumberToPersianWord.sliceNumber(total))} <strong>ریال</strong></td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}

export default MainContent;
