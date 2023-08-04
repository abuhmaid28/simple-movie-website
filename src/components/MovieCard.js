import React from "react";
import { motion } from "framer-motion";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import handleImage from "../images/handleImage.jpg";

const MovieCard = ({ Movie }) => {
  // Function to handle image loading error and set a default image
  const handleImageError = (event) => {
    event.target.src = handleImage; // Set the default image path here
  };

  // useInView hook to trigger animation when the card comes into view
  const [cardRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Col xs="6" sm="6" md="4" lg="3">
      <Link to={`/movie/${Movie.id}`}>
        {/* Framer Motion animation for the movie card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Card className="my-2 border-0 card">
            {/* Movie poster image */}
            <img
              src={`http://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
              className="card-img position-relative w-100 h-100"
              alt="movie-img"
              onError={handleImageError} // Set the handleImageError function to handle image loading error
            />
            {/* Movie details overlay */}
            <div className="MovieOverlayDetails position-absolute w-100 h-100 text-light text-center">
              <p>إسم الفيلم : {Movie.title}</p>
              <p>تاريخ الإصدار : {Movie.release_date}</p>
              <p>عدد المقيمين : {Movie.vote_count}</p>
              <p>التقييم : {Movie.vote_average}</p>
            </div>
          </Card>
        </motion.div>
      </Link>
    </Col>
  );
};

export default MovieCard;
