<template >
    <div class="buildDetailsPage allPage">
        <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
            <v-layout >
                <v-flex xs12 align-center class="headerBuildDetails animated bounceInLeft" display-2>
                 the egyption ( {{returnBuild.buildNum}} )
                </v-flex> 
             </v-layout>
             <v-layout >          
                <v-flex dark xs12 class="headerSelectProject">
                 <v-icon dark >assignment</v-icon>    Project
                 </v-flex>
             </v-layout>
             <v-layout >
                 <v-flex xs12 dark class="imgSelectProject"> 
                      Image of the project 
                      <div><img  class="imgUnderline" src="https://www.sccpre.cat/png/big/3/36147_underline-png.jpg"></div>
                     <v-layout >
                     <v-content >
                         <v-layout justify-center>
                           <v-carousel hide-delimiters transition=fade light align-center class="carouselImgProject">
                                <v-carousel-item  v-for="item in returnBuild.imgSelectProject" :key="item.key" >
                               <v-layout justify-center> <v-flex xs9 >
                                <v-img :src="item" class="imgProject"></v-img>
                               
                                </v-flex>
                               </v-layout>
                                </v-carousel-item>
                           </v-carousel>
                          </v-layout>
                      </v-content>

                         
                     </v-layout>
                </v-flex>
             </v-layout>
            <v-layout>
           
               <v-flex xs12 class=" descripProject imgSelectProject " id="descripProjectId">
                  Description of the project   
                              <v-layout mt-2>
                   <v-flex hidden-sm-and-down dark xs3 >
                       <div class="area " :class="animatePlace" >
                           the place 
                           <v-layout justify-center>
                               <v-flex class="yellow--text" style="font-size:18px">المعلمين الجديده</v-flex>
                              
                           </v-layout>
                       </div>
                   </v-flex>
                   <v-flex class="dateOfArrive " :class="animateDate" mt-2 xs12 md6>                     
                       Date of delivered :  {{returnBuild.dateArrive}} 
                       <v-layout justify-start align-start>
                           <v-flex>
                            <v-list class="listOfData" dark style="background:none">
                                <v-list-tile
                                    v-for="item in returnBuild.dataBuild"
                                    :key="item.key"
                                 >
                                  <v-list-tile-avatar>
                               <i class="material-icons">
                                    account_circle
                                    </i>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-text="item"></v-list-tile-title>
                                </v-list-tile-content>
                                   
                                    <v-list-tile-avatar>
                                    <v-img :src="item.avatar"></v-img>
                                    </v-list-tile-avatar>
                                </v-list-tile>
                            </v-list>
                          
                           </v-flex>
                       </v-layout>
                       </v-flex>
                   <v-flex hidden-sm-and-down dark xs3>
                       <div class="diameter " :class="animateArea">
                           The area 
                           <v-layout justify-center>
                               <v-flex class="yellow--text" style="font-size:18px">114-116</v-flex>
                               
                           </v-layout>
                       </div>
                   </v-flex>
               
               </v-layout> 
                  
              <v-layout justify-start >
                   <v-flex xs12 ma-2 offset-xs1 >
                      <div>
                        <div>coordinate : {{returnBuild.lat}},{{returnBuild.lang}}</div>
                        <gmap-map
                            :center="{lat:returnBuild.lat,lng:returnBuild.lang}"
                            :zoom="12"
                            style="width:100%;  height: 400px;"
                            >
                                <gmap-marker
                                :key="index"
                                    v-for="(m, index) in markers"
                                    :position="m.position"
                                    @click="center=m.position"
                            ></gmap-marker>
                        </gmap-map>
                </div>
                 </v-flex>
            </v-layout>
            </v-flex>
             </v-layout>
             <v-layout>
              <v-flex xs12 dark  class="imgSelectProject showVideo"> 
                      show this video
                      <div><img  class="imgUnderline" src="https://www.sccpre.cat/png/big/3/36147_underline-png.jpg"></div>
                     <v-layout>
                         <v-flex>
                             <iframe width="560" height="315" src="https://www.youtube.com/embed/w1szuyb9-AQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           </v-flex>
                     </v-layout>
              </v-flex>
             </v-layout>
             <v-layout  >
                 <v-flex class="bookingData white--text" dark xs12>
                     booking information  
                     <v-layout row wrap >
                        <v-flex xs12 md6>
                           <div> Number of floor:12</div>
                           <div> The area: 116 </div>
                            <v-layout justify-center align-center mt-2>
                               <v-flex xs1  class="redBox"></v-flex>
                               <v-flex xs2 > Resrved</v-flex>
                           </v-layout>
                           <v-layout  justify-center align-center>
                               <v-flex xs1  class="greenBox"></v-flex>
                               <v-flex xs2>stay</v-flex>
                           </v-layout>
                           <v-layout>
                               <v-flex xs12 mt-2 offset-xs-3 class="resAndQuery">

                                For reservation and query : 01018244448 - 01150057171 - 088/9202002
                               </v-flex>
                           </v-layout>
                           
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-layout justify-center >
                                <v-flex xs5  >
                                    <table class="tableFlat">
                                        <tr>
                                            <th>Flat 1</th>
                                            <th>Flat 2</th>
                                        </tr>
                                         <tr><td></td><td></td></tr>
                                          <tr><td></td><td></td></tr>
                                           <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                            <tr><td></td><td></td></tr>
                                                    
                                    </table>
                                    
                                </v-flex>
                                <v-flex xs3>Floor
                                <v-flex v-for="k in 10" :key="k.key" >{{k}}</v-flex>
                                </v-flex>
                             </v-layout>
                        </v-flex>
                    </v-layout>
                 </v-flex>
             </v-layout>
             <v-layout justify-center align-center>
                 <v-flex class="alsoShow black--text">
                   <h1 class="show">Also show</h1> 
                 <div><img  class="imgUnderline" src="https://www.sccpre.cat/png/big/3/36147_underline-png.jpg"></div>
                     <v-layout justify-center>
                        <v-carousel hide-delimiters transition=fade light align-center class="carouselImgProject">
                                <v-carousel-item  v-for="item in build" :key="item.key" >
                               <v-layout justify-center> <v-flex xs9 >
                                <v-img :src="item.imgLink" class="imgProject"></v-img>
                               
                                </v-flex>
                               </v-layout>
                                </v-carousel-item>
                           </v-carousel>
                     </v-layout>
                  </v-flex>
             </v-layout>
                 <v-layout justify-center dark>
                     <contactUS></contactUS>
                 </v-layout>
             <v-layout justify-center align-center >
                 <v-flex pt-3 dark style="text-align:center" class="white--text" > &copy; Copyright 2018-2019 egyptionCompany.ca - All Rights Reserved</v-flex>
             </v-layout>
        </v-container>
    </div>
