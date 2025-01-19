import { Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import HeaderDashboard from "../../sharedashboard/HeaderDashboard";
import useAuth from "./../../../hooks/useAuth";
import useSecureAxios from "./../../../hooks/useSecureAxios";

const TABLE_HEAD = [
  "Transaction Id",
  "Camp Name",
  "Camp Fees",
  "Payment Status",
  "Confirmation Status",
  "Date",
];

const PaymentHistory = () => {
  const secureAxios = useSecureAxios();
  const { user } = useAuth();

  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await secureAxios.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  console.log(paymentHistory);
  return (
    <div>
      <HeaderDashboard title={"Payment history"} />
      <div className="mt-10 mr-6">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((historyItem) => (
                <tr key={historyItem?._id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {historyItem?.transactionId}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {historyItem?.campName}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      $ {historyItem?.campFees}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {historyItem?.paymentStatus}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-semibold p-1 rounded-md inline-block px-3 `}
                    >
                      {historyItem?.confirmationStatus}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-semibold p-1 rounded-md inline-block px-3 `}
                    >
                      {historyItem?.date}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default PaymentHistory;
