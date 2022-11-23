<script setup lang="ts">
import GInput from "@/components/base/GInput.vue";
import { ArrowRightWhiteIcon } from "@/components/icons";
</script>

<template>
  <footer id="contact-us" class="footer">
    <section class="layout wide">
      <div class="footer__wrapper">
        <div class="footer__social-wrapper">
          <div class="footer__social-logo"></div>
          <div class="footer__social-inner">
            <span class="footer__social-icon"
              ><img src="../../../assets/svg/socials/twitter.svg" alt="twitter"
            /></span>
            <span class="footer__social-icon"
              ><img
                src="../../../assets/svg/socials/facebook.svg"
                alt="facebook"
            /></span>
            <span class="footer__social-icon"
              ><img
                src="../../../assets/svg/socials/linkedin.svg"
                alt="linkedin"
            /></span>
          </div>
        </div>
        <div class="footer__address-wrapper">
          <h2>{{ $t("contactUs.address.title") }}</h2>
          <div class="footer__address-location">
            <span class="footer__address-icon"
              ><img src="../../../assets/svg/location.svg" alt="location"
            /></span>
            <div class="footer__address-info">
              <p>
                {{ $t("contactUs.address.buildingLocation") }}
              </p>
              <p>
                {{ $t("contactUs.address.street") }}
              </p>
            </div>
          </div>
          <div class="footer__address-phone">
            <span class="footer__address-icon"
              ><img src="../../../assets/svg/phone.svg" alt="phone"
            /></span>
            <p>{{ $t("contactUs.address.phone") }}</p>
          </div>
        </div>
        <div class="footer__subscribe-wrapper">
          <h2>{{ $t("contactUs.subscribe.title") }}</h2>
          <p>
            {{ $t("contactUs.subscribe.description") }}
          </p>
          <GInput
            type="text"
            placeholder="Email"
            id="footer-email"
            classes="input-item--transparent"
          >
            <template #rightLabelIcon="{ className }">
              <span :class="className">
                <ArrowRightWhiteIcon />
              </span>
            </template>
          </GInput>
        </div>
      </div>
    </section>
  </footer>
  <section class="footer__copyright"><p>2017 Copyright. Policy.</p></section>
</template>

<style lang="scss">
//FOOTER
.footer {
  padding: 104px 140px 104px 140px;
  background: url("../../../assets/svg/footer-background.svg") no-repeat center;
  background-size: cover;

  &__wrapper {
    display: flex;
    flex: 1;
    margin: 0 auto;
    width: 1464px;
  }
  h2 {
    margin-bottom: 50px;

    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    color: var(--white);
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.96rem;
    color: var(--white);
  }
  &__social {
    &-logo {
      width: 164px;
      height: 96px;

      background: var(--white);
      mask: url("../../../assets/svg/four-tech-logo.svg") no-repeat center /
        contain;
      -webkit-mask: url("../../../assets/svg/four-tech-logo.svg") no-repeat
        center / contain;

      cursor: pointer;
      opacity: 1;
      transition: all 0.3s linear 0s;

      &:hover {
        opacity: 0.8;
      }
    }

    &-wrapper {
      flex: 3;
    }

    &-inner {
      display: flex;
      align-items: center;
      margin-top: 42px;
    }

    &-icon {
      &:not(:last-child) {
        margin-right: 32px;
      }
    }
  }

  &__address {
    &-wrapper {
      flex: 2.5;
    }

    &-location {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 46px;

      p {
        &:first-child {
          margin-bottom: 20px;
          padding-right: 22px;
        }

        &:last-child {
          padding-right: 50px;
        }
      }
    }

    &-phone {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &-icon {
      margin-right: 14px;

      &:first-child {
        display: flex;
      }
    }
  }

  &__subscribe {
    &-wrapper {
      padding-right: 22px;
      flex: 2.5;

      p {
        margin-bottom: 16px;
      }
    }
  }
  &__copyright {
    padding: 29px 0;
    background: var(--black);

    p {
      text-align: center;

      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.2rem;
      color: var(--white);
    }
  }
}

// <= 739px
@media (max-width: 739px) {
  .footer {
    padding: 40px 16px 64px 16px;
    background-size: cover;

    h2 {
      margin-bottom: 26px;
    }

    &__wrapper {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    &__social {
      &-wrapper {
        margin-bottom: 80px;
      }
    }

    &__address {
      &-wrapper {
        margin-bottom: 26px;
      }

      &-location {
        margin-bottom: 22px;
        p {
          &:first-child {
            margin-bottom: 16px;
            padding-right: 0;
          }

          &:last-child {
            padding-right: 0;
          }
        }
      }

      &-phone {
        margin-bottom: 44px;
      }
    }

    &__subscribe {
      &-wrapper {
        padding-right: 0;
      }
    }

    &__copyright {
      padding: 32px 0;
    }
  }
}

// > 740px - <= 1023px
@media (min-width: 740px) and (max-width: 1023px) {
  .footer {
    padding: 40px 16px 64px 16px;
    background-size: cover;

    h2 {
      margin-bottom: 26px;
    }

    &__wrapper {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    &__social {
      &-wrapper {
        margin-bottom: 80px;
      }
    }

    &__address {
      &-wrapper {
        margin-bottom: 26px;
      }

      &-location {
        p {
          &:first-child {
            margin-bottom: 16px;
            padding-right: 0;
          }

          &:last-child {
            padding-right: 0;
          }
        }
      }

      &-phone {
        margin-bottom: 44px;
      }
    }

    &__subscribe {
      &-wrapper {
        padding-right: 0;
      }
    }
  }
}

// > 1024px - <= 1239px
@media (min-width: 1024px) and (max-width: 1239px) {
  .footer {
    padding: 80px 24px 80px 24px;
    &__wrapper {
      width: 100%;
    }
  }
}

// > 1240px - <= 1919px
@media (min-width: 1240px) and (max-width: 1919px) {
  .footer {
    padding: 104px 100px 104px 112px;
    &__wrapper {
      width: 100%;
    }
  }
}

// IPAD PRO
@media (width: 1024px) and (height: 1366px) {
  .footer {
    padding: 40px 16px 64px 16px;
    background-size: cover;

    h2 {
      margin-bottom: 26px;
    }

    &__wrapper {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    &__social {
      &-wrapper {
        margin-bottom: 80px;
      }
    }

    &__address {
      &-wrapper {
        margin-bottom: 26px;
      }

      &-location {
        margin-bottom: 22px;
        p {
          &:first-child {
            margin-bottom: 16px;
            padding-right: 0;
          }

          &:last-child {
            padding-right: 0;
          }
        }
      }

      &-phone {
        margin-bottom: 44px;
      }
    }

    &__subscribe {
      &-wrapper {
        padding-right: 0;
      }
    }
  }
}
</style>
