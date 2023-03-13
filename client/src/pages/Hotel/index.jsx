import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectAuth } from "../../app/slices/authSlice";
import { selectCounterOptions } from "../../app/slices/counterOptionsSlice";
import {
  getHotelReducerAsync,
  getHotelsReducerAsync,
  selectHotels,
} from "../../app/slices/hotelsSlice";
import { photoImages } from "../../assets/fakeData";
import { Button, Footer, Helmet, Mail, Reserve } from "../../components";
import {
  Address,
  Container,
  Details,
  DetailsDescription,
  DetailsTitle,
  Distance,
  Images,
  Price,
  PriceHighlight,
  Slider,
  Texts,
  Title,
  Wrapper,
} from "./Hotel.styles";

const Hotel = () => {
  // Router
  const { id } = useParams();
  const navigate = useNavigate();
  // Redux
  const dispatch = useDispatch();
  const {
    data: { hotels },
  } = useSelector(selectHotels);
  const { days, room } = useSelector(selectCounterOptions);
  const { user } = useSelector(selectAuth);
  // State
  const [slideNumber, setSlideNumber] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const hotel = hotels.find((hotel) => hotel._id === id);
  // Handle action
  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setIsOpen(idx !== slideNumber ? true : false);
  };
  const handleClose = () => {
    setSlideNumber(null);
    setIsOpen(false);
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (user) {
      setOpenModal((prevState) => !prevState);
    } else {
      navigate("/login", { state: { from: `/hotels/${id}` } });
    }
  };
  // Handle async action
  useEffect(() => {
    const handleCloseByKeyBoard = (e) => {
      if (e.keyCode === 27) {
        setSlideNumber(null);
        setIsOpen(false);
        setOpenModal(false);
      }
    };

    document.addEventListener("keydown", handleCloseByKeyBoard);

    return () => document.removeEventListener("keydown", handleCloseByKeyBoard);
  }, []);
  // Auto load data
  useEffect(() => {
    dispatch(getHotelReducerAsync(id));
    dispatch(getHotelsReducerAsync());
  }, [dispatch, id]);

  return hotel ? (
    <Helmet title={hotel.name}>
      <Wrapper>
        {isOpen && (
          <>
            {slideNumber > 0 && (
              <AiOutlineArrowLeft
                className="leftArrow"
                onClick={() => setSlideNumber(slideNumber - 1)}
              />
            )}
            <Slider>
              {hotel.photos
                ?.slice(slideNumber, slideNumber + 1)
                ?.map((image, idx) => (
                  <img
                    key={idx}
                    src={image.src}
                    alt={`${hotel.title}-${idx + 1}`}
                  />
                ))}
            </Slider>
            {slideNumber < photoImages.length - 1 && (
              <AiOutlineArrowRight
                className="rightArrow"
                onClick={() => setSlideNumber(slideNumber + 1)}
              />
            )}
            <AiOutlineClose onClick={handleClose} className="close" />
          </>
        )}

        <Container>
          <Title>{hotel.title}</Title>
          <Button primary onClick={handleClick}>
            Reserve
          </Button>
          <Address>
            <MdLocationOn />
            {hotel.address}
          </Address>
          <Distance>
            Excellent location - {hotel.distance}m from center
          </Distance>
          <PriceHighlight>
            Book a stay over {hotel.cheapestPrice} USD at this property and get
            a free airport taxi
          </PriceHighlight>
          <Images>
            {hotel.photos?.map((image, idx) => (
              <img
                key={idx}
                src={image.src}
                alt={`${hotel.title}-${idx + 1}`}
                onClick={() => handleOpen(idx)}
              />
            ))}
          </Images>
          <Details>
            <Texts>
              <DetailsTitle>{hotel.name}</DetailsTitle>
              <DetailsDescription>{hotel.description}</DetailsDescription>
            </Texts>
            <Price>
              <h3>
                Perfect for a {days}-night{days > 1 && "s"} stay!
              </h3>
              <p>
                Located in the real heart of Vietnam, this property has an
                excellent location score of {hotel.rating}!
              </p>
              <span>
                {hotel.cheapestPrice * days * room} USD ({days}-night
                {days > 1 && "s"})
              </span>

              <Button width="full" onClick={handleClick}>
                Reserve
              </Button>
            </Price>
          </Details>
        </Container>

        <Mail />

        <Container>
          <Footer />
        </Container>
      </Wrapper>

      {openModal && <Reserve id={hotel._id} setOpenModal={setOpenModal} />}
    </Helmet>
  ) : (
    <Helmet title="Hotel not found">
      <Wrapper>
        <Container>
          <p>We're sorry, but the hotel you're looking for is not found.</p>
        </Container>
      </Wrapper>
    </Helmet>
  );
};

export default Hotel;
