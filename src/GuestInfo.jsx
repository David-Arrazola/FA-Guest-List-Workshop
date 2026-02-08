export function GuestInfo({ selectedGuest, toggleSelectedGuest }) {
  return (
    <section className="tableContainer">
      <p>Guest</p>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{selectedGuest.name}</td>
          </tr>
          <tr>
            <td>Bio:</td>
            <td>{selectedGuest.bio}</td>
          </tr>
          <tr>
            <td>Job:</td>
            <td>{selectedGuest.job}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{selectedGuest.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{selectedGuest.phone}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => toggleSelectedGuest(selectedGuest)}>Back</button>
    </section>
  );
}
