import SubmitButton from '../components/submit-button';

function ComplexForm() {
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Submitted, complex form!');
      }}
    >
      <label htmlFor="fullname">First Name:</label>
      <input type="text" id="fullname" name="fullname" />

      <label htmlFor="photo">Photo:</label>
      <input type="file" id="photo" name="photo" />

      <SubmitButton />
    </form>
  );
}

export default ComplexForm;
