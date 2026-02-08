export function GuestList({ guests, toggleSelectedGuest }) {
  const clonedGuests = [...guests].map((currGuest) => (
    <tr key={currGuest.id} onClick={() => toggleSelectedGuest(currGuest)}>
      <td>{currGuest.name}</td>
      <td>{currGuest.email}</td>
      <td>{currGuest.phone}</td>
    </tr>
  ));

  return (
    <section className="tableContainer">
      <p>Guest List</p>
      <table>
        <thead>
          <tr>
            <td>
              <b>NAME</b>
            </td>
            <td>
              <b>EMAIL</b>
            </td>
            <td>
              <b>PHONE</b>
            </td>
          </tr>
        </thead>
        <tbody>{clonedGuests}</tbody>
      </table>
    </section>
  );
}
