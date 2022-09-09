import { BiBed, BiTaxi } from "react-icons/bi";
import { IoAirplaneOutline, IoCarSportOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";

const headerItems = [
  {
    display: "Stays",
    path: "/stays",
    icon: <BiBed />,
  },
  {
    display: "Flights",
    path: "/flights",
    icon: <IoAirplaneOutline />,
  },
  {
    display: "Car rentals",
    path: "/car-rentals",
    icon: <IoCarSportOutline />,
  },
  {
    display: "Attractions",
    path: "/attractions",
    icon: <MdOutlineAttractions />,
  },
  {
    display: "Airport taxis",
    path: "/airport-taxis",
    icon: <BiTaxi />,
  },
];

export default headerItems;
