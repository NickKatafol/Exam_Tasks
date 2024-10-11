<script setup lang="ts">
import { ref, computed, shallowRef, ComponentPublicInstance } from 'vue';
import EditorCard from '@/components/EditorCard.vue'
import { initialTableData } from '../assets/data/initialTableData';

const tableData = ref<ITableRow[]>(initialTableData)
const cardType = shallowRef<ComponentPublicInstance>(EditorCard)

//editedRowIndex >= 0    - the existed TableRow
//editedRowIndex = -1    - the new (empty) TableRow
//editedRowIndex = -404  - the no selected TableRow
const editedRowIndex = ref<number>(-404)

function onTabRowHolder(ev: Event): void {
  let dataset = ev?.target?.dataset?.rowIndex

  if (dataset === undefined)
    editedRowIndex.value = -404
  else
    editedRowIndex.value = +ev?.target?.dataset?.rowIndex
}

const rowForEdit = computed<ITableRow>({
  get() {
    if (editedRowIndex.value >= 0)
      return tableData.value[editedRowIndex.value]
    return {firstName: '', lastName: '', age: 0}
  },
  set(val: ITableRow) {
    if(editedRowIndex.value === (-1)){
      tableData.value.unshift(val)
      editedRowIndex.value = 0
    } else {
      tableData.value[editedRowIndex.value] = val
    }
  }
})

</script>
<script lang="ts">
export interface ITableRow {
  firstName: string
  lastName: string
  age: number
}
</script>

<template>
  <Teleport to=".app-wrapper">
    <component :is="cardType" 
               v-model="rowForEdit" 
               v-if="editedRowIndex !== (-404)" 
               :onTabRowHolder
               class="editor"
    />
  </Teleport>

  <main class="task-wrapper" 
        @click="onTabRowHolder"
  >
    <div class="task_menu">
      <h3>Sensitive data</h3>
      <button :data-row-index="-1">
        Add the new row
      </button>
    </div>

    <table v-if="tableData.length">
      <thead>
        <tr>
          <th v-for="(key, ind) of Object.keys(tableData[0])" 
              :key="'thead' + ind"
          >
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, ii) of tableData" :key="'tr' + ii">
          <td v-for="(val, key, ind) of item" 
              :key="'td' + ind" 
              :data-row-index="ii"
          >
            {{ val }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      The table data is empty
    </div>
  </main>
</template>

<style scoped>
.task-wrapper {
  width: 100%;
}

.task_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.editor {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}


table thead tr th {
  border-top: rgb(56, 241, 180) 1px solid;
  border-bottom: rgb(56, 241, 180) 1px solid;
  text-align: left;
  padding: 6px;
  color: rgb(134, 126, 126);
}

table tbody tr {
  color: #333;
}

table tbody tr:hover {
  background: rgb(241, 237, 237);
  cursor: pointer;
}

table tbody tr:first-child td {
  margin-top: 10px;
}
</style>
