type props = {
  title: string;
  description: string;
  data: string;
};

export function Card({ cardObj }: { cardObj: props }) {
  // export function Card({ title, description, data }: props) {
  return (
    <>
      <h2>{cardObj.title}</h2>
      <p>{cardObj.description}</p>
      <p>{cardObj.data}</p>
    </>
  );
}
