function setup(){
LOL = createCanvas(300,300)
LOL.center()
background('white')
LOL.mouseReleased(classifyCanvas)
HACKER = window.speechSynthesis


}
function clearCanvas(){
    background('white')
}
function preload(){
classifier = ml5.imageClassifier('DoodleNet');
};
function draw(){
strokeWeight(12)
stroke(0);
if(mouseIsPressed){
line(pmouseX , pmouseY , mouseX, mouseY);
}
}
function classifyCanvas(){
classifier.classify(LOL , GET_HACKED_NOOB_LOL)
}
function GET_HACKED_NOOB_LOL(error, result){
if (error){
    console.error(error)
}
else {
    console.log(result)
    document.getElementById('label').innerHTML = 'Label: ' + result[0].label
    document.getElementById('confidience').innerHTML = 'Accuracy: ' + Math.round(result[0].confidence*100) + '%'
    textToSpeech = new SpeechSynthesisUtterance(result[0].label)
    HACKER.speak(textToSpeech)
}
}