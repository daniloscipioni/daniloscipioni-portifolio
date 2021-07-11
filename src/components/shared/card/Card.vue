<template>
  <div class="card-expansion">
    <md-card>
      <md-card-header>
        <div class="md-title">{{title}}</div>
        <div class="md-subhead">{{date}}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions>
         <md-card-expand-trigger >
            <md-button class="md-icon-button" >
              <md-icon>more_horiz</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
           {{content}}
           </md-card-content>
           <div class="md-subhead">Fonte: 
             <a :href=link target="_blank" >{{source}}</a>
             </div>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>
<script>
  export default {
    name: 'CardExpansion',
    props:{
      title: String,
      date: String,
      content: String,
      link: String,
      source: String
    }
  }
</script>

<style lang="scss" scoped>
  .card-expansion {
    // height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>