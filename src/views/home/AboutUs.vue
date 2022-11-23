<script setup lang="ts">
import {
  CalendarTickIcon,
  UserGroupIcon,
  PenToolIcon,
} from "@/components/icons";
</script>

<template>
  <section id="about-us" class="about-us">
    <div class="about-us__wrapper">
      <div class="about-us__inner">
        <div class="about-us__info">
          <h1 class="about-us__title">{{ $t("aboutUs.title") }}</h1>
          <p class="about-us__description">
            {{ $t("aboutUs.description") }}
          </p>
          <div class="about-us__general-wrapper">
            <div>
              <p class="about-us__general-number">
                600<span class="about-us__general-million">M</span>+
              </p>
              <p class="about-us__general-type about-us__general-type-users">
                {{ $t("aboutUs.users") }}
              </p>
            </div>
            <div>
              <p class="about-us__general-number">135+</p>
              <p class="about-us__general-type">{{ $t("aboutUs.games") }}</p>
            </div>
          </div>
        </div>
        <div class="about-us__benefit">
          <div class="about-us__benefit-info">
            <span class="about-us__benefit-icon"><CalendarTickIcon /></span>
            <div class="about-us__benefit-inner">
              <h3 class="about-us__benefit-title">
                {{ $t("aboutUs.benefit.time") }}
              </h3>
              <p class="about-us__benefit-description">
                {{ $t("aboutUs.benefit.subTime") }}
              </p>
            </div>
          </div>
          <div class="about-us__benefit-info">
            <span class="about-us__benefit-icon"><PenToolIcon /></span>
            <div class="about-us__benefit-inner">
              <h3 class="about-us__benefit-title">
                {{ $t("aboutUs.benefit.design") }}
              </h3>
              <p class="about-us__benefit-description">
                {{ $t("aboutUs.benefit.subDesign") }}
              </p>
            </div>
          </div>
          <div class="about-us__benefit-info">
            <span class="about-us__benefit-icon"><UserGroupIcon /></span>
            <div class="about-us__benefit-inner">
              <h3 class="about-us__benefit-title">
                {{ $t("aboutUs.benefit.team") }}
              </h3>
              <p class="about-us__benefit-description">
                {{ $t("aboutUs.benefit.subTeam") }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-us__inner about-us__beldam">
        <div class="about-us__beldam-img">
          <img src="../../assets/svg/beldam.svg" alt="beldam" />
        </div>
        <div class="about-us__map">
          <img src="../../assets/svg/pin-map.svg" alt="pic-map" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// ABOUT US
.about-us {
  &__wrapper {
    margin: 0 auto;
    margin-bottom: 128px;
    width: 1164px;
  }
  &__inner {
    display: flex;
    flex: 1;
  }

  &__info {
    flex: 1;
    padding-right: 38px;
  }

  &__map {
    img {
      width: 100%;
    }
  }

  &__title {
    margin-bottom: 42px;

    font-family: "Playfair Display", serif;
    font-size: 6rem;
    line-height: 6rem;
    font-weight: 900;
    letter-spacing: 3.6px;
    color: var(--black);
  }

  &__description {
    margin-bottom: 80px;

    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    color: var(--gray-04);
  }

  &__general {
    &-number {
      margin-bottom: 4px;
      font-size: 8rem;
      line-height: 9.8rem;
      font-weight: 700;
      color: var(--blue-01);
    }
    &-million {
      font-size: 4rem;
      line-height: 4.2rem;
      font-weight: 600;
      color: var(--blue-01);
    }
    &-type {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3rem;
      color: var(--black);

      &-users {
        margin-bottom: 40px;
      }
    }
  }

  &__benefit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background: var(--gray-01);
    padding: 112px 0;

    &-info {
      display: flex;
      align-items: center;
      padding: 0 80px 0 74px;
      &:not(:last-child) {
        margin-bottom: 50px;
      }
    }
    &-icon {
      display: flex;
      margin-right: 20px;
      margin-bottom: auto;
      padding: 13px;
      border-radius: 50%;
      background: var(--blue-02);
    }
    &-title {
      margin-bottom: 10px;

      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3rem;
      color: var(--black);
    }
    &-description {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      color: var(--gray-04);
    }
  }

  &__beldam {
    position: relative;
    margin-top: 406px;
    &-img {
      position: absolute;
      top: -77.6%;
      right: 0;
      left: 28%;

      animation-name: animationBeldam;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-delay: 0.1s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: backwards;
      animation-play-state: running;

      z-index: 9;
    }
  }
}

