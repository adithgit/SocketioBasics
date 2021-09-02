
    var socket = io("ws://localhost:3000/");

    var input = document.getElementById('input');
    var form = document.getElementById('form');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(input.value!=" "){
            socket.emit('chat message',input.value);
            input.value=" ";
        }
    });

    socket.on('chat message',(msg)=>{
        console.log(msg);
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0,document.body.scrollHeight);
    });