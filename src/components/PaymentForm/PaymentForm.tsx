import * as React from "react";
import cx from "classnames";
import Validation from "../../controller/validation";
import styles from "./PaymentForm.module.css";
import TextInput from "../common/TextInput/TextInput";

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}

export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}

const PaymentForm = () => {
  const [error, setError] = React.useState({
    email: "",
    name: "",
    address: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = React.useState<IErrors>({});
  const [formValues, setFormValues] = React.useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [isTouched, setIsTouched] = React.useState({
    name: false,
    address: false,
    phone: false,
    email: false,
  });

  /**
   * Returns whether there are any errors in the errors object that is passed in
   * @param {IErrors} errors - The field errors
   */
  const haveErrors = (formErrors: IErrors) => {
    let haveError: boolean = true;

    formErrors &&
      // eslint-disable-next-line array-callback-return
      Object.keys(formErrors).map((key: string) => {
        if (formErrors[key].length > 0) {
          haveError = true;
        } else {
          haveError = false;
        }
      });

    return haveError;
  };

  const handleError = (
    e: React.FormEvent<HTMLInputElement>,
    errorMsg: string
  ) => {
    console.log("Loggign Error msf", errorMsg);
    if (errorMsg) {
      setError({
        ...error,
        [e.currentTarget.name]: true,
      });
      setFormErrors({
        ...formErrors,
        [e.currentTarget.name]: errorMsg,
      });
    } else {
      setError({
        ...error,
        [e.currentTarget.name]: false,
      });
      setFormErrors({
        ...formErrors,
        [e.currentTarget.name]: "",
      });
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleTouched = (e: React.FormEvent<HTMLInputElement>) => {
    setIsTouched({
      ...isTouched,
      [e.currentTarget.name]: true,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // TODO: Add some Validation
    console.log("Submitting Form Value");
  };

  return (
    <div className={cx(styles.container)}>
      <h5 className={cx(styles.header)}>Payment Form</h5>
      <form onSubmit={(e: any) => handleSubmit(e)}>
        <TextInput
          label="Name"
          name="name"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleChange(e);
            console.log("Name Touched", isTouched.name);
            isTouched.name
              ? Validation.vailidName(e.currentTarget.value)
                ? handleError(e, "")
                : handleError(e, "Name must be at least 3 character long")
              : handleError(e, "");
          }}
          placeholder="John Kowalsky"
          onBlur={(e: React.FormEvent<HTMLInputElement>) => {
            handleTouched(e);
            Validation.vailidName(e.currentTarget.value)
              ? handleError(e, "")
              : handleError(e, "Name must be at least 3 character long");
          }}
          error={error.name ? true : false}
          errorMsg={formErrors.name}
          required
        />
        <TextInput
          label="Address"
          name="address"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleChange(e);
            isTouched.address
              ? Validation.isInputEmpty(e.currentTarget.value)
                ? handleError(e, "Please input your Address")
                : handleError(e, "")
              : handleError(e, "");
          }}
          onBlur={(e: React.FormEvent<HTMLInputElement>) => {
            handleTouched(e);
            Validation.isInputEmpty(e.currentTarget.value)
              ? handleError(e, "Please input your Address")
              : handleError(e, "");
          }}
          error={error.address ? true : false}
          errorMsg={formErrors.address}
          required
        />
        <TextInput
          label="Phone"
          name="phone"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleChange(e);
            isTouched.phone
              ? !Validation.validPhone(e.currentTarget.value)
                ? handleError(e, "must be 9 digits")
                : handleError(e, "")
              : handleError(e, "");
          }}
          onBlur={(e: React.FormEvent<HTMLInputElement>) => {
            handleTouched(e);
            !Validation.validPhone(e.currentTarget.value)
              ? handleError(e, "must be 9 digits")
              : handleError(e, "");
          }}
          error={error.phone ? true : false}
          errorMsg={formErrors.phone}
          placeholder="+48"
        />
        <TextInput
          label="E-mail"
          name="email"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleChange(e);
            isTouched.email && !Validation.validEmail(e.currentTarget.value)
              ? handleError(e, "Please input a Valid Email")
              : handleError(e, "");
          }}
          error={error.email ? true : false}
          onBlur={(e: React.FormEvent<HTMLInputElement>) => {
            handleTouched(e);
            !Validation.validEmail(e.currentTarget.value)
              ? handleError(e, "Please input a Valid Email")
              : handleError(e, "");
          }}
          errorMsg={formErrors.email}
          type="email"
          required
        />
        <div className={styles.btnContainer}>
          <button
            type="submit"
            className={cx(
              styles.submitBtn,
              styles.mxauto,
              `${haveErrors(formErrors) && styles.dNone}`
            )}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
