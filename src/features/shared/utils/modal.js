export const Modal = {
  email: {
    type: "email",
    required: "Please enter your email",
    name: "email",
    placeholder: "Enter email",
    minLength: {
      value: 5,
      message: "Email should be at least 5 characters long",
    },
    maxLength: {
      value: 320,
      message: "Email should be no more than 320 characters long",
    },
    pattern: {
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: "password",
    required: "Password is required",
    name: "password",
    placeholder: "Enter password",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/,
      message:
        "Must include uppercase, lowercase, number, and special character",
    },
  },
  fullName: {
    type: "text",
    required: "Full name is required",
    name: "fullName",
    placeholder: "Enter full name",
    minLength: {
      value: 3,
      message: "Full name must be at least 3 characters long",
    },
    maxLength: {
      value: 70,
      message: "Full name cannot exceed 70 characters",
    },
    pattern: {
      value: /^[a-zA-Z ]+$/,
      message: "Invalid name. Name must contain only alphabetic characters",
    },
  },
};
