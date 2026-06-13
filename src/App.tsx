import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import './App.css';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  pass: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type form = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>({ resolver: zodResolver(schema) });

  function onSubmit(data: form) {
    console.log('sumbited', data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <input {...register('pass')} placeholder="password" />
        <p>{errors.pass?.message}</p>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
