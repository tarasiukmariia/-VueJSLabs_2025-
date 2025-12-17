<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
</script>

<template>
  <section class="faq-section">
    <h2>Часті запитання (FAQ)</h2>
    <Accordion value="0">
      <AccordionPanel value="0">
        <AccordionHeader>Чи є безкоштовна версія?</AccordionHeader>
        <AccordionContent
          >Так, план Start повністю безкоштовний для одного користувача.</AccordionContent
        >
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Як змінити тариф?</AccordionHeader>
        <AccordionContent
          >Ви можете змінити тариф у будь-який момент в налаштуваннях кабінету.</AccordionContent
        >
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>Чи можу я повернути кошти?</AccordionHeader>
        <AccordionContent
          >Так, ми надаємо гарантію повернення коштів протягом 14 днів.</AccordionContent
        >
      </AccordionPanel>
    </Accordion>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
