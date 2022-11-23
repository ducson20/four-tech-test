<script setup lang="ts">
import { ref, reactive } from "vue";
import i18n from "@/plugins/i18n";

import { TickIcon } from "@/components/icons";

import { LANGUAGE_CODE, LANGUAGE_NAME } from "@/constants";
import { navbarItemsData } from "@/dummy";

const languageArrConstant = [
  {
    id: 1,
    code: LANGUAGE_CODE.VI,
    label: LANGUAGE_NAME.VIETNAMESE,
    isChecked: false,
  },
  {
    id: 2,
    code: LANGUAGE_CODE.EN,
    label: LANGUAGE_NAME.ENGLISH,
    isChecked: true,
  },
];

type TLanguage = {
  id: number;
  code: string;
  label: string;
  isChecked: boolean;
};

let languagesData = reactive<TLanguage[]>(languageArrConstant);
const isShowMobileModal = ref<boolean>(false);
const isLanguageFlag = ref<string>("en");
const tagsA = ref<any>([]);

const handleChangeLanguage = (language: TLanguage) => {
  const tempArr = languagesData.map((lang) => {
    return language.isChecked ? lang : { ...lang, isChecked: !lang.isChecked };
  });

  languagesData = tempArr;

  switch (language.code) {
    case LANGUAGE_CODE.VI:
      i18n.global.locale.value = LANGUAGE_CODE.VI;
      isLanguageFlag.value = LANGUAGE_CODE.VI;
      break;
    case LANGUAGE_CODE.EN:
      i18n.global.locale.value = LANGUAGE_CODE.EN;
      isLanguageFlag.value = LANGUAGE_CODE.EN;
      break;
    default:
      break;
  }
};

const showMobileModal = (navbarItemName: string) => {
  isShowMobileModal.value = false;
  tagsA.value.map((el: HTMLElement) => {
    console.log(
      navbarItemName.toLocaleLowerCase(),
      " ",
      el.innerText.toLocaleLowerCase()
    );
    if (
      navbarItemName.toLocaleLowerCase() === el.innerText.toLocaleLowerCase()
    ) {
      el.click();
    }
  });
};
</script>

