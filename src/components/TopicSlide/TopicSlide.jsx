import { Skeleton } from "@mui/material";
import React from "react";
import TopicCard from "../TopicCard/TopicCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TopicSlide.css";

TopicSlide.propTypes = {};

function TopicSlide({ data, loading }) {
  console.log(data)
  return (
    <div>
      {/* <Swiper
        spaceBetween={25}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          // when window width is >= 640px
          0: { slidesPerView: 2 },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {loading
          ? <h1>Loading</h1>
          : 
            data.map((item, index) => (
              <SwiperSlide key={index}>
                <TopicCard
                  src={item.thumbnailM || item.thumbnail || item.thumbURL}
                  title={item.title}
                  playlistKey={item.encodeId}
                  description={
                    item.sortDescription ||
                    item.releaseDate ||
                    item.activeUsers + " đang nghe"
                  }
                  link={item.link}
                  loading={loading}
                />
              </SwiperSlide>
            )) || data?.vPop.map((item, index) => (
              <SwiperSlide key={index}>
                <TopicCard
                  src={item.thumbnailM || item.thumbnail || item.thumbURL}
                  title={item.title}
                  playlistKey={item.encodeId}
                  description={
                    item.sortDescription ||
                    item.releaseDate ||
                    item.activeUsers + " đang nghe"
                  }
                  link={item.link}
                  loading={loading}
                />
              </SwiperSlide>
            ))}
      </Swiper> */}
    </div>
  );
}

export const ZingChoiceSlide = ({ data }) => {
  return (
    <div className="zing-choice">
      <Swiper
        spaceBetween={25}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          // when window width is >= 640px
          0: { slidesPerView: 2 },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.encodeId}>
            <TopicCard
              src={item.thumbnail || item.thumbURL}
              title={item.title}
              playlistKey={item.encodeId}
              description={""}
              link={item.link}
              release={item.releaseDate}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopicSlide;
