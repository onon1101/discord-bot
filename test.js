var getRandomColor = function(){    
    return  '0x' + (function(color){    
         return (color +=  '0123456789ABCDEF'[Math.floor(Math.random()*16)])    
         && (color.length == 6) ?  color : arguments.callee(color);    
    })('');    
 } 

console.log(getRandomColor());