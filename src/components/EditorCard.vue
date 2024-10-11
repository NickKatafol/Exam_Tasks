<script setup lang="ts">
import { ref, reactive, computed, toValue, type PropType, nextTick } from 'vue'
import type { ITableRow } from '../views/TaskView.vue';

const pr = defineProps({
  onTabRowHolder: {type: Function, require: true}
})

const modelValue = defineModel<ITableRow>({required: true})

const localData = ref<ITableRow>({ ...modelValue.value })

function onSave () {
  modelValue.value = JSON.parse(JSON.stringify(localData.value)) 
}

</script>

<template>
  <div class="card-container">
    <div class="card-outside" @click="onTabRowHolder">
    </div>
    <div class="cart-wrapper">
      <h3>data EDITOR</h3>

      <div v-for="(val, key, ind) of localData" :key="ind" class="input-group">
        <label :for="'label' + ind">{{ key }}</label>
        <input type="text" 
               v-model="localData[key]" 
               class="input-item" 
              :id="'label' + ind">
      </div>

      <div>
        <button @click="onSave">
          SAVE
        </button>
        <button @click="onTabRowHolder">
          OUT
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-outside {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(200, 200, 200, 0.3);
  z-index: 100;

}

.cart-wrapper {
  z-index: 101;
  width: 70%;
  min-width: 400px;
  height: fit-content;
  border: gray 1px solid;
  padding: 0 20px 20px 20px;
  background: white;
}

.input-group {
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.input-item {
  margin-left: 10px;
}


button {
  margin-top: 10px;
  margin-right: 10px;
}

</style>
