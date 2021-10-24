 var movie = [
    "https://m.media-amazon.com/images/M/MV5BOGYwYTA5M2QtMTk3Zi00ZjdjLWFkNDUtYzg4MjM0ZGI0MGU1XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA5OTNhNDQtODU0ZS00MmMyLWJkZmMtZmIyNjRhOTFlODMwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTc4MDQwOTE4N15BMl5BanBnXkFtZTgwODgzMDQxNjE@._V1_.jpg",
]; 


for (var i = 0; i < movie.length; i++) {
    document.write("<img src="+movie[i] + ">");
}

// function adicionarFilme(){
//     var id = document.getElementById("filme").value;
//     if  (id.endsWith(".jpg") || id.endsWith(".png")){
//     showOnScreen(id)

//     }else{
//         console.error("INVALID URL")
//     }
//     document.getElementById("filme").value = " "
//     //console.log(movie)
// }

// function showOnScreen(id){
//     var tagId = "<img src="+id + ">";
//     var tag = document.getElementById("listaFilmes");
//     tag.innerHTML += tagId;
// }