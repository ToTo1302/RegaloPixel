const images = [
    "Bellossom", "Celebi", "Celesstila", "Darkrai", "Electabuzz",
    "Elekid", "Gyarados", "Jynx", "Lapras", "Magby",
    "Magmar", "Makuhita", "Metagross", "Milotic", "Mimikyu",
    "Psyduck", "Smoochum", "Snorlax", "Starmie", "Suicune"
];
  
const colors = [
    ["c5d16a","ef7148","9b4430","040405","568260","f6dc44","d6d7a0","434444","73bc5c","44644c"],
    ["e3bb82","cc6c94","444444","d4cae6","a48c44","040404","282084","2c2004","042404","080404"],
    ["cd8273","444444","717767","040404","743480","543420","043820","040424","080404","080404"],
    ["545474","b49c5c","040404","fce444","444444","84745c","bebec4","d4509c","d4c46c","ffc424"],
    ["f4e42c","846414","ecbc14","f4f4ac","444444","ac8c44","040404","a02c58","208058","20045c"],
    ["d0b495","339ddc","4c4c4c","458a91","1464b4","ec3c3c","040404","503824","043c24","040428"],
    ["ee6c3b","444444","aa5881","efe5ad","040404","9c444c","d897d3","b4b4b4","f4dc6c","4c5c6c"],
    ["e1d2be","444444","54b4fc","040404","ccb494","838684","4a7ba5","74d4fc","3c5474","64b4d0"],
    ["444444","f49494","ecec92","ac4c54","ec6464","dcac6c","040404","34206c","382004","042404"],
    ["f0d848","9c4444","fc6b45","444444","c46444","545c6c","e8d9bf","d4949c","040404","342c20"],
    ["645c9c","444444","040404","de7c64","bc9434","fcdcac","fccc4c","d4bc8c","a48c54","2c907c"],
    ["4c6cac","444444","bcbcbc","648cdc","84b4fc","848474","d6543e","040404","5438d8","402028"],
    ["659eda","171515","97495e","ead0a7","b9ad89","e7616b","4e5676","e05464","d4545c","f4e7cf"],
    ["5c4d43","060506","444443","dcd49c","7b735a","b49369","d48444","b4a483","f4c474","ac9c84"],
    ["f4d44c","444444","c2ac60","9c8444","ac9c5c","f4e4ac","040404","2c947c","2c205c","302004"],
    ["bb5998","040404","fafa91","444444","a48c3c","ac946c","d683c2","dccc64","3c8474","d4c4d4"],
    ["447494","27231e","3c5474","fceccc","b48c3c","bca484","d4cc9c","bcbcc4","fcf4dc","50b4bc"],
    ["6d6487","fbea4f","070708","9c6637","a8a0da","f7979f","3c4c3c","bb6655","8e84b2","54344c"],
    ["444444","040404","75b8de","6c4494","327d7d","9c5cac","c4d4dc","54acac","b474d4","dc4c54"]
];

function generateTable() {
    const imageTable = document.getElementById("imageTable");
  
    for (let i = 0; i < images.length; i++) {
      const imageRow = document.createElement("tr");
      const colorRow = document.createElement("tr");
  
      const smallImageCell = document.createElement("td");
      const smallImage = document.createElement("img");
        //https://github.com/ToTo1302/RegaloPixel/blob/gh-pages/img/Bellossom.png?raw=true
      smallImage.src = `https://github.com/ToTo1302/RegaloPixel/blob/gh-pages/img/${images[i]}?raw=true`;
      smallImage.alt = images[i];
      smallImage.classList.add("small-image");
      smallImageCell.appendChild(smallImage);
  
      const largeImageCell = document.createElement("td");
      const largeImage = document.createElement("img");
      largeImage.src = `img/${images[i]}-Paleta.png`;
      largeImage.alt = `${images[i]} Paleta`;
      largeImage.classList.add("large-image");
      largeImageCell.appendChild(largeImage);
  
      imageRow.appendChild(smallImageCell);
      imageRow.appendChild(largeImageCell);
      imageTable.appendChild(imageRow);
    }


    const uniqueFruits = [...new Set(colors.flat())];
    const counts = [];

    for (const fruit of uniqueFruits) {
        let count = 0;
        const groups = [];

        for (let i = 0; i < colors.length; i++) {
            if (colors[i].includes(fruit)) {
                count++;
                groups.push(images[i]);
            }
        }

        counts.push([fruit, count, groups]);
    }

    const resultTable = document.getElementById("resultTable");

    //console.log(counts.length);

    for (const count of counts) {

        const row = document.createElement("tr");

        

        // Agregar celda de imagen
        const colorCell = document.createElement("td");
        const colorCircle = document.createElement("div");
        colorCircle.classList.add("color-circle");
        colorCircle.style.backgroundColor = `#${count[0]}`;
        colorCell.appendChild(colorCircle);
        row.appendChild(colorCell);


        
        // Agregar celdas de datos
        for (const value of count) {
            const cell = document.createElement("td");
            if (Array.isArray(value)) {
                cell.textContent = value.join(", ");
            } else {
                cell.textContent = value;
            }
            row.appendChild(cell);
        }

        
        const smallImageCell = document.createElement("td");

        const imagesContainer = document.createElement("div"); // Crea el contenedor de imágenes

        for (const imageName of count[2]) { // Itera a través de los nombres de imágenes
            const smallImage = document.createElement("img");
            smallImage.src = `img/${imageName}.png`;
            smallImage.alt = imageName;
            smallImage.classList.add("smallimage");
            imagesContainer.appendChild(smallImage); // Agrega cada imagen al contenedor
        }

        smallImageCell.appendChild(imagesContainer); // Agrega el contenedor de imágenes a la celda

        row.appendChild(smallImageCell);
        
        
        
        resultTable.appendChild(row);
    }


}
  
generateTable();
