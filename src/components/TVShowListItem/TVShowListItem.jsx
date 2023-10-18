import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={onClick}>
      <img
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt="Small image background"
        className={s.img}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
