<template>
    <div class="flex flex-row-reverse mt-2">
        <button :type="setType" class="bg-civer-blue text-sm  leading-normal font-semibold py-2 px-4 rounded">
            <v-icon v-if="setLeftIcon !== undefined" :name="setLeftIcon" />
            {{ __(setLabel) }}
            <v-icon v-if="setRightIcon !== undefined" :name="setRightIcon" />
        </button>
    </div>
</template>
<script>

export default {
  name: "ButtonWithIcon",
  props: {
    btnIconRight: String,
    btnIconLeft: String,
    btnLabel: String,
    btnType: String
  },
  data() {
    return {
      setRightIcon: this.btnIconRight,
      setLeftIcon: this.btnIconLeft,
      setLabel: this.btnLabel,
      setType: this.btnType
    }
  },
}
</script>
