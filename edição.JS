const enviarFormulario = () =>{
    const nome = document.getElementById("nome").value
    console.log(nome)
    const atracoes = document.getElementById("atracoes").value
    console.log(atracoes)
    const descricao = document.getElementById("descricao").value
    console.log(descricao)
    const data = document.getElementById("data").value
    console.log(data)
    console.log(toISOformat('19/07/2019 14:18'))
    const lot = document.getElementById("lot").value
    console.log(lot)
    const objeto = {
        name: nome,
        attractions:atracoes.split(","),
        poster: "https://wallpapercave.com/wp/wp7546134.jpg",
        description: descricao,
        scheduled: data,
        number_tickets: lot,
    }
    console.log(objeto)
    axios.post('https://xp41-soundgarden-api.herokuapp.com/events',objeto)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    function toISOformat(dateTimeString){
      const[date,time] = dateTimeString.split(" ");
    const[DD,MM,YYYY] = date.split('/');
      const [HH,mm] = time.split(':');
      return new Date (`${YYYY}-${MM}-${DD}T${HH}:${mm}`).toISOString();
    }