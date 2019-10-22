<template>
           <v-flex class="contactUS white--text" id="contactUsId">
                     <v-flex xs12 display-2 pa-3   >Contact with Us</v-flex>
                     <v-layout row wrap dark>
                         <v-flex  dark>
                             <v-form class="myform" >
                                 <v-container>
                                     <v-layout row wrap>
                                        <v-flex xs12 sm6  :class="animateName" > 
                                              <v-text-field 
                                               dark
                                               v-model="name"
                                               label="Name"
                                                @input="$v.name.$touch()"
                                                ></v-text-field>
                                                <p class="red--text animated shake validateLabel" v-if="$v.name.$error" style="font-size:14px">please enter name ( more than 8 characters )</p>
                                        </v-flex>
                                        <v-flex xs12 sm6 :class="animateEmail"> 
                                         <v-text-field
                                            label="Email"
                                            v-model="email"
                                            @blur="$v.email.$touch()"
                                            dark
                                            outlined
                                        ></v-text-field>
                                        <p class="red--text  validateLabel" :class="animateTitle" v-if="$v.email.$error">please enter vaild email</p>
                                        </v-flex>
                                     </v-layout>
                                       <v-flex xs12 class="animated bounceInUp">
                                           <v-text-field
                                            dark
                                            v-model="titleMessage"
                                            label="Title message"
                                            @blur="$v.titleMessage.$touch()"
                                            outlined
                                                ></v-text-field>
                                               <p class="red--text animated swing validateLabel" v-if="$v.titleMessage.$error">please enter title message</p>
                                       
                                       </v-flex>
                                          <v-flex xs12 :class="animateMessage" >
                                           <v-textarea
                                           v-model="message"
                                           dark
                                            
                                            label="message"
                                            outlined
                                            @blur="$v.message.$touch()"
                                                ></v-textarea>
                                                <p class="red--text animated swing validateLabel" v-if="$v.message.$error">please enter message</p>
                                       
                                       </v-flex>
                                       <v-flex>
                                           <v-btn color="success"
                                                @click="sendData" 
                                                :loading="loading"
                                                :disable="loading">send
                                         
                                            </v-btn>
                                            <p style="color:pink" :style="{color:newColor}" v-if="error">{{error}}</p>
                                       </v-flex>
                               
                                 </v-container>

                             </v-form>
                         </v-flex>
                         <v-flex xs12 md6 dark>
                          <v-layout column >
                             <v-flex display-1 pa-4>  The information of contact</v-flex>  
                              <v-flex display-1 pt-3>The address</v-flex> 
                              <v-flex display-1 pb-3> xyz montreal flate 4</v-flex>
                             <v-flex display-1 pt-3>Mobile </v-flex>
                             <v-flex display-1 pb-3>514xxxxxx- 516xxxxxx</v-flex>
                    
                          </v-layout>
                         </v-flex>
                     </v-layout>
                 </v-flex>
             
</template>
<script>
import {required,minLength,email} from 'vuelidate/lib/validators'
export default {
    data(){
        return{
              name:'',
           email:'',
           titleMessage:'',
           message:'',
           error:'',
           scrolled: false,
           newColor:"pink",
           animateName:"",
           animateEmail:"",
           animateTitle:'',
           animateMessage:'',
         
        }
    },
    
   validations:
   {
       name:
       {
           required,
           min:minLength(8)
       },
       email:
       {
           required,
           email
       },
       titleMessage:
       {
           required
       },
       message:
       {
           required
       },

   },
   computed:
   {
         loading()
         {
             return this.$store.getters.loading 
         }
    
   },
   methods:
   {
         
         sendData()
         {
            const obj={
            name:this.name,
            email:this.email,
            titleMessage:this.titleMessage,
            message:this.message
            }
            if ( !this.name || !this.email || !this.message)
            {
                this.error="Pleace fill all data"
            }
            else
            {
            this.$store.dispatch("sendData",obj)
              
            }
           
         },
         handleScroll()
         {
             const elemContact=document.getElementById("contactUsId")
         
        if( window.scrollY > (elemContact.offsetTop - elemContact.offsetHeight))
            {              
                this.animateName="animated bounceInLeft delay-1s"
                this.animateEmail="animated bounceInRight delay-1s"
                this.animateTitle="animated bounceInUp delay-1s" 
                this.animateMessage="animated bounceInDown delay-1s"
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
<style scoped>
.contactUS
  {
      text-align: center;
      background-position: center;
      background-image: url("http://elmasria.co/resources/assets/site/images/Contact-Us.jpg")
  }
  
  .validateLabel
  {
      opacity: .8;
  }
</style>