<template>
  <nav>
    <div class="navbar layout wide">
      <!-- MOBILE -->
      <div class="navbar-mobile__wrapper">
        <div class="navbar-mobile__logo"></div>
        <label for="close-input" class="navbar-mobile__menu"></label>
      </div>
      <input
        type="checkbox"
        class="navbar-mobile__close-input"
        id="close-input"
        v-model="isShowMobileModal"
      />
      <div class="navbar-mobile__toggle">
        <div class="navbar-mobile__language">
          <div class="navbar-mobile__language-wrapper">
            <img
              v-if="isLanguageFlag === LANGUAGE_CODE.VI"
              src="../../../assets/svg/vi-flag.svg"
              alt="vi-flag"
            />
            <img v-else src="../../../assets/svg/us-flag.svg" alt="us-flag" />

            <div class="navbar-mobile__language-arrow-dropdown"></div>
            <ul class="navbar-mobile__dropdown-popup">
              <template
                v-for="(language, index) in languagesData"
                :key="language.id"
              >
                <li
                  class="navbar-mobile__dropdown-popup-wrapper"
                  @click="handleChangeLanguage(language)"
                >
                  <span
                    v-if="language.isChecked"
                    class="navbar-mobile__dropdown-popup-tick-icon"
                  >
                    <TickIcon />
                  </span>
                  <span
                    v-else="language.isChecked"
                    class="navbar-mobile__dropdown-popup-unchecked-icon"
                  >
                  </span>

                  <div class="navbar-mobile__dropdown-popup-inner">
                    <span
                      v-if="language.code === LANGUAGE_CODE.VI"
                      class="navbar-mobile__dropdown-popup-flag"
                    >
                      <img
                        src="../../../assets/svg/vi-flag.svg"
                        alt="vi-flag"
                      />
                    </span>
                    <span v-else class="navbar-mobile__dropdown-popup-flag">
                      <img
                        src="../../../assets/svg/us-flag.svg"
                        alt="en-flag"
                      />
                    </span>
                    <span class="navbar-mobile__dropdown-popup-name">{{
                      language.label
                    }}</span>
                  </div>
                </li>
                <hr v-if="index < 1" />
              </template>
            </ul>
          </div>
          <label for="close-input" class="navbar-mobile__close-icon"></label>
        </div>
        <ul class="navbar-mobile__items">
          <li
            class="navbar-mobile__item"
            v-for="(navbarItem, index) in navbarItemsData"
            :key="navbarItem.id"
            @click="showMobileModal(navbarItem.name)"
          >
            <a
              :ref="
                (el) => {
                  tagsA[index] = el;
                }
              "
              :href="navbarItem.idScroll"
              >{{ $t(`${navbarItem.i18n}.title`) }}</a
            >
          </li>
        </ul>
      </div>

      <!-- WEB -->
      <div class="navbar__logo"></div>
      <ul class="navbar__items">
        <li
          class="navbar__item"
          v-for="navbarItem in navbarItemsData"
          :key="navbarItem.id"
          @click="showMobileModal(navbarItem.name)"
        >
          <a :href="navbarItem.idScroll">{{
            $t(`${navbarItem.i18n}.title`)
          }}</a>
        </li>
        <li class="navbar__item">
          <span>
            <img
              v-if="isLanguageFlag === LANGUAGE_CODE.VI"
              src="../../../assets/svg/vi-flag.svg"
              alt="vi-flag"
            />
            <img
              v-else
              src="../../../assets/svg/us-flag.svg"
              alt="us-flag"
            /> </span
          ><span class="navbar__item-arrow-dropdown">
            <img
              src="../../../assets/svg/arrow-drop-down.svg"
              alt="arrow-dropdown"
            />
          </span>
          <ul class="navbar__dropdown-popup">
            <template
              v-for="(language, index) in languagesData"
              :key="language.id"
            >
              <li
                class="navbar__dropdown-popup-wrapper"
                @click="handleChangeLanguage(language)"
              >
                <span
                  v-if="language.isChecked"
                  class="navbar__dropdown-popup-tick-icon"
                >
                  <TickIcon />
                </span>
                <span
                  v-else="language.isChecked"
                  class="navbar__dropdown-popup-unchecked-icon"
                >
                </span>

                <div class="navbar__dropdown-popup-inner">
                  <span
                    v-if="language.code === 'vi'"
                    class="navbar__dropdown-popup-flag"
                  >
                    <img src="../../../assets/svg/vi-flag.svg" alt="vi-flag" />
                  </span>
                  <span v-else class="navbar__dropdown-popup-flag">
                    <img src="../../../assets/svg/us-flag.svg" alt="en-flag" />
                  </span>
                  <span class="navbar__dropdown-popup-name">{{
                    language.label
                  }}</span>
                </div>
              </li>
              <hr v-if="index < 1" />
            </template>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
// NAVBAR
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 20px 0;

  background: linear-gradient(180deg, var(--blur) -25%, transparent 100%);

  z-index: 10;

  .navbar {
    display: flex !important;
    justify-content: space-between;
    align-items: center;

    &-mobile {
      &__close-input {
        display: none;
      }
    }

    &__logo {
      width: 109px;
      height: 64px;

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

    &__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 38px 0;
    }

    &__item {
      list-style-type: none;

      &:not(:last-child) {
        margin-right: 84px;

        cursor: pointer;
        opacity: 1;
        transition: all 0.3s linear 0s;

        &:hover {
          opacity: 0.8;
        }
      }

      &:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          display: flex;

          cursor: pointer;
          opacity: 1;
          transition: all 0.3s linear 0s;

          &:hover {
            opacity: 0.8;
          }
        }

        &:hover > .navbar__dropdown-popup {
          display: block;
        }
      }

      a {
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1.75rem;
        color: var(--white);
        text-transform: uppercase;
        text-decoration: none;
      }

      &-arrow-dropdown {
        position: relative;
      }
    }

    &__dropdown-popup {
      position: absolute;
      width: 156px;
      top: 100%;
      left: -100px;
      right: 0;
      display: none;
      padding: 0 10px;
      border-radius: 8px;
      border: 1px solid var(--gray-01);

      background: var(--white);

      transition: all 0.3s linear;

      &:before {
        content: "";
        position: absolute;
        height: 10px;
        left: 0;
        right: 0;
        background: transparent;
        cursor: pointer;
        transform: translateY(-100%);
      }

      &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 1;
        transition: all 0.3s linear 0s;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      &-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: auto;
      }

      &-unchecked-icon {
        padding: 12px;
      }

      &-name {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.8rem;
        color: var(--black);
        text-transform: none;
      }
    }
  }
}

