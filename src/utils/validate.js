export const EmailValidate = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Email id is not valid";

  return null;
};
export const PasswordValidate = (password) => {
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(password);

  if (!isPasswordValid)
    return "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";

  return null;
};
