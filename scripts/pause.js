const video=document.getElementById("vidos_1")
const button = document.getElementById("pause")
// const button = 

const playlist=["1","2","3"]
let numbervideo = 0
function stop(){
	if(video.paused){
		video.play()
	}else{
		video.pause()
	}
}

function mute(){
	if(video.muted){
		video.muted=false
	}else{
		video.muted=true
	}

}
function next(){
	if(numbervideo < playlist.length - 1){
		numbervideo ++;
			}else{
numbervideo = 0
		
	}
video.src = `video/${playlist[numbervideo]}.mp4`
}
function prev(){
	if (numbervideo !== 0) {
		numbervideo --;
}else{
	numbervideo = playlist.length - 1;
}
video.src = `video/${playlist[numbervideo]}.mp4`
}

