<template>
  <v-container fluid style="margin:0;padding:0;width:100%" class="contactUs ">
   <v-layout justify-center align-center column>
      <v-flex xs12  display-3 class="opinionMain" mt-5>
        What is your Issue or Opinion ??
    </v-flex>
    <v-flex>
    <v-textarea
    v-if="checkUser"
    v-model="postSend"
    
    filled
    clearable
    :append-icon="postSend?'send':''"
    @click:append="showPost"
    style="border-radius:20px"
     label="Your Issue......"
    ></v-textarea>
    </v-flex>
   </v-layout>
   <v-layout class="postOpinion" justify-center row wrap >
      
       <v-flex xs12 md5  class="">
          <v-layout column>
              <v-flex  v-if="loading" 
              style="margin:auto"><v-progress-circular
                indeterminate
                color="red"
                size="90"
                ></v-progress-circular></v-flex>
              <v-flex class="postInner" ma-4  pa-3 
              v-for="item in returnPost" :key="item.key">
              <v-layout><v-flex xs1 md2> <v-avatar color="indigo">
               <v-icon dark>account_circle</v-icon></v-avatar>
               </v-flex>
               <v-flex xs4 md4>
                {{item.postOwner}}
                <p style="color:gray;font-size:12px;margin-left:5px;margin:0">
                     {{returnDate(item.postDate)}}
                    </p>
                     <p style="color:gray;font-size:12px">
                        {{returnTime(item.postDate)}}</p>
               </v-flex>
              </v-layout>
                <v-layout column class="postWriter"> 
                    <v-flex xs12 ml-5>{{item.postText}} </v-flex>
                    <v-flex><v-img class="postImg" src="https://images.prop24.com/223797324/Crop525x350"></v-img> </v-flex>
                </v-layout>
                <v-layout justify-space-between align-center style="font-size:12px">
                  <v-flex pa-2 xs3 ><v-icon color="indigo" >thumb_up</v-icon> <span style="color:gray"> 6</span></v-flex>
                  <v-flex xs3></v-flex>
                  <v-flex pa-2 xs3 ><v-btn depressed color="transparent" class="likeBtn"><v-icon color="indigo" >message</v-icon>comment 4</v-btn></v-flex>
                </v-layout>
                <v-layout justify-space-around  class="commentAndLike">
                    <v-flex ><v-btn depressed color="transparent" class="likeBtn"><v-icon color="indigo" >thumb_up</v-icon>like</v-btn></v-flex>
                    <v-flex ><v-btn depressed color="transparent" class="commentBtn">comment</v-btn></v-flex>
                </v-layout>
                <v-layout column >
                <v-flex xs12>  <v-btn class="viewComment" depressed color="transparent"><v-icon  color="indigo">arrow_drop_down</v-icon>show 3 more comments</v-btn></v-flex>
                <v-flex v-for="i in 5" :key="i.key" pa-1 class="comment">  
                  <v-avatar color="indigo" size="36">
                    <v-icon dark>account_circle
                    </v-icon>
                 </v-avatar>
                  <span> it is awesome</span>
                  </v-flex>
                  <v-flex xs3 >
                      <v-layout class="specificComment">
                            <v-flex xs1 pa-1>  
                                <v-avatar color="indigo" size="36">
                            <v-icon dark>account_circle
                            </v-icon>
                              </v-avatar></v-flex>
                            <v-flex pa-2 >
                             <v-text-field
                                v-model="yourComment"
                                :readonly="! checkUser"
                                class="yourComment"
                                 :placeholder="checkUser?'write comment ...':'Sorry please signIn....'"
                                solo
                                rounded
                                background-color="rgba(179, 174, 174, 0.258)"
                                xs3
                                append-icon="emoji_emotions "
                                :append-outer-icon="yourComment ?'send':''"
                                 clear-icon="close"
                                @click:append="showEmotion=! showEmotion"
                                @click:append-outer="sendComment"
                                ></v-text-field>
                                        
                            </v-flex> 
                            <v-layout row class="emotions" v-if="showEmotion" >
                          

                                 
                                     <v-flex> 
                                      <v-card class="cardEmotion">  
                                          <v-card-actions> 
                                            <v-btn color="yellow"
                                            class="btnEmotion"
                                             style="font-size:30px;"
                                              flat 
                                            v-for="em in emoij " :key=em.key
                                            @click="addEmotion(em.shape)" >   {{em.shape}}
                                            </v-btn>
                                          </v-card-actions>
                                      </v-card>
                                     </v-flex>
                                
                             </v-layout>
                      </v-layout>
                    
                  </v-flex>
                   
                </v-layout>
       </v-flex>
       
          </v-layout>
       </v-flex>
        <v-flex xs12 md5 pa-3 mt-4 v-if="! checkUser">
           <v-layout >
               <v-flex xs12 class="signIn" ma-2 v-if="showSignIn">Sign In </v-flex>
                <v-flex xs12 class="signIn" :class="animateSign" ma-2 v-if=" ! showSignIn">Sign up </v-flex>
          </v-layout>
           <v-form v-if="showSignIn">
               <v-text-field solo 
               placeholder="Email..." v-model="emailVerify"></v-text-field>
               <v-text-field solo
               placeholder="Password..."  
               v-model="passwordCheck"></v-text-field>
              <v-btn color="green" @click="signIn"
              :loading="loading" :disable="loading" dark ml-3>sign In</v-btn>
             <v-divider></v-divider>
               <v-flex style="font-size:.7em" ma-3>
                   <p>if you are a new user click </p>
                  <v-btn  color="blue " flat  @click="signUpShow">sign Up</v-btn>
               </v-flex>
           </v-form>
           <v-form v-if="! showSignIn" :class="animateSign" >
               <v-text-field
               
               v-model="firstName"
                outlined 
                label="Firstname" 
                ></v-text-field>
                  <v-text-field
               v-model="lastName"
                outlined 
                label="LastName" 
                ></v-text-field>
                  <v-text-field
               v-model="email"
                outlined 
                label="Email" 
                ></v-text-field>
                  <v-text-field
               v-model="password"
                outlined 
                label="Password" 
                type="password"
                ></v-text-field>
                  <v-text-field
               v-model="passwordVerify"
                outlined 
                type="password"
                label="Rewrite Password " 
                ></v-text-field>
                <v-btn @click="signUp" 
                :loading="loading" :disable="loading" dark color="green">sign Up</v-btn>
            </v-form>
       </v-flex>
       
       <v-flex v-else xs5 ma-3 pa-2 class="imgSection animated bounceInUp" id="imgSection">
           <v-img class="imgAdvertis" src="https://previews.123rf.com/images/stanga/stanga1807/stanga180700001/111847013-human-hands-support-and-give-to-red-heart.jpg">
           </v-img>
           <v-img class="imgAdvertis" mt-2 mb-2 src="https://venueandmenu.com/images/hello-yellow/hello-yellow-2.png">
           </v-img>
      <v-img class="imgAdvertis" src="http://www.friendscompany.se/wp-content/uploads/2019/08/FC-Raspberry-Passion-Dream-Sour-105x105mm.jpg">
           </v-img>
           <v-flex xs12 >
              <div class="fixedImage"> <v-img  src="http://www.friendscompany.se/wp-content/uploads/2019/08/FC-Raspberry-Passion-Dream-Sour-105x105mm.jpg">
           </v-img></div>
           </v-flex>
       </v-flex>
      
      </v-layout>
  
    </v-container>
