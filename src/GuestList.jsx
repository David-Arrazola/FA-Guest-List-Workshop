export function GuestList({ guests, toggleSelectedGuest }) {
  const clonedGuests = [...guests].map((currGuest) => (
    <tr key={currGuest.id} onClick={() => toggleSelectedGuest(currGuest)}>
      <td>{currGuest.name}</td>
      <td>{currGuest.email}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>{clonedGuests}</tbody>
    </table>
  );
}
