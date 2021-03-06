import Vuex from 'vuex'
import Vue from 'vue'
import * as firebase  from 'firebase'

Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        pageMain:[
        {id:1,name:"Main",link:"/",title:"Apple SwiftUi Tutorials",subTitle:"tutorial Site for Apples SwiftUi"}
       ,{id:2,name:"projects",link:"/projects",title:"Vue Argon Dashboard Pro",subTitle:"Premium Bootstrap 4 Vue.js Admin Template"}
       ,{id:3,name:"the news",link:"/news",title:"DrawSQL"}
       ,{id:4,name:"about me",link:"/about-me",title:"DrawSQL"}
       ,{id:5,name:"contact us",link:"/contact-us",title:"DrawSQL"}
         ],
       bulid:[
        {id:1,buildNum:29,
            lat:45.460029,lang:-73.634688,imgLink:"http://elmasria.co/resources/uploads/projects/2019-03-21/masria_1553179995.jpg",dateArrive:"23-10-2014",
        dataBuild:["The build consist of 11 floor","each floor have 4 plate","The facades of the building are luxury paints and luxury marble ","All materials used in the finishes of the tower (Ultra Lux)"]
         ,imgSelectProject:["http://elmasria.co/resources/uploads/projects/2017-12-11/masria_15130097960.jpg","http://elmasria.co/resources/uploads/projects/2017-02-13/masria_14870063570.jpg","http://elmasria.co/resources/uploads/projects/2018-10-10/masria_15391852850.jpg"]},
       {id:2,buildNum:28,lat:45.459939,lang:-73.633181,imgLink:"http://elmasria.co/resources/uploads/projects/2018-10-10/masria_1539185218.jpg",dateArrive:"23-10-2015"
       , dataBuild:["the build consist of 11 floor","each floor have 4 plate","The facades of the building are luxury paints and luxury marble ","All materials used in the finishes of the tower (Ultra Lux)"]
       ,imgSelectProject:["http://elmasria.co/resources/uploads/projects/2016-12-20/masria_14822544060.jpg","http://elmasria.co/resources/uploads/projects/2017-02-13/masria_14870063570.jpg","http://elmasria.co/resources/uploads/projects/2018-10-10/masria_15391852850.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311720.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311880.jpg"]}
       ,{id:3,buildNum:27,lat:45.459939,lang:-73.633181,imgLink:"http://elmasria.co/resources/uploads/projects/2018-10-06/masria_1538851353.jpg",dateArrive:"22-10-2014"
       , dataBuild:["the build consist of 11 floor","each floor have 4 plate","The facades of the building are luxury paints and luxury marble ","All materials used in the finishes of the tower (Ultra Lux)"]
       ,imgSelectProject:["http://elmasria.co/resources/uploads/projects/2016-12-20/masria_14822544060.jpg","http://elmasria.co/resources/uploads/projects/2017-02-13/masria_14870063570.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311720.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311880.jpg"]}
       ,{id:4,buildNum:26,lat:45.459939,lang:-73.633181,imgLink:"http://elmasria.co/resources/uploads/projects/2018-10-03/masria_1538581607.jpg",dateArrive:"23-11-2014"
       , dataBuild:["the build consist of 11 floor","each floor have 4 plate","The facades of the building are luxury paints and luxury marble ","All materials used in the finishes of the tower (Ultra Lux)"]
       ,imgSelectProject:["http://elmasria.co/resources/uploads/projects/2016-12-20/masria_14822544060.jpg","http://elmasria.co/resources/uploads/projects/2017-02-13/masria_14870063570.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311720.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311880.jpg"]}
       ,{id:5,buildNum:25,lat:45.459939,lang:-73.633181,imgLink:"http://elmasria.co/resources/uploads/projects/2018-07-02/masria_1530525025.jpg",dateArrive:"21-10-2014"
       , dataBuild:["the build consist of 11 floor","each floor have 4 plate","The facades of the building are luxury paints and luxury marble ","All materials used in the finishes of the tower (Ultra Lux)"]
       ,imgSelectProject:["http://elmasria.co/resources/uploads/projects/2016-12-20/masria_14822544060.jpg","http://elmasria.co/resources/uploads/projects/2017-02-13/masria_14870063570.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311720.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311880.jpg"]}
       ,{id:6,buildNum:21,lat:45.459939,lang:-73.633181,imgLink:"http://elmasria.co/resources/uploads/projects/2017-11-26/masria_1511719837.jpg",dateArrive:"23-6-2014"
       , dataBuild:["the build consist of 11 floor","each floor have 4 plate","The facades of the building are luxury paints and luxury marble ","All materials used in the finishes of the tower (Ultra Lux)"]
       ,imgSelectProject:["http://elmasria.co/resources/uploads/projects/2016-12-20/masria_14822544060.jpg","http://elmasria.co/resources/uploads/projects/2017-02-13/masria_14870063570.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311720.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311880.jpg"]}
       ,{id:7,buildNum:24,lat:45.459939,lang:-73.633181,imgLink:"http://elmasria.co/resources/uploads/projects/2017-10-31/masria_1509477271.JPG",dateArrive:"23-10-2014"
       , dataBuild:["the build consist of 11 floor","each floor have 4 plate","The facades of the building are luxury paints and luxury marble ","All materials used in the finishes of the tower (Ultra Lux)"]
       ,imgSelectProject:["http://elmasria.co/resources/uploads/projects/2016-12-20/masria_14822544060.jpg","http://elmasria.co/resources/uploads/projects/2017-02-13/masria_14870063570.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311720.jpg","http://elmasria.co/resources/uploads/projects/2018-11-26/masria_15432311880.jpg"]}
    ]
   ,
     loading:false ,
     lat:"10",
     lang:"10",
     Error:"",
     userVerify:{
         id:'',
         email:''
        },
        nameShow:'',
     postsItem:[],
    
     
      
    },
    
    getters:{
        pageContent(state)
        {
            return state.pageMain
        },
        mypage()
        {
            return [1,2,3]
        },
        buildNum(state)
        {
            return state.bulid
        },
        loading(state)
        {
            return state.loading
        },
        getId(state)
        {
            return id=>
            {
                return state.bulid.find(elem=>{
                    return elem.id == id 
                })
            }
        },
        getLat(state)
        {
             return state.lat
        },
        getLang(state)
        {
           return state.lang
        },
        Error(state)
        {
           return state.Error 
        },
        userVerify(state)
        {
            return state.userVerify
        },
        nameShow(state)
        {
            return state.nameShow
        },
        postsItem(state)
        {
            
            return state.postsItem.sort(function(a,b){
                return new Date(b.postDate)-new Date(a.postDate)
            })
        },
        likenum(state)
        {
            return state.likenum
        }
        
      
    },
    mutations:
    {
      isLoading(state,payload)
      {
          state.loading=payload
      },
    Error(state,payload)
        {
            state.Error=payload
        },
        userVerify(state,payload)
        {
            state.userVerify.id=payload.id
        },
        nameShow(state,payload)
        {
            state.nameShow=payload
        },
        insertPost(state,payload)
        {
            for(let k in payload)
            {
                state.postsItem.push(payload[k])
            }

        },
      
    }
    ,
    actions:
    {
        setLat({state,getters},payload)
        {
            state.lat=payload
        },
        setLang({state},payload)
        {
            state.lang=payload
        },
        sendData({commit},payload)
       {
           commit("isLoading",true)
           const objSend={
               name:payload.name,
               email:payload.email,
               titleMessage:payload.titleMessage,
               message:payload.message
           }
           firebase.database().ref("userMessage").push(objSend)
           .then(data=>{
               const key =data.key
            
               commit("isLoading",false) 
               alert("your message already send")
           })
          
    
       },
       signUp({commit,dispatch},payload)
       {
          
          firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
          .then(data=>{
              console.log("succ")
              const newUser={
                  id:firebase.auth().currentUser.uid
                 }
                 commit("userVerify",newUser)
                 dispatch("storeAllDataUser",payload)
             console.log(newUser)
             
                 
          })
         
       },
       storeAllDataUser({commit,getters},payload)
       {
        commit("isLoading",true)
        const newUser={
            firstname:payload.fname,
            lastname:payload.lname,
            email:payload.email,
            password:payload.password,
            createId:getters.userVerify.id
            }
        firebase.database().ref('users').push(newUser)
        .then(data=>{ 
         const key=data.key
            alert("Now you have account")
            commit("isLoading",false)

        })
        .catch(error=>{
            commit("Error",error)
            commit("isLoading",false)
            console.log(error)
        })

       },
       signIn({commit,dispatch},payload)
       {
           firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
           .then(data=>{
               const newUser={
                   id:firebase.auth().currentUser.uid
               }
               commit("userVerify",newUser)
               dispatch("signInUser")

           })
           .catch(error=>{
               commit("Error",error)
           })

       },
       signInUser({commit,getters,dispatch},payload)
      {
          commit("isLoading",true)
          const userId=getters.userVerify.id
          firebase.database().ref('users').once('value')
          .then(data=>{
              const obj=data.val()
              for(let key in obj)
              {
                  if(obj[key].createId==userId)
                { 
                     commit("nameShow",obj[key].firstname)
                  console.log("ok user")
                }

              }
              commit("isLoading",false)
          })
          .catch(error=>{
              commit("isLoading",false)
              console.log(error)
          })
      },
       post({commit,getters},payload)
        {
            commit("isLoading",true)
            const obj={
               postText:payload.postText,
               postDate:payload.dateNow.toISOString(),
               postOwner:getters.nameShow,
               ownerId:getters.userVerify.id,
               like:0
               

            }
          firebase.database().ref("post").push(obj)
          .then(data=>{ 
               const key=data.val()
               getters.postsItem.push({
                   id:key,
                   postText:obj.postText,
                   postDate:obj.postText,
                   postOwner:obj.postOwner,
                   ownerId:obj.ownerId,
                   like:0
               })
             
             commit("isLoading",false)
          })
          .catch(error=>{
              commit("isLoading",false)
          })
        },
        returnPost({commit})
        {
           
            commit("isLoading",true)
            firebase.database().ref("post").once('value')
            .then(data=>{
            
                const postArray=[]
                const obj=data.val() 
                for(let key in obj)
                { 
                    postArray.push({
                        id:key,
                        postText:obj[key].postText,
                        postDate:obj[key].postDate,
                        postOwner:obj[key].postOwner,
                        ownerId:obj[key].ownerId,
                        comment:obj[key].comment,
                        like:obj[key].like
                    })
        
                }
                console.log(postArray)
      
                commit("insertPost",postArray)
                commit("isLoading",false)
            })
            .catch(error=>{
                commit("isLoading",false)
            })
        },
        storeComment({commit},payload)
        {
            commit("isLoading",true)
            firebase.database().ref("/post/"+payload.selectPostId).child("/comment/").push(payload)
            .then(data=>{
             
                commit("isLoading",false)
            })
            .catch(error=>{
                console.log(error)
                commit("Error",error)
                commit("isLoading",false)
            })
        },
        increaseLike({commit,dispatch},itemId)
        {
           
            let num=0

            firebase.database().ref("/post/"+itemId+"/like").once('value')
           .then(data=>{
              num=data.val()+1
               
               
                  dispatch("likeFun",{itemId,num})
           })
           .catch(error=>{
       
           })
       },
       likeFun({commit},payload)
       {
           const obj={}
               obj.like=payload.num
           
           
            firebase.database().ref("post").child(payload.itemId).update(obj)
            .then(()=>{
                
            })
       }


    }

})
