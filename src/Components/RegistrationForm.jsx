import { useState } from "react";

function RegistrationForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobile: "",
    gender: "",
    state: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const errors = {

    name:
      !form.name
        ? "Name is required"
        : !/^[A-Za-z ]+$/.test(form.name)
        ? "Only alphabets and spaces allowed"
        : "",

    email:
      !form.email
        ? "Email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? "Enter valid email"
        : "",

    password:
      !form.password
        ? "Password is required"
        : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)
        ? "Password needs uppercase, lowercase, number and 8 characters"
        : "",

    age:
      !form.age
        ? "Age is required"
        : Number(form.age) < 18 || Number(form.age) > 30
        ? "Age must be between 18 and 30"
        : "",

    mobile:
      !form.mobile
        ? "Mobile number is required"
        : !/^\d{10}$/.test(form.mobile)
        ? "Enter exactly 10 digits"
        : "",

    gender: !form.gender ? "Select gender" : "",

    state: !form.state ? "Select state" : ""

  };

  const isValid = Object.values(errors).every(
    error => error === ""
  );

  function handleChange(e) {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    setSubmitted(false);
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (isValid) {
      setSubmitted(true);
    }
  }

  return (

    <div className="card">

      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>

        <div className="group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={() => setTouched({...touched, name: true})}
            placeholder="Enter Name"
          />

          {touched.name && errors.name && (
            <small>{errors.name}</small>
          )}
        </div>

        <div className="group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={() => setTouched({...touched, email: true})}
            placeholder="Enter Email"
          />

          {touched.email && errors.email && (
            <small>{errors.email}</small>
          )}
        </div>

        <div className="group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={() => setTouched({...touched, password: true})}
            placeholder="Enter Password"
          />

          {touched.password && errors.password && (
            <small>{errors.password}</small>
          )}
        </div>

        <div className="group">
          <label>Age</label>

          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            onBlur={() => setTouched({...touched, age: true})}
            placeholder="Enter Age"
          />

          {touched.age && errors.age && (
            <small>{errors.age}</small>
          )}
        </div>

        <div className="group">
          <label>Mobile Number</label>

          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            onBlur={() => setTouched({...touched, mobile: true})}
            placeholder="Enter 10 Digit Mobile Number"
            maxLength="10"
          />

          {touched.mobile && errors.mobile && (
            <small>{errors.mobile}</small>
          )}
        </div>

        <div className="group">
          <label>Gender</label>

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            onBlur={() => setTouched({...touched, gender: true})}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {touched.gender && errors.gender && (
            <small>{errors.gender}</small>
          )}
        </div>

        <div className="group">
          <label>State</label>

          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            onBlur={() => setTouched({...touched, state: true})}
          >
            <option value="">Select State</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>

          {touched.state && errors.state && (
            <small>{errors.state}</small>
          )}
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>

        {submitted && (
          <h3 className="success">
            Registration Successful!
          </h3>
        )}

      </form>

    </div>
  );
}

export default RegistrationForm;