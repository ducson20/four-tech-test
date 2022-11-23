<script setup lang="ts">
import type { PropType } from "vue";
type InputTypes =
  | "text"
  | "email"
  | "password"
  | "checkbox"
  | "radio"
  | undefined;

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

defineProps({
  type: {
    type: String as PropType<InputTypes>,
    require: true,
    default: "text",
    validator: (value: string) => {
      const _inputType = ["text", "email", "password", "checkbox", "radio"];
      return _inputType.includes(value);
    },
  },
  id: {
    type: String,
    require: false,
  },
  name: {
    type: String,
    require: false,
  },
  placeholder: {
    type: String,
    require: false,
    default: " ",
  },
  classes: {
    type: String,
    require: false,
  },
  modelValue: {
    type: String,
    require: false,
  },
});
</script>

<template>
  <div class="input-item">
    <!-- Input tag -->
    <input
      :type="type"
      :value="modelValue"
      :id="id"
      :name="name"
      placeholder=" "
      :class="classes"
      @input="onInput"
    />
    <!-- Placeholder -->
    <label :for="id" class="input-item__placeholder">{{ placeholder }}</label>
    <!-- Right label -->
    <slot name="rightLabelIcon" className="input-item__label-right-icon"></slot>
  </div>
</template>

<style lang="scss">
.input-item {
  position: relative;
  margin: 0 auto;

  input {
    padding: 0 14px;
    height: 56px;
    width: 100%;
    border-radius: 8px;
    border-width: 1px;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: var(--gray-03);

    background: var(--white);

    &:focus {
      outline: none;
      border-color: var(--gray-01);
      color: var(--gray-03);
    }

    &:not(:placeholder-shown) + .input-item__placeholder {
      display: none;
    }
  }

  &__placeholder {
    position: absolute;
    top: 50%;
    left: 15px;
    right: 0;
    transform: translateY(-50%);
    display: inline;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: var(--gray-03);
    user-select: none;

    cursor: text;
  }

  &__label-right-icon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    display: flex;

    cursor: pointer;
  }

  &--transparent {
    border-color: var(--white) !important;
    color: var(--white) !important;
    background: transparent !important;

    & + .input-item__placeholder {
      color: var(--white) !important;
    }

    &:focus {
      border-color: var(--gray-02) !important;
      color: var(--white) !important;
    }
  }
}
</style>
