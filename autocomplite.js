let availableKeywords = [
    'Cake',
    'Momos',
    'Cold Drink','Mock tails', 'lasi','juce','Ice-cream'   
];
const resultsBox = document.querySelector(".resultsBox");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result);
    }
    display(result);
    
}
function display(result){
    const content = result.map((list)=>{
        return "<li onlick = selectInput(this)>" +list+ "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}