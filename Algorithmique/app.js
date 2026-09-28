let videos = [
    { titre: "Tuto JS", duree: 5, views: 3000 },
    { titre: "Vlog voyage", duree: 3, views: 1200 },
    { titre: "Recette facile", duree: 2, views: 2500 },
    { titre: "Musique live", duree: 4, views: 2100 },
    { titre: "Interview", duree: 6, views: 800 },
    { titre: "Chalenge fun", duree: 1, views: 4000 }

];

let videosPopulaires = [];

for (let index = 0; index < videos.length; index++) {
    
        if (videos[index].views >= 2000) {
            
            videosPopulaires[videosPopulaires.length] = videos[index];
        }
    }

for (let index = 0; index < videosPopulaires.length; index++) {
    for (let j = 0; j < videosPopulaires.length -1; j++) {
        if (videosPopulaires[j].duree > videosPopulaires[j+1].duree) {

            let temporaire = videosPopulaires[j];

            videosPopulaires[j] = videosPopulaires[j+1];

            videosPopulaires[j+1] = temporaire;
        }
    }   
}


let total = 0;
let videosChoisies = [];

for (let index = 0; index < videosPopulaires.length; index++) {
    if (total + videosPopulaires[index].duree <= 10) {
        
        videosChoisies[videosChoisies.length] = videosPopulaires[index];
        total = total + videosPopulaires[index].duree;
        
    }
}

console.log("Videos populaires triees par duree :", videosPopulaires);
console.log("Nombre de videos choisies :", videosChoisies.length);
console.log("Total minutes utilisees :", total);