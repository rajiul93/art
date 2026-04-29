import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import Art from "../../public/Animation/Art.json";
import Art2 from "../../public/Animation/Art2.json";
import Art3 from "../../public/Animation/Art3.json";
import "./style1.css";

const headingFont = "font-['Mochiy_Pop_One',sans-serif]";

/** Same box height on every slide so the hero does not jump between fades */
const lottieShellClass =
  "flex h-56 w-full max-w-md shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-base-200/60 ring-1 ring-base-content/10 sm:h-64 md:h-80 md:w-[42%]";

const Slider = () => {
  return (
    <section
      className=" border-base-200 bg-base-100 text-base-content transition-colors duration-200"
      aria-label="Featured highlights"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Swiper
          className="slider-hero"
          modules={[A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={650}
          grabCursor
          keyboard={{ enabled: true }}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            paginationBulletMessage: "Go to slide {{index}}",
          }}
        >
          <SwiperSlide>
            <div className="my-10 flex flex-col items-center gap-8 md:my-14 md:flex-row md:justify-between md:gap-10">
              <div className="w-full max-w-xl text-center md:text-start">
                <h1
                  className={`${headingFont} text-2xl font-bold leading-snug text-base-content sm:text-3xl md:text-4xl md:leading-tight`}
                >
                  Capturing Life&apos;s <br />
                  Essence{" "}
                  <span className="text-[color:var(--color-primary-brand)]">
                    <Typewriter
                      words={[
                        "Through Art",
                        "Through the Lens of Art",
                        "With Artful Technique",
                        "Via Creative Channels!",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-base-content/80 md:mx-0">
                  Immerse in the beauty of portraiture. Our skilled artists capture
                  emotions and personalities, offering timeless and personalized
                  artworks that reflect life&apos;s essence.
                </p>
              </div>
              <div className={lottieShellClass}>
                <Lottie animationData={Art3} loop className="h-full max-h-full w-full max-w-full object-contain" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="my-10 flex flex-col items-center gap-8 md:my-14 md:flex-row md:justify-between md:gap-10">
              <div className="w-full max-w-xl text-center md:text-start">
                <h1
                  className={`${headingFont} text-2xl font-bold leading-snug text-base-content sm:text-3xl md:text-4xl md:leading-tight`}
                >
                  Welcome to <br /> the World of{" "}
                  <span className="text-[color:var(--color-primary-brand)]">
                    Artistry
                  </span>
                </h1>
                <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-base-content/80 md:mx-0">
                  Discover a world of creativity and expression with our curated
                  collection of artisanal treasures.
                </p>
              </div>
              <div className={lottieShellClass}>
                <Lottie animationData={Art} loop className="h-full max-h-full w-full max-w-full object-contain" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="my-10 flex flex-col items-center gap-8 md:my-14 md:flex-row md:justify-between md:gap-10">
              <div className="w-full max-w-xl text-center md:text-start">
                <h1
                  className={`${headingFont} text-2xl font-bold leading-snug text-base-content sm:text-3xl md:text-4xl md:leading-tight`}
                >
                  Your Gateway to <br />
                  <span className="text-[color:var(--color-primary-brand)]">
                    Artistic Excellence
                  </span>
                </h1>
                <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-base-content/80 md:mx-0">
                  Explore unique art and craft pieces curated to inspire and enchant
                  every creative soul.
                </p>
              </div>
              <div className={lottieShellClass}>
                <Lottie animationData={Art2} loop className="h-full max-h-full w-full max-w-full object-contain" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
