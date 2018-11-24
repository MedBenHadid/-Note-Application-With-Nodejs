var fs = require('fs')
const Comm = process.argv[2]
let ARG1 = process.argv[3]
let ARG2 = process.argv[4]

let F = fs.readFileSync("./note.json").toString()
let T = JSON.parse(F)
if (Comm=="list"){
 console.log("Printing "+T.length+" note(s).")
    if(T.length!=0){
        for (let i = 0; i < T.length; i++) {
            console.log("-----------")
            console.log("Title : " + T[i].title)
            console.log("Body : " + T[i].body)
        } 
    }

} else if (Comm=="add") {
  
    let T1={title :title,body :body}
    T.push(T1)
fs.writeFileSync("./note.json", JSON.stringify(T))
}else if(Comm=="read"){
   
        if (ARG1 == "--title") {
           
            for (let i = 0; i < T.length; i++) {
                if (T[i].title==ARG2) {
                    console.log("Note Found------")
                    console.log("Title : "+T[i].title)
                    console.log("Body : "+T[i].body)
                }              
            }
        }

}else if(Comm=="remove"){
  
 }
}