<template>
  <section id="our-partners" class="our-partners">
    <div class="our-partners__wrapper layout wide">
      <h1 class="our-partners__title">{{ $t("ourPartners.title") }}</h1>
      <swiper
        :slidesPerView="5"
        :loop="true"
        :centerSlide="true"
        :fade="true"
        :grabCursor="true"
        :loopFillGroupWithBlank="true"
        :navigation="swiperProperties.navigation"
        :modules="[Pagination, Navigation]"
        :breakpoints="{
          0: { slidesPerView: 1 },
          730: { slidesPerView: 2 },
          1023: { slidesPerView: 3 },
          1919: { slidesPerView: 5 },
        }"
      >
        <swiper-slide>
          <div class="our-partners__logo">
            <img src="../../assets/svg/logos/logo-1.svg" alt="logo-1" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="our-partners__logo">
            <img src="../../assets/svg/logos/logo-2.svg" alt="logo-2" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="our-partners__logo">
            <img src="../../assets/svg/logos/logo-3.svg" alt="logo-3" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="our-partners__logo">
            <img src="../../assets/svg/logos/logo-4.svg" alt="logo-4" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="our-partners__logo">
            <img src="../../assets/svg/logos/logo-5.svg" alt="logo-5" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="our-partners__logo">
            <img src="../../assets/svg/logos/logo-6.svg" alt="logo-6" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="our-partners__logo">
            <img src="../../assets/svg/logos/logo-7.svg" alt="logo-7" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

type ISwiper = {
  navigation: any;
};

const swiperProperties: ISwiper = {
  navigation: true,
};
</script>

<style lang="scss">
// OUT PARTNERS
.our-partners {
  background: var(--gray-05);

  &__wrapper {
    margin: 0 auto;
    padding: 132px 0 114px 0;
  }

  &__title {
    margin-bottom: 68px;

    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: 900;
    font-size: 6rem;
    line-height: 8rem;
    letter-spacing: 3.6px;
    color: var(--black);
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// <= 739px
@media (max-width: 739px) {
  .our-partners {
    padding: 54px 0 40px 0px;

    &__wrapper {
      padding: 50px 0 30px 0;
    }

    &__title {
      margin-bottom: 30px;

      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: 0.9px;
    }
  }
  .swiper {
    width: 100% !important;
  }
}

// > 740px - <= 1023px
@media (min-width: 740px) and (max-width: 1023px) {
  .our-partners {
    &__wrapper {
      padding: 50px 0 30px 0;
    }

    &__title {
      margin-bottom: 30px;

      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: 0.9px;
    }
  }
  .swiper {
    width: 100% !important;
  }
}

// > 1024px - <= 1239px
@media (min-width: 1024px) and (max-width: 1239px) {
  .our-partners {
    &__logo {
      margin-left: 30px;
    }
  }
  .swiper {
    width: 100% !important;
  }
}

// > 1240px - <= 1919px
@media (min-width: 1240px) and (max-width: 1919px) {
  .swiper {
    width: 100% !important;
  }
}

// SWIPER
.swiper {
  width: 1500px;

  &-button-prev {
    background: url("../../assets/svg/prev-swiper.svg") no-repeat center;
    background-size: 100% auto;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

    &::after {
      display: none;
    }
  }

  &-button-next {
    background: url("../../assets/svg/next-swiper.svg") no-repeat center;
    background-size: 100% auto;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

    &::after {
      display: none;
    }
  }
}
</style>
