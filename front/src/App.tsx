import ComplexForm from './forms/ComplexForm';
import SimpleForm from './forms/SimpleForm';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '3rem',
        justifyContent: 'center',
        flexWrap: 'nowrap',
      }}
    >
      <div style={{ flex: '1', backgroundColor: 'whitesmoke' }}>
        <SimpleForm />
      </div>

      <div style={{ flex: '1', backgroundColor: 'whitesmoke' }}>
        <ComplexForm />
      </div>
    </div>
  );
}

export default App;
