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
          {{ $t("header.profile") }}
        </div>
      </template>

      <div>
        <div style="display: flex">
          <div>
            <b-avatar size="72px"></b-avatar>
          </div>
          <div>
            {{ user.nm_user }}
            {{ user.email }}
            {{ user.last_access }}
          </div>
        </div>
        <div style="display: flex">
          <div style="text-align: start; width: 50%">
            <a @click="efetuarLogout" style="cursor: pointer">{{
              $t("header.logout")
            }}</a>
          </div>
          <div style="text-align: end; width: 50%">
            <a @click="onClose" style="cursor: pointer">{{
              $t("header.close")
            }}</a>
          </div>
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import logoutMixin from "../../../mixins";

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
      popoverShow: false,
    };
  },
  computed: {
    ...mapGetters(["userIsLogged"]),
  },
  watch: {},
  methods: {
    // Salva a abreviação do nome do usuário
    extractAbbrFullName(nmUser) {
      let fullNameSplitArray = [];
      let abbrUserName = "";

      if (nmUser !== undefined) {
        fullNameSplitArray = nmUser.trim().split(" ");

        if (fullNameSplitArray.length > 1) {
          abbrUserName =
            fullNameSplitArray[0][0] +
            fullNameSplitArray[fullNameSplitArray.length - 1][0];
        } else {
          abbrUserName = fullNameSplitArray[0][0] + fullNameSplitArray[0][1];
        }
      }

      return abbrUserName;
    },
    onClose () {
      this.popoverShow = false;
    },
    onShow () {},
    onShown () {},
    onHidden () {},
  },
};
</script>
