import FiveStarRating from "../FiveStarRating.jsx/FiveStarRating";
import s from "./style.module.css";

function RoundNumber(number) {
  return Math.round(number * 10) / 10;
}

export default function TVShowDetail({ tvShow }) {
  const rating = RoundNumber(tvShow.vote_average / 2);

  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={s.rating}>{rating}/5</div>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
