const iniciar = document.getElementById('iniciar');
const bolinha =document.getElementById('ball');
var mostrador = document.querySelector('#mostrador');
var cliques = 0;



iniciar.addEventListener('click', (e) => {
    e.preventDefault();
    first(); 
    
   
})

bolinha.addEventListener('click', (e) => {
    e.preventDefault();
    Gamelaw()
})

function first(){
    iniciar.disabled = true;
    $('.game img').css("display", "block")

    new Timer(1, mostrador, function() {
        alert('O tempo acabou! total: ' + cliques + " acertos. Seu nível: " + nivel(cliques) +". Parabéns");
        iniciar.disabled = false;
    }).start();
}



function Gamelaw(){

    var heigthPos = randomNumberInterval(10, 500);
    var widthPos =randomNumberInterval(10,900);
    console.log(heigthPos)
    console.log(widthPos)
    var string_heigth = heigthPos + "px"
    var string_width = widthPos + "px"
    console.log(string_heigth)

    $('.game img').css("top", string_heigth)
    $('.game img').css("left", string_width)
    cliques++
}

function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }

  function Timer(mins, target, cb) {
    this.counter = mins * 60;
    this.target = target;
    this.callback = cb;
}
Timer.prototype.pad = function(s) {
    return (s < 10) ? '0' + s : s;
}
Timer.prototype.start = function(s) {
    this.count();
}
Timer.prototype.stop = function(s) {
    this.count();
}
Timer.prototype.done = function(s) {
    if (this.callback) this.callback();
}
Timer.prototype.display = function(s) {
    this.target.innerHTML = this.pad(s);
}
Timer.prototype.count = function(s) {
    var self = this;
    self.display.call(self, self.counter);
    self.counter--;
    var clock = setInterval(function() {
        self.display(self.counter);
        self.counter--;
        if (self.counter < 0) {
            clearInterval(clock);
            self.done.call(self);
        }
    }, 1000);
}

function nivel(cliques){
    if(cliques <= 20){
        return "mosca morta kkk"
    }
    else if(cliques > 20 || cliques <= 40   ){
        return "lento(a)"
    }
    else if(cliques > 40 || cliques <+ 50   ){
        return "na atividade"
    }
    else if(cliques > 50 || cliques <+ 60   ){
        return "rapidinho(a)"
    }
    else if(cliques > 60 || cliques <+ 70   ){
        return "habilidoso(a)"
    }
    else if(cliques > 70 || cliques <+ 80   ){
        return "muito rápido(a)"
    }
    else if(cliques > 80 || cliques <5000   ){
        return "GOD!"
    }



}