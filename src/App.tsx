import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import './App.css';

async function mockSave(title: string) {
  await new Promise((r) => setTimeout(r, 1000));
  if (!title) throw new Error('Title Required');
}

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'saving..' : 'save'}
    </button>
  );
}

function App() {
  const [error, formAction] = useActionState(
    async (v: string, formData: FormData) => {
      try {
        await mockSave(formData.get('name') as string);
        return '';
      } catch (e) {
        return (e as Error).message;
      }
    },
    '',
  );
  return (
    <>
      <form action={formAction}>
        <input type="text" name="name" />
        <SubmitBtn />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
}

export default App;
