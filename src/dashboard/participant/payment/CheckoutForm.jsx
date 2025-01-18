import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../../../hooks/useAuth";
import useSecureAxios from "./../../../hooks/useSecureAxios";

const CheckoutForm = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const secureAxios = useSecureAxios();

  const {
    data: campFeesPayment = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["campFeesPayment"],
    queryFn: async () => {
      const res = await secureAxios.get(`/join-camps/${id}`);
      return res.data;
    },
  });

  const campFees = parseInt(campFeesPayment.campFees) || 1;
  console.log(campFees);

  useEffect(() => {
    secureAxios.post("/checkout-intent", { campFees: campFees }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [campFees, secureAxios]);

  //   useEffect(() => {
  //     secureAxios.post("/checkout-intent", { campFees: campFees }).then((res) => {
  //       setClientSecret(res.data.clientSecret);
  //     });
  //   }, [campFees, secureAxios]);

  console.log(campFeesPayment);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("paymentMethod error", error);
    } else {
      console.log("paymentMethod crate", paymentMethod);
    }

    const { paymentIntent, error: err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      }
    );

    if (err) {
      console.log("this is a confirmation error", err);
    } else {
      const payment = {
        name: user?.displayName,
        email: user?.email,
        campFees: campFees,
        transactionId: paymentIntent.id,
        campId: campFeesPayment.campId,
        joinId: campFeesPayment._id,
        campName: campFeesPayment.campName,
        date: new Date(),
        status: "pending",
      };

      secureAxios.post("/payment", payment).then((res) => {
        console.log("payment save", res.data);

        if (res.data.paymentCreate.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment Successfully ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div className="mt-10 payments max-w-2xl bg-camp-default p-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-camp-accent px-8 py-4 rounded-md text-lg mt-6 text-camp-background"
          type="submit"
        >
          Pay
        </button>
        <p>4242424242424242</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
