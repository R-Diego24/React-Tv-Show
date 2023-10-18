import s from "./style.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperTvShowList } from "../SwiperTvShowList/SwiperTvShowList";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={s.title}>You may also like:</div>

      <SwiperTvShowList tvShowList={tvShowList} onClickItem={onClickItem} />
    </>
  );
}
