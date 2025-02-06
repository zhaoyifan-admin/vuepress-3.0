<template>
  <div style="position:relative;height:400px;"
       @mousedown="handleMouseDown">
    <div class="tvue-grid"></div>
    <tvue-draggable :width="obj.width"
                    :height="obj.height"
                    :left="obj.left"
                    :top="obj.top"
                    id="draggable"
                    ref="draggable"
                    @focus="handleFocus"
                    @blur="handleBlur">
      <div style="width:200px;height:200px;background:red"></div>
    </tvue-draggable>
    <tvue-draggable :width="obj1.width"
                    :height="obj1.height"
                    :left="obj1.left"
                    :top="obj1.top"
                    id="draggable1"
                    ref="draggable1"
                    @focus="handleFocus"
                    @blur="handleBlur">
      <div style="width:200px;height:200px;background:green"></div>
    </tvue-draggable>
    <tvue-draggable lock
                    :width="obj2.width"
                    :height="obj2.height"
                    :left="obj2.left"
                    :top="obj2.top"
                    id="draggable2"
                    ref="draggable2"
                    @focus="handleFocus"
                    @blur="handleBlur">
      <div style="width:200px;height:200px;background:yellow"></div>
    </tvue-draggable>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const draggable1 = ref(null)
const obj = ref({
  width: 100,
  height: 100,
  left: 100,
  top: 100
});
const obj1 = ref({
  width: 200,
  height: 200,
  left: 300,
  top: 200
});
const obj2 = ref({
  width: 100,
  height: 100,
  left: 500,
  top: 200
});

const handleMouseDown = () => {
  draggable1.value.setActive(false);
};

const handleFocus = ({ index, left, top, width, height }) => {
  console.log(index, left, top, width, height);
};

const handleBlur = ({ index, left, top, width, height }) => {
  console.log(index, left, top, width, height);
};
</script>
