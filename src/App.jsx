import { useState, useEffect } from "react";
import { GuestList } from "./GuestList";
import { GuestInfo } from "./GuestInfo";

const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2601-FTB-ET-WEB-FT";
const API = BASE + COHORT;

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetchGuests(setGuests);
  }, []); //* The empty dependency list means "useEffect()" will only trigger once when DOM renders

  const toggleSelectedGuest = (currGuest) => {
    if (!isSelected) {
      setSelectedGuest(currGuest);
      setIsSelected(!isSelected);
    } else {
      setSelectedGuest({});
      setIsSelected(!isSelected);
    }
  };

  return (
    <section>
      {!isSelected ? (
        <GuestList guests={guests} toggleSelectedGuest={toggleSelectedGuest} />
      ) : (
        <GuestInfo
          selectedGuest={selectedGuest}
          toggleSelectedGuest={toggleSelectedGuest}
        />
      )}
    </section>
  );
}

async function fetchGuests(setGuests) {
  try {
    const response = await fetch(API + "/guests");
    const data = await response.json();
    setGuests(data.data);
  } catch (error) {
    console.error(error);
  }
}
