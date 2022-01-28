import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Can not be empty!"),
  lastName: Yup.string().required("Can not be empty!"),
  age: Yup.number()
    .typeError("Age must be a number!")
    .required("Can not be empty!")
    .max(99, "Are you really that age ?")
    .positive()
    .integer(),
  tc: Yup.string()
    .typeError("IDN must be a number! ")
    .required("Can not be empty!")
    .matches(/^[0-9]+$/, "Must be only number")
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits"),
  reason: Yup.string().required("Can not be empty!"),
  address: Yup.string().required("Can not be empty!"),
});

const loginValidationSchema = Yup.object({
  admin: Yup.string()
    .required()
    .matches(/(kodluyoruz)/),
  password: Yup.string()
    .required()
    .matches(/(bootcamp159)/),
});

export { validationSchema, loginValidationSchema };
