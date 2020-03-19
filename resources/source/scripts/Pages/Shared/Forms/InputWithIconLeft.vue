<template>
    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <div class="flex -mr-px">
            <span v-if="setIcon !== undefined" 
                class="flex items-center shadow appearance-none leading-normal bg-gray-200 rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
            >
                <v-icon v-bind:name="setIcon" />
            </span>
            <span v-else class="flex items-center shadow appearance-none leading-normal bg-gray-200 rounded rounded-r-none border border-r-0 border-gray-light px-3 whitespace-no-wrap text-gray-dark text-sm">
                {{ (setIcon === undefined) ? __(setPlaceHolder) : '' }}
            </span>
        </div>
        <input
            :id="setName"
            :type="setType"
            v-model="currentValue"
            @blur="onBlur"
            @focus="onFocus"
            @keyup="$emit('keyup', $event)"
            @keydown="$emit('keydown', $event)"
            class="flex-shrink flex-grow flex-auto flex-1 border h-10 shadow appearance-none leading-tight text-gray-800 border-gray-200 rounded rounded-l-none px-3 relative outline-none focus:shadow-outline"
            :name="setName"
            value=""
            :placeholder="__(setPlaceHolder)"
        />
    </div>
</template>
<script>
export default {
    name: "InputWithLeftIcon",
    props: {
        inputIcon: String,
        inputPlaceholder: String,
        inputName: String,
        inputType: String,
        value: {
            type: [String, Number],
            default: null
        }
    },
    data() {
        return {
            setIcon: this.inputIcon,
            setPlaceHolder:
                this.inputPlaceholder === undefined
                    ? this.inputName
                    : this.inputPlaceholder,
            setName: this.inputName,
            setId: this.inputName,
            setType: this.inputType === undefined ? "text" : this.inputType,
            currentValue: this.value,
            valueWhenFocus: null
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },

        currentValue(currentValue) {
            this.$emit("input", currentValue);
        }
    },
    methods: {
        onBlur(e) {
            this.$emit("blur", e);
            if (this.currentValue !== this.valueWhenFocus) {
                this.$emit("change", this.currentValue);
            }
        },
        onFocus(e) {
            this.$emit("focus", e);
            this.valueWhenFocus = this.currentValue;
        }
    }
};
</script>
