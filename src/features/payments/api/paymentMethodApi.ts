import { methods } from "../data/paymentMethods";
import { RemotePaymentMethod } from "../types";

export const getPaymentMethods = async () => {
  try {
    // const response = await fetch(
    //   "https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods?countryCode=AU"
    // );
    // const methods: RemotePaymentMethod[] = await response.json();
    return methods;
  } catch (error) {
    console.log("error", error);
  }
};
