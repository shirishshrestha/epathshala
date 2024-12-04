import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
  }, [authStatus, authentication, navigate]);

  return <>{children}</>;
};

export const PaymentProtectedRoute = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const paymentStatus = useSelector(
    (state) => state.payment.isPaymentSuccessful
  );

  if (!authStatus || !paymentStatus) {
    return <Navigate to="/" replace />;
  }

  return children;
};
