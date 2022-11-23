<script setup lang="ts"></script>

<template>
  <section id="our-games" class="our-games">
    <div class="layout wide">
      <h1 class="our-games__title">{{ $t("ourGames.title") }}</h1>
      <p class="our-games__description">
        {{ $t("ourGames.description") }}
      </p>
      <div class="our-games__wrapper">
        <div class="our-games__inner">
          <div class="our-games__cards">
            <div class="our-games__card">
              <img src="../../assets/image/card-1.png" alt="card-1" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">E-Space</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-2.png" alt="card-2" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Pirates</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-3.png" alt="card-3" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Magic tree</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="our-games__cards">
            <div class="our-games__card">
              <img src="../../assets/image/card-4.png" alt="card-4" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Kingland</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-5.png" alt="card-5" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Witch Party</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-6.png" alt="card-6" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Aborigines</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="our-games__inner">
          <div class="our-games__cards">
            <div class="our-games__card">
              <img src="../../assets/image/card-7.png" alt="card-7" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">The Last Game</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-8.png" alt="card-8" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Rocky</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-9.png" alt="card-9" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Cinderella</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="our-games__cards">
            <div class="our-games__card">
              <img src="../../assets/image/card-10.png" alt="card-10" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">G-Dragon</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-11.png" alt="card-11" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Blue Fire</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="our-games__card">
              <img src="../../assets/image/card-12.png" alt="card-12" />
              <div class="our-games__card-info">
                <h1 class="our-games__card-info-title">Egypt Game</h1>
                <p class="our-games__card-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// OUR GAMES
.our-games {
  margin-bottom: 128px;

  &__title {
    margin-bottom: 28px;

    text-align: center;
    font-family: "Playfair Display", serif;
    font-weight: 900;
    font-size: 6rem;
    line-height: 6rem;
    letter-spacing: 3.6px;
    color: var(--black);
  }

  &__description {
    padding: 0 460px;
    margin: 0 auto;
    margin-bottom: 80px;

    text-align: center;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: var(--gray-04);
  }

  &__wrapper {
    display: flex;
    margin-left: -20px;
    margin-right: -20px;
  }

  &__inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__cards {
    &:last-child {
      margin-top: 100px;
    }
  }

  &__card {
    position: relative;
    padding: 0 20px;
    width: 100%;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    img {
      background: linear-gradient(to top, var(--blue-03) 10%, transparent 60%);
      border-radius: 12px;
    }

    &-info {
      position: absolute;
      bottom: 8%;
      left: 0;
      right: 0;

      padding: 0 54px;

      &-title {
        margin-bottom: 16px;

        font-weight: 700;
        font-size: 4.8rem;
        line-height: 6rem;
        letter-spacing: -1px;
        color: var(--white);
      }

      &-description {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.96rem;
        color: var(--white);
      }
    }
  }
}

// <= 739px
@media (max-width: 739px) {
  .our-games {
    margin-bottom: 84px;

    &__title {
      margin-bottom: 24px;
      font-size: 4rem;
      line-height: 5rem;
    }

    &__description {
      padding: 0;
      margin-bottom: 36px;
      letter-spacing: -0.3px;
      line-height: 1.96rem;
    }

    &__wrapper {
      margin-left: -8px;
      margin-right: -8px;
    }

    &__inner {
      &:last-child {
        transform: translateY(36px);
      }
    }

    &__cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      &:last-child {
        margin-top: 20px;
      }
    }

    &__card {
      width: 100%;
      height: 284px;
      padding: 0 8px;

      img {
        width: 100%;
        height: 100%;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
      &-info {
        padding: 0 16px;
        bottom: 4%;

        &-title {
          margin-bottom: 2px;
          font-size: 2.4rem;
          line-height: 3rem;
        }

        &-description {
          font-size: 1.2rem;
          line-height: 1.5rem;
          letter-spacing: 0.9px;
        }
      }
    }
  }
}

// > 740px - <= 1023px
@media (min-width: 740px) and (max-width: 1023px) {
  .our-games {
    &__title {
      margin-bottom: 24px;
      font-size: 4rem;
      line-height: 5rem;
    }

    &__description {
      padding: 0;
      margin-bottom: 36px;
    }

    &__wrapper {
      margin-left: -8px;
      margin-right: -8px;
    }

    &__inner {
      &:last-child {
        transform: translateY(72px);
      }
    }

    &__cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      &:last-child {
        margin-top: 20px;
      }
    }

    &__card {
      width: 100%;
      height: 475px;
      padding: 0 8px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        height: 100%;
      }

      &-info {
        padding: 0 16px;
        bottom: 10%;

        &-title {
          font-size: 2.4rem;
          line-height: 3rem;
        }

        &-description {
          font-size: 1.2rem;
          letter-spacing: 0.9px;
        }
      }
    }
  }
}

// > 1024px - <= 1239px
@media (min-width: 1024px) and (max-width: 1239px) {
  .our-games {
    &__description {
      padding: 0 70px;
    }
  }
}

// > 1240px - <= 1919px
@media (min-width: 1240px) and (max-width: 1919px) {
  .our-games {
    &__description {
      padding: 0 180px;
    }
  }
}

// IPAD PRO
@media (width: 1024px) and (height: 1366px) {
  .our-games {
    margin-bottom: 140px;

    &__inner {
      &:last-child {
        transform: translateY(74px);
      }
    }

    &__description {
      padding: 0;
    }

    &__cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      &:last-child {
        margin-top: 20px;
      }
    }

    &__card {
      img {
        height: 642px;
      }
    }

    &__inner {
      &:last-child {
        margin-top: 32px;
      }
    }
  }
}

// SMALL TABLET
@media (width: 600px) and (height: 800px) {
  .our-games {
    &__card {
      height: 364px;
    }

    &__description {
      padding: 0;
    }
  }
}
</style>
