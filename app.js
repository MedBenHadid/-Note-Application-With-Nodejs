var fs = require('fs')
const Comm = process.argv[2]
let ARG1 = process.argv[3]
let ARG2 = process.argv[4]

let F = fs.readFileSync("./note.json").toString()
let T = JSON.parse(F)
if (Comm=="list"){
list(T)
} else if (Comm=="add") {
  add(T,ARG1,ARG2)
}else if(Comm=="read"){
   
      read(ARG1,T)

}else if(Comm=="remove"){
remove(ARG1,T)
}

function list(T){
console.log("Printing " + T.length + " note(s).")
if (T.length != 0) {
    for (let i = 0; i < T.length; i++) {
        console.log("-----------")
        console.log("Title : " + T[i].title)
        console.log("Body : " + T[i].body)
    }
}
}

function add(T,ARG1,ARG2){
   let T1 = {
       title: ARG1,
       body: ARG2
   }
   T.push(T1)
   fs.writeFileSync("./note.json", JSON.stringify(T))
   console.log("Note created !")
}

function read(ARG1,T){
       if (ARG1 == "--title") {

           for (let i = 0; i < T.length; i++) {
               if (T[i].title == ARG2) {
                   console.log("Note Found------")
                   console.log("Title : " + T[i].title)
                   console.log("Body : " + T[i].body)
               }
           }
       }
}

function remove(ARG1,T){
     if (ARG1 == "--title") {
         const T1 = T.filter(item => item.title !== ARG2)
         fs.writeFileSync("./note.json", JSON.stringify(T1))
         console.log("Note was removed .")
     }
}