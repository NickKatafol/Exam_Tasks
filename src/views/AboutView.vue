<template>
  <div class="about">
    <h3>ABOUT of the Project</h3>

    <section>
      <h4>About of the Editor Card</h4>

      The inputs of src/components/EditorCard.vue can not showed up because the row data does not go from the
      src/views/TaskView.vue into the EditorCard.vue.
      <br>
      It should be happening via the rowForEdit through the v-model.

      <p>
        If we make changes in the inputs of EditorCard.vue there would not be any changes inside the table yet.
      </p>
      <p>
        The click on the SAVE button should fix the changes of table row.
        <br>
        If there was no the click on the SAVE button before, the clicking on the OUT button should close the EditorCard
        without any changes in the table row data.

      </p>
      <p>
        The click on the OUT button or outside of the Editor window should close the EditorCard.
      </p>
      <p>
        If we make some changes in the inputs, then click on the SAVE button,
        then make some changes in the inputs agen, and finally click on the OUT button,
        the second changes should not be saved in the table data.
      </p>
      <p>
        All the work has to be into the src/components/EditorCard.vue component.
      </p>
    </section>
    <!-- <section>
      <h4>Target behavior</h4>
      <video controls src="../assets/Fri Sep 20 2024 8_36_48 PM.webm"></video>
    </section> -->


  </div>
</template>

<style>
section {
  border-top: gray 1px solid;
}

video {
  width: 100%;
}
</style>
