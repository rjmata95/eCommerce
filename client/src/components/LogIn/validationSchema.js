import * as Yup from "yup";

export default (isSignUp) => {
  if (!isSignUp)
    return Yup.object({
      email: Yup.string().email("Enter a valid email").required("Required"),
      password: Yup.string().required("Required"),
    });
  else
    return Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Required"),
      password: Yup.string().required("Required"),
      password2: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          if (value === undefined) return false;
          return this.parent.password === value;
        }
      ),
    });
};
