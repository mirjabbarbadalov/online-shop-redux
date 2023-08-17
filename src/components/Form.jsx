import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../store/actions/cartActions";

export default function Form() {
  const dispatch = useDispatch();

  const productsInCart = useSelector((state) => state.cart.cartItems);
  const totalPrice = productsInCart.reduce(
    (total, product) => total + product.Price,
    0
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      adress: "",
      mobilePhone: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or mores")
        .required("Required"),

      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or mores")
        .required("Required"),
      age: Yup.number().min(18, "You must be atleast 18").required("Required"),
      adress: Yup.string().required("Required"),
      mobilePhone: Yup.string()
        .max(10, "Must be 10 characters")
        .min(10, "Must be 10 characters")
        .required("Required"),
    }),

    onSubmit: () => {
      console.log(`You bought and you paid ${Math.round(totalPrice)}$`);
      productsInCart.map((item) => console.log(item.Name, item.Price));
      dispatch(clearLocalStorage());
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2 className="checkout-header">Checkout Process</h2>
        <input
          type="text"
          placeholder="First name..."
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="form-error">{formik.errors.firstName}</p>
        ) : null}
        <input
          type="text"
          placeholder="Last name..."
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="form-error">{formik.errors.lastName}</p>
        ) : null}
        <input
          type="number"
          placeholder="Age..."
          id="age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.age && formik.errors.age ? (
          <p className="form-error">{formik.errors.age}</p>
        ) : null}
        <input
          type="text"
          placeholder="Adress..."
          id="adress"
          name="adress"
          value={formik.values.adress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.adress && formik.errors.adress ? (
          <p className="form-error">{formik.errors.adress}</p>
        ) : null}
        <input
          type="text"
          placeholder="Mobile phone..."
          id="mobilePhone"
          name="mobilePhone"
          value={formik.values.mobilePhone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.mobilePhone && formik.errors.mobilePhone ? (
          <p className="form-error">{formik.errors.mobilePhone}</p>
        ) : null}
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}
