<template>
  <v-app>
        <div class=" firstNav" >
          <v-layout row wrap hidden-sm-and-down>
              <v-flex xs1 text-xs-center   v-for="item in pageTitle" :key="item.id">
                <v-btn  @click="nextPage(item.link)"  dark flat>{{item.name}}</v-btn>
              </v-flex>
             
           </v-layout>
 
       </div>
       
    <v-toolbar class="toolbarMain" >
      <v-layout justify-space-between align-center >
      <v-flex xs3 >
        <v-layout hidden-lg-and-up>
     <v-toolbar-title class="title" @click="navShow=true" >
         <v-toolbar-side-icon  ></v-toolbar-side-icon>
         <span style="font-size:16px">CATEGORIES</span>
    </v-toolbar-title>
        </v-layout>
      </v-flex>
      <v-flex  xs3>
        <img class=" imgLogo"  src="http://elmasria.co/resources/assets/site/images/logo.png">
      </v-flex>
     
      <v-flex xs2 class="rightToolbar"  hidden-sm-and-down>
        <v-layout  justify-end>
            <v-flex  >  <a href="" class="fa fa-telegram"></a></v-flex>
            <v-flex >      <a href="" class="fa fa-twitter"></a></v-flex>
               
         <v-flex>    <v-btn flat="" dark v-if="nameShow" class="animated bounceInDown succ"> Hello {{nameShow}}</v-btn></v-flex>
        </v-layout>
     </v-flex>
      </v-layout>
     </v-toolbar>
 <router-view></router-view>
    <v-content>
   <v-navigation-drawer 
      fixed=""
     v-model="navShow" temporary="">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
       
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon}}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
    </v-content>
   
  </v-app>
</template>

<script>

export default {
  name: 'App',
  
  data () {
    return {
      navShow:false,
      
      items:["vue","anglur","react"]
    }
  },
  computed:
  {
    pageTitle()
    {
      return this.$store.getters.pageContent
    },
    nameShow()
    {
      return this.$store.getters.nameShow
    }
  },
  methods:
  {
    nextPage(linkPage)
    {
      this.$router.push(linkPage)
    }
  }
}
</script>
<style >
.firstNav
{
  background:rgb(49, 75, 115);
  }
.navMain
{
  color: #B0BEC5;
}


.navMain:hover{

color: white
}
.imgLogo
{
  position: absolute;
  width:180px;
  height:100px;
  margin-top: -20px;
}
@media screen and ( max-width :700px) {
   .imgLogo
    {
      position: absolute;
      width:100px;
      height:50px;
      
    }
  .toolbarMain
  {
    background: rgba(0, 0, 0, 0.568);
    height:80px;
  }
}
.fa 
{
  font-size:200%;
  color: rgb(87, 79, 79);
  width:50px;
  text-align: center;
  text-decoration: none;
}

.succ
{
  font-weight: bold;
  font-size: 15x;
  margin: 0px;
  background-color: green;
  color: white;
}
.succ:hover
{
  background: #2E7D32;
}

</style>
