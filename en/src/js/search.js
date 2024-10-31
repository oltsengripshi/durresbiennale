let availableKeywords = [
    {name: 'Alfred Mirashi Milot', url: 'alfred-mirashi-milot'},
    {name: 'Art-Talk', url: 'art-talk'},
    {name: 'Artiol Izri', url: 'artiol-izri'},
    {name: 'Durrës Biennale', url: 'biennale'},
    {name: 'Blerina Zela', url: 'blerina-zela'},
    {name: 'Collection', url: 'collection'},
    {name: 'Contact', url: 'contact'},
    {name: 'Biennale Editions', url: 'editions'},
    {name: 'Fatmir Juka', url: 'fatmir-juka'},
    {name: 'History', url: 'history'},
    {name: 'Massimo Scaringella', url: 'massimo-scaringella'},
    {name: 'Notification', url: 'notification'},
    {name: 'Oltsen Gripshi', url: 'oltsen-gripshi'},
    {name: 'Publishing', url: 'publishing'},
    {name: 'Realda Abdija', url: 'realda-abdija'},
    {name: 'About Us', url: 'rreth-nesh'},
    {name: 'Tatiana Berdnik', url: 'tatiana-berdnik'},
    {name: 'Teuta Dhima', url: 'teuta-dhima'},
    {name: 'Workshop', url: 'workshop'},
    {name: 'Xhenisa Shahini', url: 'xhenisa-shahini'},
    {name: 'Yan Laichao', url: 'yan-laichao'},
    {name: 'Artiol Izri Artist', url: '/en/artists/Albania/artists/Artiol-Izri'},
    {name: 'Bujar Luca', url: '/en/artists/Albania/artists/Bujar-Luca'},
    {name: 'Elio Bajramaj', url: '/en/artists/Albania/artists/Elio-Bajramaj'},
    {name: 'Erisa Bekteshi', url: '/en/artists/Albania/artists/Erisa-Bekteshi'},
    {name: 'Jonida Xherri', url: '/en/artists/Albania/artists/Jonida-Xherri'},
    {name: 'Qazim Kertusha', url: '/en/artists/Albania/artists/Qazim-Kertusha'},
    {name: 'Rubin-Mandija', url: '/en/artists/Albania/artists/Rubin-Mandija'},
    {name: 'Sadik Spahija', url: '/en/artists/Albania/artists/Sadik-Spahija'},
    {name: 'Senad Xhexhovi', url: '/en/artists/Albania/artists/Senad-Xhexhovi'},
    {name: 'Marsel Zara & Harri Aleksi', url: '/en/artists/Albania/artists/Marsel-Zara-&-Harri-Aleksi'},
    {name: 'Joaquin Fargas', url: '/en/artists/Argentina/artists/Joaquin-Fargas'},
    {name: 'Lai Junjie', url: '/en/artists/China/artists/Lai-Junjie'},
    {name: 'Liu Ruowang', url: '/en/artists/China/artists/Liu-Ruowang'},
    {name: 'Zeng Yi', url: '/en/artists/China/artists/Zeng-Yi'},
    {name: 'Hannu Palosuo', url: '/en/artists/Finland/artists/Hannu-Palosuo'},
    {name: 'Nicolas Wiese & Claudia Van Hasselt', url: '/en/artists/Germany/artists/Nicolas-Wiese-&-Claudia'},
    {name: 'Arturo Casanova', url: '/en/artists/Italy/artists/Arturo-Casanova'},
    {name: 'Enrico Dedin', url: '/en/artists/Italy/artists/Enrico-Dedin'},
    {name: 'Fabrizio Passarella', url: '/en/artists/Italy/artists/Fabrizio-Passarella'},
    {name: 'Michele Stanzione', url: '/en/artists/Italy/artists/Michele-Stanzione'},
    {name: 'Oliviero Rainaldi', url: '/en/artists/Italy/artists/Oliviero-Rainaldi'},
    {name: 'Rosa Mundi', url: '/en/artists/Italy/artists/Rosa-Mundi'},
    {name: 'Valerie Oka', url: '/en/artists/Ivory Coast/artists/Valerie-Oka'},
    {name: 'Eshref Qahili', url: '/en/artists/Kosovo/artists/Eshref-Qahili'},
    {name: 'Monika Moteska & Robert Jankuloski', url: '/en/artists/Macedonia/artists/Monika-Moteska-&-Robert-Jankuloski'},
    {name: 'Antonio Pucar', url: '/en/artists/Peru/artists/Antonio-Pucar'},
    {name: 'Maria Bordeanu', url: '/en/artists/Romania/artists/Maria-Bordeanu'},
    {name: 'Ryan Koopmans & Alice Wexell', url: '/en/artists/Sweden/artists/Ryan-Koopmans-Alice'},
    {name: 'Andreas Luthi', url: '/en/artists/Switzerland/artists/Andreas-Luthi'},
    {name: 'Mu Tuan', url: '/en/artists/Special/artists/Mu-Tuan'},
    {name: 'Kemal Kahveci', url: '/en/artists/Turkey/artists/Kemal-Kahveci'},
    {name: 'Sibel Aktas', url: '/en/artists/Turkey/artists/Sibel-Aktas'},
    {name: '[dNASAb] & Gregory De la Haba', url: '/en/artists/USA/artists/[dNASAb]-&-Gregory'},
    {name: 'Victoria Thomen', url: '/en/artists/Domenican Republic/artists/Victoria-Thomen'}

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
