<template>
  <v-container fluid style="margin:0;padding:0;width:100%" class="contactUs ">
   <v-layout justify-center align-center >
      <v-flex xs12  display-3 class="opinionMain" ma-5>
        What is your opinion ??
    </v-flex>
   </v-layout>
   <v-layout class="postOpinion" justify-center row wrap >
       <v-flex xs12 md3 pa-3 mt-4 >
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
              <v-btn color="green" @click="signIn" dark ml-3>sign In</v-btn>
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
                <v-btn @click="signUp" dark color="green">sign Up</v-btn>
            </v-form>
       </v-flex>
       <v-flex xs12 md6  pa-3 mt-3 mb-3 class="postInner">
           <v-avatar color="indigo">
               <v-icon dark>account_circle</v-icon></v-avatar>
                marwa hemdan
                <p style="color:gray;font-size:12px;margin-left:5px;display:inline">12-11-2012</p>
                <v-layout column class="postWriter"> 
                    <v-flex xs12 ml-5>Thanks alot, my flat is good </v-flex>
                    <v-flex><v-img class="postImg" src="https://images.prop24.com/223797324/Crop525x350"></v-img> </v-flex>
                </v-layout>
                <v-layout justify-space-between align-center style="font-size:12px">
                  <v-flex pa-2 xs3 ><v-icon color="indigo" >thumb_up</v-icon> <span style="color:gray"> 6</span></v-flex>
                  <v-flex xs3></v-flex>
                  <v-flex pa-2 xs3 ><v-icon color="indigo">message</v-icon> <span style="color:gray;padding-left:4px" > comment  4</span></v-flex>
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
                                class="yourComment"
                                 placeholder="write comment ..."
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
       <v-flex xs12 md3>sdsd</v-flex>
      </v-layout>
  
    </v-container>
</template>
<script>

export default {
     data()
    {
        return {
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
        }
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
</style>