// <= 739px
@media (max-width: 739px) {
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 48px;

    background: linear-gradient(180deg, var(--blur) -25%, transparent 100%);
    z-index: 10;

    .navbar {
      &-mobile {
        &__wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        &__logo {
          width: 68px;
          height: 40px;

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

        &__menu {
          width: 40px;
          height: 40px;

          background: var(--white);
          mask: url("../../../assets/svg/menu.svg") no-repeat center / contain;
          -webkit-mask: url("../../../assets/svg/menu.svg") no-repeat center /
            contain;

          cursor: pointer;
          opacity: 1;
          transition: all 0.3s linear 0s;

          &:hover {
            opacity: 0.8;
          }
        }

        &__close-input {
          display: none;
          &:checked ~ .navbar-mobile__toggle {
            transform: translateX(0%);
          }
        }

        &__toggle {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 100%;
          height: 100%;
          max-height: auto;
          padding: 48px 20px 0 20px;

          background: var(--white);
          opacity: 1;
          transform: translateX(-100%);
          transition: all 0.3s linear;
        }

        &__language {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 11;

          &-wrapper {
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 7px;
            border-radius: 8px;
            border: 1px solid var(--gray-06);
            background: var(--gray-05);

            &:hover > .navbar-mobile__dropdown-popup {
              display: block;
            }
          }

          &-arrow-dropdown {
            width: 24px;
            height: 24px;

            background: var(--black);
            mask: url("../../../assets/svg/arrow-drop-down.svg") no-repeat
              center / contain;
            -webkit-mask: url("../../../assets/svg/arrow-drop-down.svg")
              no-repeat center / contain;

            cursor: pointer;
            opacity: 1;
            transition: all 0.3s linear 0s;

            &:hover {
              opacity: 0.8;
            }
          }
        }

        &__close-icon {
          width: 30px;
          height: 30px;

          background: var(--black);
          mask: url("../../../assets/svg/close.svg") no-repeat center / contain;
          -webkit-mask: url("../../../assets/svg/close.svg") no-repeat center /
            contain;

          cursor: pointer;
          opacity: 1;
          transition: all 0.3s linear 0s;

          &:hover {
            opacity: 0.8;
          }
        }

        &__items {
          margin-top: 16px;
          list-style-type: none;
        }

        &__item {
          padding: 26px 0;
          border-bottom: 1px solid var(--gray-01);
          text-align: center;

          cursor: pointer;
          opacity: 1;
          transition: all 0.3s linear 0s;

          &:hover {
            opacity: 0.8;
          }

          a {
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 1.8rem;
            text-transform: uppercase;
            text-decoration: none;

            color: var(--black);
            cursor: pointer;
          }
        }

        &__dropdown-popup {
          position: absolute;
          width: 156px;
          top: 120%;
          left: 0;
          right: 0;
          display: none;
          padding: 0 10px;
          border-radius: 8px;
          border: 1px solid var(--gray-01);

          background: var(--white);

          transition: all 0.3s linear;

          &:before {
            content: "";
            position: absolute;
            height: 10px;
            left: 0;
            right: 0;
            background: transparent;
            cursor: pointer;
            transform: translateY(-100%);
          }

          &-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            opacity: 1;
            transition: all 0.3s linear 0s;
            cursor: pointer;

            &:hover {
              opacity: 0.8;
            }
          }

          &-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: auto;
          }

          &-unchecked-icon {
            padding: 12px;
          }

          &-name {
            font-size: 1rem;
            font-weight: 700;
            line-height: 1.8rem;
            color: var(--black);
            text-transform: none;
          }
        }
      }

      &__logo {
        display: none;
      }

      &__items {
        display: none;
      }
    }
  }
}

// > 740px - <= 1023px
@media (min-width: 740px) and (max-width: 1023px) {
  nav {
    .navbar {
      &-mobile {
        &__items,
        &__wrapper {
          display: none;
        }
        &__toggle {
          display: none;
        }
      }
      &__item {
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
}

// > 1024px
@media (min-width: 1024px) {
  nav {
    .navbar {
      &-mobile {
        &__items,
        &__wrapper {
          display: none;
        }
        &__toggle {
          display: none;
        }
      }
    }
  }
}
</style>
