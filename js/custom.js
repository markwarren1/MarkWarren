//toggling between social media views
function toggle(e){
    const button = e.target;
    const divId = button.dataset.targetId;
    const div = document.getElementById(divId);
    const boxes = document.querySelectorAll('.toggle')

    if(div.classList.contains("d-block")) { return }
        boxes.forEach(box => {
            box.classList.remove("d-block")
        })
        // div.classList.remove("d-none");
        div.classList.add("d-block") 
}

//to get instagram (api call)
var userFeed = new Instafeed({
    get: 'user',
    target: "div2",
    resolution: 'high_resolution',
    accessToken: 'IGQVJYYU9GZAVlmdHFtVUNMelZAJMjNUS29WbWtUajY2SkFPTGtiTjVCTjNDaXRZAUUpxZA2pPQ3hWS3NUYk0wZAHFoYkJseVk3YzJkYkQtR2R5aU9TVUtrNV9jeDVCUy12ZADJzZAUYxZAGRkRWpyUkpqQkNBSQZDZD'
});
userFeed.run();