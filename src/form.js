import { Form } from "react-final-form";
import { Button, Checkbox } from "@material-ui/core";
import { TextField, makeValidate } from "mui-rff";
import * as yup from "yup";

const onSubmit = () => {};

const shape = {
  name: yup.string().required(),
  email: yup.string().email(),
  phone: yup
    .string()
    .matches(/^\+?\d*$/, "Puhelinnumero sisältää kiellettyjä merkkejä"),
};
const schema = yup.object().shape(shape);

const validate = makeValidate(schema);

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <TextField name="name" label="Nimi" required={true}></TextField>
        <TextField
          name="email"
          label="Sähköpostiosoite"
          required={true}
        ></TextField>
        <TextField name="phone" label="Puhelinnumero"></TextField>
        <Checkbox
          inputProps={{ "aria-label": "primary checkbox" }}
          required={true}
        ></Checkbox>
        <Button type="submit">Submit</Button>
      </form>
    )}
  />
);

export default MyForm;
