import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const useEsewaPayment = ({ onSuccess, onError } = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createPaymentForm = (paymentData) => {
    if (!paymentData?.data) {
      onError?.("Invalid payment data");
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    const fields = [
      { name: "amount", value: paymentData.data.amount },
      { name: "tax_amount", value: paymentData.data.tax_amount },
      { name: "total_amount", value: paymentData.data.total_amount },
      { name: "transaction_uuid", value: paymentData.data.transaction_uuid },
      { name: "product_code", value: paymentData.data.product_code },
      {
        name: "product_service_charge",
        value: paymentData.data.product_service_charge,
      },
      {
        name: "product_delivery_charge",
        value: paymentData.data.product_delivery_charge,
      },
      { name: "success_url", value: paymentData.data.success_url },
      { name: "failure_url", value: paymentData.data.failure_url },
      {
        name: "signed_field_names",
        value: paymentData.data.signed_field_names,
      },
      { name: "signature", value: paymentData.data.signature },
    ];

    fields.forEach((field) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });

    return form;
  };

  const submitPayment = async (paymentData) => {
    try {
      setIsSubmitting(true);
      const form = createPaymentForm(paymentData);

      if (!form) return;

      document.body.appendChild(form);
      form.submit();
      onSuccess?.();

      // Cleanup form
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      }, 1000);
    } catch (error) {
      onError?.(error);
      toast({
        title: "Error!",
        description: "Payment submission failed",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitPayment,
  };
};

export default useEsewaPayment;
