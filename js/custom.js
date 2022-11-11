function toggle(e){
    const button = e.target;
    const divId = button.dataset.targetId;
    const div = document.getElementById(divId);
    const boxes = document.querySelectorAll('.toggle')

    boxes.forEach(box => {
        box.classList.remove("d-block")
    })
    // div.classList.remove("d-none");
    div.classList.add("d-block") 
}

//to get instagram (api call)
var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN_GOES_HERE'
});
userFeed.run();