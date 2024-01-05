import { useState } from 'react';
import { fetchLoginUser } from '../redux/operation';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(fetchLoginUser(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-2 flex flex-col items-start gap-4"
    >
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
        Login
      </button>
    </form>
  );
};

export default Login;
