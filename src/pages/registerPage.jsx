import { fetchCreateUser } from '../redux/operation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(fetchCreateUser(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-2 flex flex-col items-start gap-4"
    >
      <input
        className="ml-6 rounded-lg bg-blue-500 px-2 text-white"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        className="ml-6 rounded-lg bg-blue-500 px-2 text-white"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        className="ml-6 rounded-lg bg-blue-500 px-2 text-white"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button
        className="ml-auto rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-green-600 active:bg-rose-700"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
export default Register;
