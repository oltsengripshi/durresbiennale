let availableKeywords = [
    {name: 'Alfred Mirashi Milot', url: 'alfred-mirashi-milot'},
    {name: 'Art-Talk', url: 'art-talk'},
    {name: 'Artiol Izri', url: 'artiol-izri'},
    {name: 'Durrës Biennale', url: 'biennale'},
    {name: 'Blerina Zela', url: 'blerina-zela'},
    {name: 'Koleksioni', url: 'collection'},
    {name: 'Kontakt', url: 'contact'},
    {name: 'Biennale Botime', url: 'editions'},
    {name: 'Fatmir Juka', url: 'fatmir-juka'},
    {name: 'Historia', url: 'history'},
    {name: 'Massimo Scaringella', url: 'massimo-scaringella'},
    {name: 'Njoftimet', url: 'notification'},
    {name: 'Oltsen Gripshi', url: 'oltsen-gripshi'},
    {name: 'Publikimi', url: 'publishing'},
    {name: 'Realda Abdija', url: 'realda-abdija'},
    {name: 'Rreth Nesh', url: 'rreth-nesh'},
    {name: 'Tatiana Berdnik', url: 'tatiana-berdnik'},
    {name: 'Teuta Dhima', url: 'teuta-dhima'},
    {name: 'Workshop', url: 'workshop'},
    {name: 'Xhenisa Shahini', url: 'xhenisa-shahini'},
    {name: 'Yan Laichao', url: 'yan-laichao'},
    {name: 'Artiol Izri Artist', url: 'artists/Albania/artists/Artiol-Izri'},
    {name: 'Bujar Luca', url: 'artists/Albania/artists/Bujar-Luca'},
    {name: 'Elio Bajramaj', url: 'artists/Albania/artists/Elio-Bajramaj'},
    {name: 'Erisa Bekteshi', url: 'artists/Albania/artists/Erisa-Bekteshi'},
    {name: 'Jonida Xherri', url: 'artists/Albania/artists/Jonida-Xherri'},
    {name: 'Qazim Kertusha', url: 'artists/Albania/artists/Qazim-Kertusha'},
    {name: 'Rubin-Mandija', url: 'artists/Albania/artists/Rubin-Mandija'},
    {name: 'Sadik Spahija', url: 'artists/Albania/artists/Sadik-Spahija'},
    {name: 'Senad Xhexhovi', url: 'artists/Albania/artists/Senad-Xhexhovi'},
    {name: 'Marsel Zara & Harri Aleksi', url: 'artists/Albania/artists/Marsel-Zara-&-Harri-Aleksi'},
    {name: 'Joaquin Fargas', url: 'artists/Argentina/artists/Joaquin-Fargas'},
    {name: 'Lai Junjie', url: 'artists/China/artists/Lai-Junjie'},
    {name: 'Liu Ruowang', url: 'artists/China/artists/Liu-Ruowang'},
    {name: 'Zeng Yi', url: 'artists/China/artists/Zeng-Yi'},
    {name: 'Hannu Palosuo', url: 'artists/Finland/artists/Hannu-Palosuo'},
    {name: 'Nicolas Wiese & Claudia Van Hasselt', url: 'artists/Germany/artists/Nicolas-Wiese-&-Claudia'},
    {name: 'Arturo Casanova', url: 'artists/Italy/artists/Arturo-Casanova'},
    {name: 'Enrico Dedin', url: 'artists/Italy/artists/Enrico-Dedin'},
    {name: 'Fabrizio Passarella', url: 'artists/Italy/artists/Fabrizio-Passarella'},
    {name: 'Michele Stanzione', url: 'artists/Italy/artists/Michele-Stanzione'},
    {name: 'Oliviero Rainaldi', url: 'artists/Italy/artists/Oliviero-Rainaldi'},
    {name: 'Rosa Mundi', url: 'artists/Italy/artists/Rosa-Mundi'},
    {name: 'Valerie Oka', url: 'artists/Ivory Coast/artists/Valerie-Oka'},
    {name: 'Eshref Qahili', url: 'artists/Kosovo/artists/Eshref-Qahili'},
    {name: 'Monika Moteska & Robert Jankuloski', url: 'artists/Macedonia/artists/Monika-Moteska-&-Robert-Jankuloski'},
    {name: 'Antonio Pucar', url: 'artists/Peru/artists/Antonio-Pucar'},
    {name: 'Maria Bordeanu', url: 'artists/Romania/artists/Maria-Bordeanu'},
    {name: 'Ryan Koopmans & Alice Wexell', url: 'artists/Sweden/artists/Ryan-Koopmans-Alice'},
    {name: 'Andreas Luthi', url: 'artists/Switzerland/artists/Andreas-Luthi'},
    {name: 'Mu Tuan', url: 'artists/Special/artists/Mu-Tuan'},
    {name: 'Kemal Kahveci', url: 'artists/Turkey/artists/Kemal-Kahveci'},
    {name: 'Sibel Aktas', url: 'artists/Turkey/artists/Sibel-Aktas'},
    {name: '[dNASAb] & Gregory De la Haba', url: 'artists/USA/artists/[dNASAb]-&-Gregory'},
    {name: 'Victoria Thomen', url: 'artists/Domenican Republic/artists/Victoria-Thomen'}
]

const inputBox = document.getElementById("input-box");
const clearBtn = document.getElementById("clear-btn");
const searchBtn = document.getElementById("search-btn");
const resultBox = document.querySelector(".result-box");

inputBox.addEventListener("input", function() {
    if (inputBox.value.trim().length > 0) {
        clearBtn.style.display = "block";
        searchBtn.style.display = "none"
    } else {
        clearBtn.style.display = "none";
        searchBtn.style.display = "block";
    }
});

clearBtn.addEventListener("click", function() {
    inputBox.value = "";
    clearBtn.style.display = "none";
    searchBtn.style.display = "block";
    resultBox.innerHTML = "";
});


inputBox.onkeyup = function () {
    let input = inputBox.value.trim().toLowerCase();
    if (input.length === 0) {
        clearResults();
        return;
    }
    let result = availableKeywords.filter((keyword) => {
        return keyword.name.toLowerCase().includes(input);
    });
    display(result);
}

function display(result) {
    if (result.length === 0) {
        resultBox.innerHTML = '<li class="no-results-message">Nuk ka rezultat</li>';
        return;
    }

    const content = result.map((item) => {
        return `<li data-url="${item.url}" onclick="goToPage(this)">${item.name}</li>`;
    });
    resultBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function goToPage(item) {
    let url = item.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    }
}

function clearResults() {
    resultBox.innerHTML = '';
}