</template>
<script>

export default {
    created()
    {
      this.$store.dispatch("returnPost")
    },
     data()
    {
        return {
            dateNow:new Date,
            postSend:'',
            showSignIn:true,
            showSignUp:false,
            animateSign:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            passwordVerify:'',
            
            emailVerify:'',
            passwordCheck:'',
            showEmotion:false,
            yourComment:"",
            emoij:[{id:0,shape:'😃'}, 
            {id:1,shape:'😄'},
            {id:2,shape:'😇'},
            {id:4,shape:'😉'}],
           

        }
    },
    
    computed:
    {
      loading()
      {
          return this.$store.getters.loading
      },
      checkUser(){
       if (this.$store.getters.userVerify.id)
          return true
       else
          return false
      },
      returnPost()
      {
          return this.$store.getters.postsItem
      }
    },
    methods:
    {
        addEmotion(emotion)
        {
           this.yourComment+=" "+emotion
        },
        sendComment()
        {
            alert(this.yourComment)
        },
        signIn()
        {
            const obj={
                email:this.emailVerify,
                password:this.passwordCheck
            }
          this.$store.dispatch("signIn",obj)
          this.emailVerify=""
          this.passwordCheck=""
        },
        signUpShow()
        {
        
          this.showSignIn=false
          this.animateSign="animated bounceInUp"

        },
        signUp()
        {
            var obj={
                fname:this.firstName,
                lname:this.lastName,
                email:this.email,
                password:this.password,
                vPassword:this.passwordVerify
            }
            this.$store.dispatch("signUp",obj)
        },
        showPost()
        {
            const obj={
                postText:this.postSend,
                dateNow:this.dateNow
               
            }
            this.$store.dispatch("post",obj)
            this.postSend=''
        },
        
      returnDate(time)
      {
          return time.substring(0,10)
      },
      returnTime(time)
      {
        return time.substring(11,16)
      },
      handleScroll()
      {
          const elem=document.getElementById("imgSection")
          if(elem)
          {
            if(window.scrollY> elem.offsetTop)
            {
                console.log("ok")
            }
          }
          else
          {
              return
          }
      }
    },
    beforeMount()
    {
        window.addEventListener("scroll",this.handleScroll)
    },
    beforeDestroy()
    {
        window.removeEventListener("scroll",this.handleScroll)
    }
}
</script>
<style scoped>
.opinionMain
{
    text-align: center;
   
}
.postOpinion
{
    font-weight: bold;
    font-size: 1.5em;
    color: blue;
    background-image: linear-gradient(rgba(90, 84, 84, 0.349),rgba(179, 174, 174, 0.158))
}
.postInner
{
    background: white;
    border-radius: 2px;
    box-shadow: 2px 2px 5px  gray;
    border: 1px solid indigo;

}
.postWriter
{
    margin: 0;
    color: rgb(49, 46, 46);
    font-weight: initial;
}
.postImg
{
    border: 1px solid gray;
    width:100%;
    height: 200px;
}
.commentAndLike
{
    text-align: center;
    color: rgb(88, 82, 82);
   border-bottom: 1px solid rgb(70, 68, 68);
  border-top: 1px  solid rgb(70, 68, 68);
}
.likeBtn,.commentBtn
{
    width: 100%;
    transition: 1s;
}
.viewComment
{
    font-size: .6em;
    text-transform: lowercase;
    color: indigo;
}
.comment
{
    color: rgb(88, 82, 82);
    font-size: initial;
}
.yourComment
{
    border-radius: 25px;
}
.specificComment
{
    position: relative;
}
.emotions
{
    margin-left:40%;
    margin-top:10%;
    position: absolute;
}
.cardEmotion
{
    border-radius: 20px;
}
.btnEmotion
{
    width: .5em;
}
.signIn
{
    text-align: center;
}
.imgAdvertis
{
  
border: 1px solid gray;    
box-shadow: 2px 5px 5px gray;
}
.imgAdvertis :nth-child(2)
{
    border: 2px solid palevioletred;
}
.imgSection
{
  position: relative;
}
.fixedImage
{
  position: fixed;
}
</style>