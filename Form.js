class Form {
constructor(){
    this.input = createInput('name')
    this.button = createButton('play')
     this.greeting = createElement('h3');
    this.reset = createButton('reset')
    this.reset.position(displayWidth-100,20)

}
display(){
var title = createElement('h2','Car Racing Game')
title.position(displayWidth/2-50,20)
this.input.position(displayWidth/2-40,displayHeight/2-80)
this.button.position(displayWidth/2+30,displayHeight/2)

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount+=1
player.index=playerCount
player.update()
player.updateCount(playerCount);
this.greeting.html("hello "+player.name)
this.greeting.position(displayWidth/2-70,displayHeight/2)
})
this.reset.mousePressed(()=>{

    player.updateCount(0);
    game.update(0)

})

}
hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()

}
}
