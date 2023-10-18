import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function SwiperTvShowList({ tvShowList, onClickItem }) {
  console.log({ onClickItem });
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={24}
      slidesPerView={5}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      {tvShowList.map((tvShow) => {
        return (
          <SwiperSlide key={tvShow.id}>
            <TVShowListItem
              tvShow={tvShow}
              onClick={() => onClickItem(tvShow)}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
