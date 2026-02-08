export function GuestInfo({ selectedGuest, toggleSelectedGuest }) {
  return (
    <section>
      <h2>{selectedGuest.name}</h2>
      <h3>{selectedGuest.email}</h3>
      <button onClick={() => toggleSelectedGuest(selectedGuest)}>Back</button>
    </section>
  );
}
