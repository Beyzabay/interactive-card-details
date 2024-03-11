import * as yup from "yup";

export const formSchema = yup.object().shape({
  text: yup.string().required("Can't be blank"),
  number: yup.number().typeError("Wrong format, numbers only").required("Can't be blank"),
  year: yup.string().required(""),
  month: yup.string().required("Can't be blank"),
  cvc: yup.string().required("Can't be blank"),
});