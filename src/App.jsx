import './App.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

function App() {
  const registerUser = () => {
    // console.log(formik.values);
    alert('Registered User');
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      kataSandi: '',
    },
    onSubmit: registerUser,
    validationSchema: yup.object({
      username: yup.string().required('Username harus diisi').min(3, 'Username minimal 3 karakter').max(10, 'Username maksimal 10 karakter'),
      email: yup.string().required('Email harus diisi').email('Email harus valid'),
      kataSandi: yup
        .string()
        .required('Kata sandi harus diisi')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Harus mengandung 8 karakter, 1 Uppercase, 1 Lowercase, 1 Number dan 1 Special Case karakter'),
    }),
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <div className="form-wrap">
        <h2>Form Example</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={handleInput} />
          {formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={handleInput} />
          {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="kataSandi" onChange={handleInput} />
          {formik.errors.kataSandi ? <div className="error">{formik.errors.kataSandi}</div> : null}
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default App;
