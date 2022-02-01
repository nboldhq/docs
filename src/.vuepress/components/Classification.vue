<!--
Classification Component
Embeds a classification label in a page depending on the "label" property
Usage: <Classification label="public" />
-->

<template>
  <div>
    <div v-if="label === 'public'" class="classification">
      <a href="/platform/classification"
        ><img
          alt="classification:PUBLIC"
          src="https://img.shields.io/badge/classification-PUBLIC-green"
      /></a>
    </div>
    <div v-else-if="label === 'external'" class="classification">
      <a href="/platform/classification"
        ><img
          alt="classification:EXTERNAL"
          src="https://img.shields.io/badge/classification-EXTERNAL-blue"
      /></a>
    </div>
    <div v-else-if="label === 'internal'" class="classification">
      <a href="/platform/classification"
        ><img
          alt="classification:INTERNAL"
          src="https://img.shields.io/badge/classification-INTERNAL-orange"
      /></a>
    </div>
    <div v-else-if="label === 'client-confidential'" class="classification">
      <a href="/platform/classification"
        ><img
          alt="classification:CLIENT-CONFIDENTIAL"
          src="https://img.shields.io/badge/classification-CLIENT%20CONFIDENTIAL-red"
      /></a>
    </div>
    <div v-else-if="label === 'company-confidential'" class="classification">
      <a href="/platform/classification"
        ><img
          alt="classification:COMPANY-CONFIDENTIAL"
          src="https://img.shields.io/badge/classification-COMPANY%20CONFIDENTIAL-red"
      /></a>
    </div>
  </div>
</template>

<script>
// Get access to the "label" property
export default {
  props: ["label"],
};
</script>

<style scoped>
.classification {
  text-align: right;
  padding-top: 10px;
}
</style>
