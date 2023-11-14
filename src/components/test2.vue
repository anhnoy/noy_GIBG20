<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-col>
    <label for="vehicle1" class="checkbox-label">
      <input type="checkbox" id="vehicle1" class="hidden-checkbox" />
      <span class="custom-checkbox"></span>
      Maintenance/Car Wash
    </label>

    <label for="vehicle2" class="checkbox-label">
      <input type="checkbox" id="vehicle2" class="hidden-checkbox" />
      <span class="custom-checkbox"></span>
      Business visit
    </label>

    <label for="vehicle3" class="checkbox-label">
      <input type="checkbox" id="vehicle3" class="hidden-checkbox" />
      <span class="custom-checkbox"></span>
      Self/Rental
    </label>
  </v-col>
</template>

<script>
export default {};
</script>

<style>
.hidden-checkbox {
  display: none; /* Hide the actual checkbox */
}

.checkbox-label {
  cursor: pointer;
  position: relative;
  padding-left: 35px;
}

.custom-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #e3e8ed;
  margin-left: 5px;
}

.hidden-checkbox:checked + .custom-checkbox:after {
  content: "";
  position: absolute;
  display: block;
  width: 7px;
  height: 14px;
  left: 5px;
  border: 1px solid #346ddb;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>



