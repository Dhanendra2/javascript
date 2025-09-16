 let  canvas =  document.querySelector('canvas')
 let  pen =  canvas.getContext("2d")
//  pen.fillStyle="lightBlue"
// pen.fillRect(50,150,50,50)
// pen.clearRect(50,140,50,50)
let snakeCells=[[0,0]]
let cell=50
let direction='right'
let gameOver=false
let score=0
let random=generateRandomCell()
let id= setInterval(()=>{
    draw()
update()
},200
)
document.addEventListener("keydown" , (e)=>{
    if(e.key=='ArrowUp'){
        direction='up'
    }else if(e.key== 'ArrowDown'){
         direction='down'

    }else if(e.key=='ArrowLeft'){
         direction='left'
    }else {
         direction='right'
    }

})
function draw(){
     if(gameOver==true){
        clearInterval(id)
     
       pen.font = '40px sans-serif';
           pen.fillText('Game over', 50, 150);
        return 
      }
      pen.clearRect(0,0,600,600)
    for(let i of snakeCells){
        pen.clearRect(0,0,600,600)
        pen.fillStyle="lightBlue"
        pen.fillRect(i[0],i[1],cell,cell)
    }
     pen.font = '40px sans-serif';
        pen.fillText(`${score}`,150,50);
               pen.fillStyle="white"
        pen.fillRect(random[0],random[1],cell,cell)

}

  function update(){
     let headX=   snakeCells[snakeCells.length-1][0]
        let headY=  snakeCells[snakeCells.length-1][1]
         
         let newX
            let newY
            if(direction=='right'){
              newX=headX+cell
              newY=headY
              if(newX==600){
                gameOver=true
              }
            }
            else if( direction=="left"){
              newX=headX-cell
              newY=headY
              if(newX<0){
                gameOver=true
              }
            }
            else if(direction=='up'){
              newX=headX
              newY=headY-cell
              if(newY<0){
                gameOver=true
              }

            }else{
              newX=headX
              newY=headY+cell
              if(newY==600){
                gameOver=true
              }
            }
     
            snakeCells.push([newX,newY])
       
            if(newX==random[0] && newY== random[1]){
              random=generateRandomCell()
              score+=1
            }
            else{
              snakeCells.shift()

            }
        
         
           


    }

    function generateRandomCell() {
  return [
    Math.round((Math.random()*(550))/cell)*cell,
    Math.round((Math.random()*(550))/cell)*cell
  ]
}

console.log(generateRandomCell());





