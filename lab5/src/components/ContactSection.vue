<!-- eslint-disable @typescript-eslint/no-unsafe-function-type -->
<script setup lang="ts">
import { ref, inject } from 'vue'
import { useToast } from 'primevue/usetoast'
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const toast = useToast()
const copyToClipboard = inject<Function>('copyToClipboard')

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  agreement: false,
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true

  if (!form.value.name || !form.value.email || !form.value.message || !form.value.agreement) {
    toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Заповніть обов’язкові поля',
      life: 3000,
    })
    return
  }

  toast.add({
    severity: 'success',
    summary: 'Надіслано',
    detail: 'Ми зв’яжемось з вами!',
    life: 3000,
  })

  form.value = { name: '', email: '', phone: '', message: '', agreement: false }
  submitted.value = false
}

const supportEmail = 'support@taskflow.com'
const copyEmail = async () => {
  if (copyToClipboard && (await copyToClipboard(supportEmail))) {
    toast.add({
      severity: 'info',
      summary: 'Скопійовано',
      detail: 'Email підтримки в буфері',
      life: 3000,
    })
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <h2>Зв'яжіться з нами</h2>

    <Panel header="Форма зворотного зв'язку" class="contact-panel">
      <div class="field">
        <label>Ім'я *</label>
        <InputText v-model="form.name" :invalid="submitted && !form.name" class="w-full" />
      </div>

      <div class="field">
        <label>Email *</label>
        <InputText v-model="form.email" :invalid="submitted && !form.email" class="w-full" />
      </div>

      <div class="field">
        <label>Телефон</label>
        <InputMask
          v-model="form.phone"
          mask="+38 (999) 999-99-99"
          placeholder="+38 (099) 999-99-99"
          class="w-full"
        />
      </div>

      <div class="field">
        <label>Повідомлення *</label>
        <Textarea
          v-model="form.message"
          :invalid="submitted && !form.message"
          rows="4"
          class="w-full"
        />
      </div>

      <div class="field-checkbox">
        <Checkbox
          v-model="form.agreement"
          :binary="true"
          inputId="agreement"
          :invalid="submitted && !form.agreement"
        />
        <label for="agreement" class="ml-2">Погоджуюсь з політикою конфіденційності *</label>
      </div>

      <Button label="Надіслати" icon="pi pi-send" @click="submitForm" />
    </Panel>

    <div class="support-info">
      <p>Або напишіть нам напряму:</p>
      <Button :label="supportEmail" icon="pi pi-copy" text @click="copyEmail" />
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
.field {
  margin-bottom: 1.5rem;
}
.field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.w-full {
  width: 100%;
}
.field-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.support-info {
  text-align: center;
  margin-top: 2rem;
}
</style>
