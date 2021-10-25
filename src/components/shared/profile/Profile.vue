<template>
  <div id="my-container">
    <div class="my-3">
      <!-- Our triggering (target) element -->     
      <b-avatar
        button
        variant="primary"
        :text="extractAbbrFullName(this.user.nm_user)"
        id="popover-reactive-1"
      ></b-avatar>
    </div>

    <!-- Output from the popover interaction -->
    <b-card title="Returned values:" v-if="input1Return && input2Return">
      
    </b-card>

    <!-- Our popover title and content render container -->
    <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
    <!-- We specify the same container as the trigger button, so that popover is close to button -->
    <b-popover
      target="popover-reactive-1"
      triggers="click"
      :show.sync="popoverShow"
      placement="auto"
      container="my-container"
      ref="popover"
      @show="onShow"
      @shown="onShown"
      @hidden="onHidden"
    >
      <template #title>
        <div>
          <span>
        <a @click="onClose">close</a>
        </span>
        <span>
        <a v-on:click="efetuarLogout">Logout</a>
        </span>
        </div>
       
      </template>

      <div style="display:flex;">
        <div>
        <b-avatar size="72px"></b-avatar>
        </div>
        <div>
            {{user.nm_user}}
            {{user.email}}
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logoutMixin from '../../../mixins'

  export default {
      name: "Profile",
      mixins: [logoutMixin],
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
    data() {
      return {
        input1: '',
        input1state: null,
        input2: '',
        input2state: null,
        options: [{ text: '- Choose 1 -', value: '' }, 'Red', 'Green', 'Blue'],
        input1Return: '',
        input2Return: '',
        popoverShow: false
      }
    },
     computed: {
    ...mapGetters(['userIsLogged'])
    },
    watch: {
      input1(val) {
        if (val) {
          this.input1state = true
        }
      },
      input2(val) {
        if (val) {
          this.input2state = true
        }
      }
    },
    methods: {
    extractAbbrFullName(nm_user) {

      let fullNameSplitArray = [];
      let abbrUserName = "";

      if (nm_user != undefined) {
        fullNameSplitArray = nm_user.trim().split(" ");

        if(fullNameSplitArray.length > 1){
          abbrUserName = fullNameSplitArray[0][0] + fullNameSplitArray[fullNameSplitArray.length - 1][0];
        }else{
           abbrUserName = fullNameSplitArray[0][0] + fullNameSplitArray[0][1];
        }
        
      }

      return abbrUserName;
    },
      onClose() {
        this.popoverShow = false
      },
      onOk() {
        if (!this.input1) {
          this.input1state = false
        }
        if (!this.input2) {
          this.input2state = false
        }
        if (this.input1 && this.input2) {
          this.onClose()
          // Return our popover form results
          this.input1Return = this.input1
          this.input2Return = this.input2
        }
      },
      onShow() {
        // This is called just before the popover is shown
        // Reset our popover form variables
        this.input1 = ''
        this.input2 = ''
        this.input1state = null
        this.input2state = null
        this.input1Return = ''
        this.input2Return = ''
      },
      onShown() {
        // Called just after the popover has been shown
        // Transfer focus to the first input
        this.focusRef(this.$refs.input1)
      },
      onHidden() {
        // Called just after the popover has finished hiding
        // Bring focus back to the button
        this.focusRef(this.$refs.button)
      },
      focusRef(ref) {
        // Some references may be a component, functional component, or plain element
        // This handles that check before focusing, assuming a `focus()` method exists
        // We do this in a double `$nextTick()` to ensure components have
        // updated & popover positioned first
        this.$nextTick(() => {
          this.$nextTick(() => {
            ;(ref.$el || ref).focus()
          })
        })
      }
    }
  }
</script>