// <= 739px
@media (max-width: 739px) {
  .about-us {
    &__wrapper {
      margin-bottom: 50px;
      width: 100%;
    }

    &__inner {
      display: block;
      flex: none;
    }
    &__info {
      flex: none;
      padding: 0 16px;
      margin-bottom: 44px;
    }
    &__benefit {
      flex: none;

      &-description {
        letter-spacing: -0.4px;
      }
    }

    &__title {
      margin-bottom: 24px;

      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: 0.6px;
    }

    &__description {
      margin-bottom: 38px;
      letter-spacing: -0.1px;
    }

    &__general {
      &-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        div {
          &:first-child {
            margin-right: 56px;
          }
        }
      }
      &-number {
        font-size: 4.4rem;
        line-height: 5.4rem;
      }
      &-million {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;
      }
      &-type {
        font-size: 2.4rem;
        line-height: 3rem;

        &-users {
          margin: 0;
        }
      }
    }

    &__benefit {
      padding: 40px 16px;
      &-info {
        padding: 0;
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }
      &-icon {
        padding: 10px;

        svg {
          width: 20px;
          height: 20px;
        }
      }
      &-title {
        margin-bottom: 18px;
      }

      &-description {
      }
    }

    &__beldam {
      margin-top: 256px;
      &-img {
        top: -160%;
        transform: translateX(-26%);
        img {
          width: 306px;
          height: 246px;
        }
      }
    }
  }
}

// > 740px - <= 1023px
@media (min-width: 740px) and (max-width: 1023px) {
  .about-us {
    &__wrapper {
      margin-bottom: 64px;
      width: 100%;
    }

    &__inner {
      display: block;
      flex: none;
    }

    &__info {
      flex: none;
      padding: 0 16px;
      margin-bottom: 44px;
    }
    &__benefit {
      flex: none;
    }

    &__title {
      margin-bottom: 24px;

      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: 0.6px;
    }

    &__general {
      &-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        div {
          &:first-child {
            margin-right: 56px;
          }
        }
      }
      &-number {
        font-size: 4.4rem;
        line-height: 5.4rem;
      }
      &-million {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;
      }
      &-type {
        font-size: 2.4rem;
        line-height: 3rem;

        &-users {
          margin: 0;
        }
      }
    }

    &__benefit {
      padding: 40px;
      &-info {
        padding: 0;
        &:not(:last-child) {
          margin-bottom: 40px;
        }
      }
    }

    &__beldam {
      margin-top: 256px;
      &-img {
        img {
          width: 300px;
          height: 240px;
        }
      }
    }
  }
}

// > 1024px - <= 1239px
@media (min-width: 1024px) and (max-width: 1239px) {
  .about-us {
    &__wrapper {
      width: 100%;
    }

    &__map {
      img {
        width: 100%;
      }
    }

    &__beldam-img {
      left: 22%;
    }
  }
}

// SMALL TABLET
@media (width: 600px) and (height: 800px) {
  .about-us {
    &__beldam {
      &-img {
        top: -100%;
        transform: translateX(-10%);
      }
    }
  }
}

// IPAD PRO
@media (width: 1024px) and (height: 1366px) {
  .about-us {
    &__wrapper {
      max-width: 992px;
    }

    &__beldam {
      &-img {
        top: -100%;
        transform: translateX(-10%);
      }
    }
  }
}

@keyframes animationBeldam {
  0% {
    margin-top: 40px;
  }
  50% {
    margin-top: 20px;
  }
  100% {
    margin-top: 40px;
  }
}
</style>