</template>
<script>


export default {
    data(){
       return {
           animateArea:'',
           animateDate:'',
           animatePlace:'',
           markers: [],
           places: [],
          currentPlace: null,
          center:{lat:10,lng:10}
        
       }
   } ,
    
    computed:
    { 
        returnBuild()
        {
            const x=this.$route.params.id
            console.log(this.$store.getters.getId(x))
            return this.$store.getters.getId(x)
        },
        build()
        {
            return this.$store.getters.buildNum
        }
        
       
 

     },
     methods:
     {
      handleScroll()
         {
            
            const elemDesc=document.getElementById("descripProjectId")
     
            if (window.scrollY > (elemDesc.offsetTop-500))
            {
               
                this.animatePlace="animated bounceInLeft delay-1s"
                this.animateDate="animated bounceInUp delay-1s"
                this.animateArea="animated bounceInRight delay-1s"
               
            }
         }
          

     },
     beforeMount()
     {
       window.addEventListener("scroll",this.handleScroll)
          },
     beforeDestroy() {
         window.removeEventListener('scroll',this.handleScroll)
        
     }
       
    
}
</script>
<style >
   .buildDetailsPage,.allPage
   {
       
   
       position: relative;
       background-attachment: fixed;
       background-repeat: no-repeat;
       background-position: bottom;
       background-size: cover;
       width: 100%;
       height: 100%;
       background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/39/View_up_shaft_of_sky_btw_skyscrapers.jpg");
  }
  
 .buildDetailsPage:after
 {
     content: " ";
     background-color: rgba(9, 9, 10, 0.726);
     position: absolute;
    
 }
   .headerBuildDetails
   {
       padding: 2%;
       font-weight: bold;
       color: white;
       text-align: center;
   }
   .headerSelectProject
   {
       color: white;
       font-size:2em;
       border-radius: 10px 10px 0 0;
       padding: .8%;
       background-image: linear-gradient(#373b44,#4286f4);
   }
   .imgSelectProject,.bookingData
   {
       background: white;
       border-radius:0 0 10px 10px;
       text-align: center;
       font-size: 3em;
       padding: 2% 0 0 0;
   }
   .bookingData
   {
       
       background: none;
   }
   .imgUnderline
   {
       width:25%;
   } 
   .carouselImgProject
   {
       margin-bottom: 5%;
       width: 50%;
       height: 30%;
   }
   .imgProject
   { 
    
  
       width:100%;
       height: 400px;
       margin-top:10px;
       border: 2px solid rgb(18, 11, 24);
       box-shadow: #51555ab4 5px 5px 5px;
   }
  .descripProject
  {
      background: none;
      color: white;
    
  }
  .diameter,.area
  {
      margin: 0 5% 0 5%;
      background: rgba(0, 0, 0, 0.322);
      padding: 2%;
      border-radius: 45%;
      border: 1px solid rgb(2, 1, 1);
      box-shadow: #bdd1cf 5px 5px 5px;


  }
  .listOfData
  {
     
      font-size:.5em;

    
  }
  .showVideo
  {
      padding: 5%;
      height: 100%;
      margin-top: 10%;
      background-image: url("http://elmasria.co/resources/assets/site/images/vedio.jpg");
       background-attachment: fixed;
       background-repeat: no-repeat;
       background-position: bottom;
  }
  .redBox,.greenBox
  {
      background: red;
      border: 1px solid white;
      width:70px;
      height: 30px;
      

  }
  .greenBox
  {
  background: green
  }
  .resAndQuery
  {
      font-size: 1.3rem;
  }
  .tableFlat,tr,th,td
  {
     
      padding: 2px;
      border:  1px solid white
  }
  .tableFlat td
  {
      height: 1.3em;
      background: green;
  }
  .tableFlat th
  {
      font-size: .7em;
  }
  .alsoShow
  {
         background-position: bottom;
      background-attachment: fixed;
      background-image: url("http://elmasria.co/resources/assets/site/images/vedio.jpg");
      text-align: center;

  }
  .show
  {
   
      margin: 10px;
      padding-top: 10px;
  }
  
</style>