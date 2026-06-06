import './App.css';
import { Card } from './card';

function App() {
  // const nameData = 'Card Name';
  // const descriptionData = 'Card Description';
  // const data = 'test data';

  const card1 = {
    title: 'test 1',
    description: 'test 1 description',
    data: 'test 1 data',
  };
  return (
    <>
      {/* <Card title={nameData} description={descriptionData} data={data} /> */}
      <Card cardObj={card1} />
    </>
  );
}

export default App;
