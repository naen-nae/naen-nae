import { ComponentInternalInstance } from 'vue-demi';

export const getModelValueUpdator = (ctx: ComponentInternalInstance | null) => {
  if (!ctx) {
    console.warn('ComponentInternalInstance is null');
    return;
  }

  const { emit } = ctx;

  return {
    emit,
    handleInput: ({ target }: Event) => {
      if (!target) {
        return;
      }

      const { value } = target as HTMLInputElement;
      emit('update', value);
      emit('update:modelValue', value);
    },
  };
};
