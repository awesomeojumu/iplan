import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc, message, author, authorLink }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-5 rounded-lg hover:shadow-xl transition-all">
      <div className="text-blue-900">
      {star}{star}{star}{star}{star && <span>{star}</span>}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">{message}</p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{author}</h3>
          <a href={authorLink} target="_blank" rel="noopener noreferrer" className="text-blue-900 font-[500]">
            @{author}
          </a>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative container mx-auto px-2 md:px-10 flex flex-col gap-2" id="testimonial">
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="text-2xl font-semibold text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
           star={<StarHalfRoundedIcon />}
            title="111 Modern look & trending design"
            imgSrc="/testimonials/1.png"
            message="Custom message for testimonial 1."
            author="John Doe"
            authorLink="https://example.com/john"
          />
        </div>
        <div>
          <Card
           star={<StarHalfRoundedIcon />}
            title="2222 Layout and organized layers"
            imgSrc="/testimonials/2.png"
            message="Custom message for testimonial 2."
            author="Jane Doe"
            authorLink="https://example.com/jane"
          />
        </div>
        <div>
          <Card
           star={<StarHalfRoundedIcon />}
            title="333 Design Quality & performance"
            imgSrc="/testimonials/3.png"
            message="Custom message for testimonial 3."
            author="Alice Smith"
            authorLink="https://example.com/alice"
          />
        </div>
        <div>
          <Card
           star={<StarHalfRoundedIcon />}
            title="444Layout and organized layers"
            imgSrc="/testimonials/4.png"
            message="Custom message for testimonial 4."
            author="Bob Johnson"
            authorLink="https://example.com/bob"
          />
        </div>
      </Carousel>
    </section>
  );
};


export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 0.5,
};
