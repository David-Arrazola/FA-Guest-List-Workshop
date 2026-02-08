import { useState } from "react";
import { GuestList } from "./GuestList";
import { GuestInfo } from "./GuestInfo";

export default function App() {
  const [guests, setGuests] = useState([
    { id: 1, name: "Harry", email: "Harry_Osborne123@gmail.com" },
    { id: 2, name: "Peter", email: "Peter_Parker456@gmail.com" },
    { id: 3, name: "Norman", email: "Norman_Osborne789@gmail.com" },
    { id: 4, name: "Tom", email: "Tom_Holland112@gmail.com" },
    { id: 5, name: "Andrew", email: "Andrew_Garfield113@gmail.com" },
    { id: 6, name: "Mary", email: "Mary_Jane114@gmail.com" },
  ]);

  const [selectedGuest, setSelectedGuest] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelectedGuest = (currGuest) => {
    if (!isSelected) {
      setSelectedGuest(currGuest);
      setIsSelected(!isSelected);
    } else {
      setSelectedGuest({});
      setIsSelected(!isSelected);
    }
  };

  return !isSelected ? (
    <GuestList guests={guests} toggleSelectedGuest={toggleSelectedGuest} />
  ) : (
    <GuestInfo
      selectedGuest={selectedGuest}
      toggleSelectedGuest={toggleSelectedGuest}
    />
  );
}
