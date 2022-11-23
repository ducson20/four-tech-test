<script setup lang="ts">
import { ref } from "vue";
import _ from "lodash";

import { ArrowRightIcon } from "@/components/icons";
import GInput from "@/components/base/GInput.vue";
import { useCountdown, useEventListener } from "@/hooks";

const endDate = new Date(2022, 12, 1, 0, 0, 0, 0);
const { countdown, loading } = useCountdown(endDate);

const scrollTopButton = ref<InstanceType<any>>();
const isShowScrollIcon = ref<boolean>(false);

const scrollToTop = _.debounce(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, 200);

useEventListener(window, "scroll", () => {
  const scrollBtn = scrollTopButton.value;

  if (window.scrollY > 0) {
    isShowScrollIcon.value = true;
  } else {
    isShowScrollIcon.value = false;
  }
});
</script>

<template>
  <section class="hero">
    <div class="layout wide">
      <span class="hero__fairy-icon"
        ><img src="../../../assets/svg/fairy.svg" alt="fairy"
      /></span>
      <div v-if="loading" class="hero__content">
        <h1 class="hero__title">{{ $t("hero.title") }}</h1>
        <div class="hero__countdown">
          <span class="hero__countdown-wrapper">
            <p class="hero__countdown-number">{{ countdown.displayDays }}</p>
            <p class="hero__countdown-text">{{ $t("countdown.days") }}</p>
          </span>
          <span class="hero__colon">:</span>
          <span class="hero__countdown-wrapper">
            <p class="hero__countdown-number">{{ countdown.displayHours }}</p>
            <p class="hero__countdown-text">{{ $t("countdown.hours") }}</p>
          </span>
          <span class="hero__colon">:</span>
          <span class="hero__countdown-wrapper">
            <p class="hero__countdown-number">{{ countdown.displayMinutes }}</p>
            <p class="hero__countdown-text">{{ $t("countdown.minutes") }}</p>
          </span>
          <span class="hero__colon">:</span>
          <span class="hero__countdown-wrapper">
            <p class="hero__countdown-number">{{ countdown.displaySeconds }}</p>
            <p class="hero__countdown-text">{{ $t("countdown.seconds") }}</p>
          </span>
        </div>
        <p class="hero__description">
          {{ $t("hero.description") }}
        </p>
        <div class="hero__email">
          <GInput type="text" :placeholder="$t('email.placeholder')" id="email">
            <template #rightLabelIcon="{ className }">
              <span :class="className">
                <ArrowRightIcon />
              </span>
            </template>
          </GInput>
        </div>
      </div>
      <Teleport to="body" v-if="isShowScrollIcon">
        <button
          @click="scrollToTop"
          :ref="scrollTopButton"
          class="toggle-button"
          role="button"
          aria-label="scroll to top of the page"
        >
          <img
            src="../../../assets/svg/arrow-up-scroll.svg"
            alt="arrow-up-scroll"
          />
        </button>
      </Teleport>
    </div>
  </section>
</template>

<style lang="scss">
// HERO
.hero {
  position: relative;
  background: radial-gradient(
    42.72% 29.79% at 50.81% 68.15%,
    #210544 0%,
    rgba(23, 5, 68, 0.71) 50.52%,
    rgba(23, 5, 68, 0) 100%
  );

  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 26% 20% -16% 20%;
    border-radius: 80%;
    backdrop-filter: blur(5px);
    margin: 0 auto;
  }

  &__fairy-icon {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(-13%, 38%);
    img {
      width: 660px;
      height: 964px;
    }
  }

  &__content {
    position: relative;
    max-width: 768px;
    margin: 0 auto;
    padding-top: 294px;

    z-index: 1;
  }

  &__title {
    margin-bottom: 20px;

    font-family: "Playfair Display", serif;
    font-size: 8rem;
    font-weight: 900;
    line-height: 12rem;
    letter-spacing: 0.6px;
    text-align: center;
    color: var(--white);
  }

  &__countdown {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 100px;
    height: 150px;
    padding: 22px;
    border-radius: 21px;

    background: var(--white);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px;
    }

    &-number {
      font-family: "Playfair Display", serif;
      font-size: 6rem;
      font-weight: 900;
      line-height: 6.2rem;
      letter-spacing: 4.8px;
      color: var(--black);
    }

    &-text {
      padding-top: 17px;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.8rem;
      color: var(--black);
    }
  }

  &__colon {
    margin-bottom: 16px;

    font-size: 6.5rem;
    font-weight: 400;
    line-height: 7rem;
    color: var(--black);
  }

  &__description {
    max-width: 560px;
    margin: 0 auto;
    margin-bottom: 31px;

    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.268rem;
    color: var(--white);
  }

  &__email {
    max-width: 560px;
    margin: 0 auto;
  }
}

