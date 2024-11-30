import { useEffect } from "react";

const EsewaPaymentRedirect = ({ paymentData }) => {
  useEffect(() => {
    // Ensure we have payment data
    if (!paymentData || !paymentData.data) {
      console.error("No payment data available");
      return;
    }

    // Destructure the required fields from the payment data
    const {
      amount,
      tax_amount,
      total_amount,
      transaction_uuid,
      product_code,
      product_service_charge,
      product_delivery_charge,
      success_url,
      failure_url,
      signed_field_names,
      signature,
    } = paymentData.data;

    // Create a form element
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    // Define the fields to be sent
    const fields = [
      { name: "amount", value: amount },
      { name: "tax_amount", value: tax_amount },
      { name: "total_amount", value: total_amount },
      { name: "transaction_uuid", value: transaction_uuid },
      { name: "product_code", value: product_code },
      { name: "product_service_charge", value: product_service_charge },
      { name: "product_delivery_charge", value: product_delivery_charge },
      { name: "success_url", value: success_url },
      { name: "failure_url", value: failure_url },
      { name: "signed_field_names", value: signed_field_names },
      { name: "signature", value: signature },
    ];

    // Add fields to the form
    fields.forEach((field) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });

    // Append form to body and submit
    document.body.appendChild(form);
    form.submit();

    // Clean up
    return () => {
      document.body.removeChild(form);
    };
  }, [paymentData]);

  return null; // This component doesn't render anything
};

export default EsewaPaymentRedirect;
