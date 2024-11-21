import { ErrorMessage } from "@hookform/error-message";

export const InputErrorMessage = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className="text-destructive mt-2 text-[14px]">{message}</p>
      )}
    />
  );
};
