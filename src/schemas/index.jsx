import * as Yup from "yup";
export const signupschema = Yup.object({
  name: Yup.string().min(2).max(10).required("Please enter your name"),
  number: Yup.string()
    .required("Mobile number is required")
    .matches(/\+91\d{10}/, "10 digit number"),
  selectedcity: Yup.string().required("please select any one"),
  gender: Yup.string().required("Please select Gender"),
  selectedcontry: Yup.string().required("Please select one"),
  dateofbirth: Yup.string().required("Please select DOB"),
  email: Yup.string().email().required("Please enter your emali"),
  password: Yup.string().min(6).required("Please fill paswword"),
  confpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