.toggle-button {
  position: fixed;
  bottom: 10%;
  right: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border: none;
  border-radius: 50%;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background: var(--white);

  cursor: pointer;
  z-index: 9;
  opacity: 1;
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.8;
  }
}

// <= 739px
@media (max-width: 739px) {
  .hero {
    &::after {
      inset: 36% 6% 0% 6%;
    }

    &__fairy-icon {
      top: 104%;
      left: 50%;
      transform: translateX(-40%);
      img {
        width: 250px;
        height: 250px;
      }
    }

    &__content {
      padding-top: 132px;
    }

    &__title {
      margin-bottom: 38px;

      font-weight: 900;
      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: 0.6px;

      span {
        display: inline-block;

        font-weight: 900;
        font-size: 4rem;
        line-height: 5rem;
        letter-spacing: 0.6px;
      }
    }

    &__countdown {
      padding: 22px 30px;
      margin-bottom: 42px;
      height: 118px;

      &-wrapper {
        width: 80px;
      }

      &-number {
        font-size: 3.6rem;
        line-height: 4.5rem;
        letter-spacing: none;
      }

      &-text {
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: -0.65px;
      }
    }

    &__colon {
      font-size: 4rem;
      line-height: 4.9rem;
    }

    &__description {
      padding: 0 16px;
      margin-bottom: 16px;

      font-size: 1.2rem;
      line-height: 1.5rem;
      letter-spacing: 0.6px;
    }

    &__email {
      padding: 0;
    }
  }
}

// > 740px - <= 1023px
@media (min-width: 740px) and (max-width: 1023px) {
  .hero {
    &::after {
      inset: 26% 0% 0% 0%;
    }

    &__fairy-icon {
      top: 104%;
      left: 50%;
      transform: translateX(-50%);
      img {
        height: 400px;
        width: 400px;
      }
    }

    &__content {
      padding-top: 240px;
    }
  }
}

// > 1024px - <= 1239px
@media (min-width: 1024px) and (max-width: 1239px) {
  .hero {
    &::after {
      inset: 20%;
    }

    &__fairy-icon {
      top: 66%;
      left: 0;
      transform: translateX(-10%);
      img {
        height: 350px;
        width: 350px;
      }
    }

    &__content {
      padding-top: 240px;
    }
  }
}

// > 1240px - <= 1919px
@media (min-width: 1240px) and (max-width: 1919px) {
  .hero {
    &::after {
      inset: 20%;
    }

    &__fairy-icon {
      top: 50%;
      left: 0;
      transform: translateX(-30%);
      img {
        height: 500px;
        width: 500px;
      }
    }

    &__content {
      padding-top: 240px;
    }
  }
}

// IPHONE X
@media (min: 375px) and (height: 812px) {
  .hero {
    background: radial-gradient(
      50.72% 13.79% at 50.81% 52.15%,
      #210544 0%,
      rgba(23, 5, 68, 0.71) 50.52%,
      rgba(23, 5, 68, 0) 100%
    );
  }
}

// IPHONE 6/7/8 PLUS
@media (width: 414px) and (height: 736px) {
}

// SMALL TABLET
@media (width: 600px) and (height: 800px) {
  .hero {
    &::after {
      inset: 44% 0% 12% 0%;
    }

    &__fairy-icon {
      top: 120%;
      img {
        width: 350px;
        height: 350px;
      }
    }

    &__content {
      padding-top: 240px;
    }
  }
}

// IPAD PRO
@media (width: 1024px) and (height: 1366px) {
  .hero {
    &:after {
      inset: 26% 0% -8% 0%;
    }

    &__fairy-icon {
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 400px;
        height: 400px;
      }
    }
  }
}
</style>
