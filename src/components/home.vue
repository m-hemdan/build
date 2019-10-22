<template>
       <v-container fluid="" class="pageContent">
       <h1 class="main"> made with<span class="vueText"> Egyption real state</span> </h1>
      <v-container fluid >
       <v-layout justify-space-around class="marqueeScroll" hidden-md-and-down>
         <v-flex xs1.5>
            <v-layout >
            <v-flex> 
                <v-btn @click="moveRight"  class="autoPlay" dark flat ><v-icon>arrow_left</v-icon></v-btn>
            </v-flex>
            <v-flex>    
                <v-btn  :onClick="mymarquee"
                class="autoPlay" dark flat
                @click="stopAndPlay">
                <v-icon>{{stopPlay}}</v-icon> 
                </v-btn>
              </v-flex>
            <v-flex> <v-btn @click="moveLeft" class="autoPlay" dark flat ><v-icon>arrow_right</v-icon></v-btn></v-flex>
            </v-layout>
          </v-flex>
         <v-flex xs10>
            <marquee id="mymarquee"  onmouseover="this.stop()" onmouseout="this.start()">
              <v-layout row >
                <v-flex xs3 pl-2 ml-2 class="indigo--text build"  v-for="item in building" :key="item.key">
                 Egyption <span style="text-decoration:underline" >({{item.buildNum}}) </span> <v-avatar size="25" tile> <img src="http://elmasria.co/resources/assets/site/images/logo.png"> </v-avatar>
               </v-flex>
                </v-layout> </marquee>
    
         </v-flex>
         <v-flex xs1><v-btn class="succ" dark flat  @click="false">last news</v-btn></v-flex>
       </v-layout>
     </v-container>
     <v-container fluid class="carouselMain">
       <v-carousel 
     hide-delimiter-background
    show-arrows-on-hover>
       <v-carousel-item 
       v-for="item in carouselContent" :key="item.key"
       :src="item.imgLink"
        reverse-transition="fade-transition"
      transition="fade-transition"
        >
  
        <div
        class="carouselLabel"
          align="center"
          justify="center"
        >
          <div class="display-3 animated delay-1s  duration-2s"
          :class="item.trans"
          
                   >{{item.label}}</div>
        </div>
         <div  class="carouselLabel"
          align="center"
          justify="center"><div class="display-1 animated bounceInDown">
Egyptian Real Estate Investment Company</div></div>
       </v-carousel-item>
       </v-carousel>
     </v-container>
       <v-container fluid >
         <v-layout>
           <v-flex  class="ourProject"> Our project</v-flex>
         </v-layout>
          <v-layout  >
            <v-flex md4 sm12>
                    <v-card class="card" >
                     <v-card-actions v-for="item in building" :key="item.key" >
                        <div style="width:100%" 
                       >
                          <v-btn style="width:100%;"
                          class="projectBtn"
                           flat
                           dark
                           @mouseover="changeItem(item)"
                           :class="{ active: activeBtn === item.buildNum}"
                           @mouseenter="changeItem(item)" 
                           @click="changeItemPage(item)"> Egyption    {{item.buildNum}}
                          </v-btn>
                         

                          <v-divider></v-divider>
                        </div>
                      </v-card-actions>
                      
                    </v-card>
                </v-flex>  <v-flex md8 sm12 >
              <div >  
                <v-img :src="imgNow" class="imgContainer"> </v-img>
              </div>
                </v-flex>
                
            </v-layout>
          </v-container>
          
     </v-container>
</template>
<script>
export default {
 data()
 {
    return {
      const:'50px',
      mymarquee:"",
      activeBtn:29,
     stopPlay:'play_arrow',
      imgNow:"http://elmasria.co/resources/uploads/projects/2019-03-21/masria_1553179995.jpg"
   ,
   carouselContent:[{id:1,label:"Hello everybody",imgLink:"http://elmasria.co/resources/assets/site/images/slider-bg3.jpg",trans:"bounceInUp"},
   {id:2,label:"Our Vision",imgLink:"http://elmasria.co/resources/assets/site/images/slider-bg2.jpg",trans:"bounceInLeft"},
   {id:3,label:'Our message',imgLink:"http://elmasria.co/resources/assets/site/images/slider-bg1.jpg",trans:"bounceInRight"}]
   }
 },
  computed: {
    pageMain()
    {
     return this.$store.getters.pageContent
     
    },
    building()
    {
     
      return this.$store.getters.buildNum
    }
  },
  methods:
  {
    changeItem(item)
    {
      this.imgNow=item.imgLink
      this.activeBtn=item.buildNum

    },
    changeItemPage(item)
    {
    
     this.$router.push("/build/"+item.id)
    },
    stopAndPlay()
    {
      if (this.stopPlay=='play_arrow')
     { this.stopPlay="stop"
      this.mymarquee="document.getElementById('mymarquee').stop();"
     }
      else
     { this.stopPlay='play_arrow'
     this.mymarquee="document.getElementById('mymarquee').start();"
     }
    },
    moveRight()
    {}
    ,
    moveLeft()
    { 
        document.getElementById("mymarquee").style.marginLeft="50px"
    }
  }
}
</script>

<style scope>
.main{
text-align: center;
color: rgb(49, 75, 115);
padding:35px 0 0 0;
font-size:35px;
}
.vueText
{
  color: #43A047;
}
.imgContainer
{
  width:100%;
  height: 500px;
  border-radius: 20px;
}
.card
{
  border-radius:1.4em;
   background-color: gray;
}
.projectBtn
{
  background-color: indigo;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.2em;
  
}
.active
{
 background-image: linear-gradient(45deg, red, blue);

 font-size: 1.5em;

}

.marqueeScroll
{
  border-top:1px solid green;
}
.autoPlay
{
  background: green;
  height:25px;
  min-width: 0;
  margin: 0;
  border-radius: 0;
 
  
}
.carouselMain
{
  margin: 0;
  width: 100%;
}
.carouselLabel
{
  color: white;
 
}
.build
{
  color: #43A047;
  font-size:1.5em;
}
.ourProject
{
text-align: center;
  color: indigo ;
  font-size:3em;
   font-style: italic;
   font-weight: bold;

}
</style>
