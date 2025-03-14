import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const ContactForm = ({ addContact }) => {
  const validationSchema = object({
    name: string().min(3, "Minimum 3 characters").max(50, "Maximum 50 characters").required("Required"),
    number: string().min(3, "Minimum 3 characters").max(50, "Maximum 50 characters").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number:
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
