<script setup lang="ts">
import { useForm, useField, useFieldArray } from 'vee-validate'
import * as yup from 'yup'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const schema = computed(() => {
  return yup.object({
    name: yup
      .string()
      .required(t('validations.required'))
      .min(2, t('validations.min', { min: 2 })),
    email: yup.string().required(t('validations.required')).email(t('validations.email')),
    dateOfBirth: yup.string().required(t('validations.required')), // yup.string для дати з input type="date"
    address: yup.string().required(t('validations.required')),
    phones: yup.array().of(
      yup
        .string()
        .required(t('validations.required'))
        .min(10, t('validations.min', { min: 10 })),
    ),
  })
})

const { handleSubmit, resetForm, errors, setFieldError } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    dateOfBirth: '',
    address: '',
    phones: [''],
  },
})

const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: dateOfBirth } = useField<string>('dateOfBirth')
const { value: address } = useField<string>('address')

const { fields, push, remove } = useFieldArray('phones')

const onSubmit = handleSubmit((values) => {
  console.log('Form Submitted:', values)
  alert(JSON.stringify(values, null, 2))

  if (values.email === 'error@test.com') {
    setFieldError('email', 'Email already taken (Server Error Mock)')
  }
})
</script>

<template>
  <div class="profile-page">
    <h1>{{ $t('profile.title') }}</h1>

    <form @submit="onSubmit" class="form">
      <div class="form-group">
        <label>{{ $t('profile.name') }}</label>
        <input v-model="name" type="text" />
        <span class="error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.email') }}</label>
        <input v-model="email" type="email" />
        <span class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.dob') }}</label>
        <input v-model="dateOfBirth" type="date" />
        <span class="error">{{ errors.dateOfBirth }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.address') }}</label>
        <textarea v-model="address"></textarea>
        <span class="error">{{ errors.address }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.phones') }}</label>
        <div v-for="(field, idx) in fields" :key="field.key" class="phone-row">
          <input v-model="field.value" type="text" placeholder="+380..." />
          <button type="button" @click="remove(idx)" v-if="fields.length > 1">X</button>
          <span class="error">{{ errors[`phones[${idx}]`] }}</span>
        </div>
        <button type="button" @click="push('')" class="add-btn">
          {{ $t('buttons.add_phone') }}
        </button>
      </div>

      <div class="actions">
        <button type="submit" class="submit-btn">{{ $t('buttons.submit') }}</button>
        <button type="button" @click="resetForm()" class="reset-btn">
          {{ $t('buttons.reset') }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.profile-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
input,
textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.error {
  color: red;
  font-size: 0.85rem;
  margin-top: 4px;
}
.phone-row {
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
}
.add-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
.submit-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 10px;
}
.reset-btn {
  background: #95a5a6;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
