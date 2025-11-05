export type PaymentRequest = {
  amount: string;
  auth_id: string;
  from_payer: string;
};

export type PaymentResponse = {
  message: string;
  data: {
    status: string;
    amount: string;
    transaction_id: string;
    charges_id: string;
    from_payer: string;
  } | null;
  isError: boolean;
};

export type VerifyPaymentRequest = {
  transaction_id: string;
  auth_id: string;
};

export type VerifyPaymentResponse = {
  message: string;
  data: {
    status: string;
    amount: string;
    transaction_id: string;
    charges: string;
    from_payer: string;
  } | null;
  isError: boolean;
};
