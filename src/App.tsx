import { useForm } from 'react-hook-form';
import './App.css';

type form = { email: string; pass: string };
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>();

  function onSumbit(data: form) {
    console.log('sumbited', data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSumbit)}>
        <input
          {...register('email', { required: 'email is required' })}
          placeholder="email"
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('pass', {
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'password must be at least 6 characters',
            },
            maxLength: {
              value: 20,
              message: 'password must be less than 20 characters',
            },
          })}
          placeholder="password"
        />
        <p>{errors.pass?.message}</p>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
