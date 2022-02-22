import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "./NewReleaseSlide.css";

NewReleaseSlide.propTypes = {};

function NewReleaseSlide({ data }) {
  console.log(data);
  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={3}
      autoplay={{
        delay: 5000,
      }}
    >
      {data &&
        data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <NewCard
                src={item.thumbnail}
                title={item.title}
                artist={item.artists}
                duration={item.duration}
                position={item.position}
                id={item.key || item.songKey}
                ranking={index + 1}
                link={item.link}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

const NewCard = ({ src, title, artist, position, ranking, link }) => {
  return (
    <Link to={link} className="new-card">
      <div className="new__box-img">
        <img className="new__img" src={src} alt={title} />
      </div>
      <div className="new__content">
        <h4 className="new__content-title">{title}</h4>
        {artist.length > 1
          ? artist.map((item, i) => {
              let len = artist.length;
              return (
                <Link to={item.link} key={item.artistId} className="artist">
                  {len - 1 === i ? item.name + "" : item.name + ",  "}
                </Link>
              );
            })
          : artist.map((item, i) => (
              <Link to={item.link} key={item.artistId} className="artist">
                {item.name}
              </Link>
            ))}
        <div className="bottom">
          <span className="position">#{position || ranking}</span>
          <p className="duration">Mới phát hành</p>
        </div>
      </div>
    </Link>
  );
};

export default NewReleaseSlide;