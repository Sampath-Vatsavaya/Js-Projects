text_input= document.getElementById("word_text")
character_count=0
word_count=0

function update(){
    console.log(text_input.value)
    character_count=text_input.value.length
    word_count=text_input.value.trim().split(" ").length;
    if(character_count==0){
        word_count=0
    }
    document.getElementById("character_count").innerText=character_count;
    document.getElementById("word_count").innerText=word_count
}

