<template>
  <div>
    <div class="mb-4" >
      <b-avatar
        variant="primary"
        :text="extractAbbrFullName(this.user.nm_user)"
      ></b-avatar>
    </div>
  
  </div>
</template>

<style scoped>
.badge-primary {
  color: white;
  background-color: #007bff;
}
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "Profile",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },  
  computed: {
    ...mapGetters(['userIsLogged'])
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
  },
};
</script>