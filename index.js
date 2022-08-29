function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    return console.log(shout(string))
}
function logWhisper(string){
    return console.log(whisper(string))
}
function sayHiToHeadphoneRoomate(string){
   if(string === "let's have dinner together"){
         console.log('I would love to!')
    }

    else if(string === string.toUpperCase()){
        console.log('YES INDEED!')
    }

    else{
        return console.log ("I can't hear you!")
    }
}
sayHiToHeadphoneRoomate("HELLO")