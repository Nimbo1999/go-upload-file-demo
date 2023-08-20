import SubmitButton from '../components/submit-button';

function SimpleForm() {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        height: '100%',
      }}
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Submitted, simple form!');
      }}
    >
      <label htmlFor="file">Upload file:</label>
      <input id="file" name="file" type="file" />

      <SubmitButton />
    </form>
  );
}

export default SimpleForm;
