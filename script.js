// Anime Website by Aahna [Trial #6]

let animecharEl = document.getElementById('animecharacters');

// Anime character images array
let animecharimages = [{
    src: 'imgs/cowboy_bebop/faye.jpeg',
    animecharname: 'Faye'
},
{
    src: 'imgs/cowboy_bebop/edward.webp',
    animecharname: 'Edward'
},
{
    src: 'imgs/cowboy_bebop/jet_black.webp',
    animecharname: 'Jet Black'
},
{
    src: 'imgs/cowboy_bebop/jobim.webp',
    animecharname: 'Jobim'
},
{
    src: 'imgs/cowboy_bebop/laughing_bull.webp',
    animecharname: 'Laughing Bull'
},
{
    src: 'imgs/cowboy_bebop/spike.webp',
    animecharname: 'Spike'
},
{
    src: 'imgs/cowboy_bebop/vicious.webp',
    animecharname: 'Vicious'
},
{
    src: 'imgs/moriarty_the_patriot/albert.webp',
    animecharname: 'Albert'
},
{
    src: 'imgs/moriarty_the_patriot/fred.webp',
    animecharname: 'Fred'
},
{
    src: 'imgs/moriarty_the_patriot/lestrade.webp',
    animecharname: 'Lestrade'
},
{
    src: 'imgs/moriarty_the_patriot/louis.webp',
    animecharname: 'Louis'
},
{
    src: 'imgs/moriarty_the_patriot/mycroft.jpeg',
    animecharname: 'Mycroft'
},
{
    src: 'imgs/moriarty_the_patriot/sebastian.webp',
    animecharname: 'Sebastian'
},
{
    src: 'imgs/moriarty_the_patriot/sherlock.webp',
    animecharname: 'Sherlock'
},
{
    src: 'imgs/moriarty_the_patriot/watson.webp',
    animecharname: 'Watson'
},
{
    src: 'imgs/moriarty_the_patriot/william.jpeg',
    animecharname: 'William'
},
{
    src: 'imgs/spyxfamily/anya.avif',
    animecharname: 'Anya'
},
{
    src: 'imgs/spyxfamily/damian.webp',
    animecharname: 'Damian'
},
{
    src: 'imgs/spyxfamily/franky.avif',
    animecharname: 'Franky'
},
{
    src: 'imgs/spyxfamily/henry.jpeg',
    animecharname: 'Henry'
},
{
    src: 'imgs/spyxfamily/loid.jpg',
    animecharname: 'Loid'
},
{
    src: 'imgs/spyxfamily/sylvia.webp',
    animecharname: 'Sylvia'
},
{
    src: 'imgs/spyxfamily/yor_forger.avif',
    animecharname: 'Yor Forger'
},
{
    src: 'imgs/summertime_render/haine.jpeg',
    animecharname: 'Haine'
},
{
    src: 'imgs/summertime_render/hizuru_minakata.webp',
    animecharname: 'Hizuru Minakata'
},
{
    src: 'imgs/summertime_render/masahito.jpeg',
    animecharname: 'Masahito'
},
{
    src: 'imgs/summertime_render/nezu.jpeg',
    animecharname: 'Nezu'
},
{
    src: 'imgs/summertime_render/seido.webp',
    animecharname: 'Seido'
},
{
    src: 'imgs/summertime_render/shadow.webp',
    animecharname: 'Shadow'
},
{
    src: 'imgs/summertime_render/shinpei.jpeg',
    animecharname: 'Shinpei'
},
{
    src: 'imgs/summertime_render/shiori.jpeg',
    animecharname: 'Shiori'
},
{
    src: 'imgs/summertime_render/sou.jpeg',
    animecharname: 'Sou'
},
{
    src: 'imgs/summertime_render/tokiko.jpeg',
    animecharname: 'Tokiko'
},
{
    src: 'imgs/summertime_render/ushio.webp',
    animecharname: 'Ushio'
},
{
    src: 'imgs/violet_evergarden/benedict.webp',
    animecharname: 'Benedict'
},
{
    src: 'imgs/violet_evergarden/cattleya.webp',
    animecharname: 'Cattleya'
},
{
    src: 'imgs/violet_evergarden/claudia.webp',
    animecharname: 'Claudia'
},
{
    src: 'imgs/violet_evergarden/dietfried.webp',
    animecharname: 'Dietfried'
},
{
    src: 'imgs/violet_evergarden/gilbert.webp',
    animecharname: 'Gilbert'
},
{
    src: 'imgs/violet_evergarden/iris.webp',
    animecharname: 'Iris'
}];

let animeImage = '';

for (let i = 0; i < animecharimages.length; i++) {
    let animeimg = animecharimages[i].src;
    // animeImage += `<div class="anime">
    //     <img src=${animeimg} width="400" height="400">
    //     <span id="showpanel${i}" class="icon"><i class="fa fa-bars"></i></span>

    //     <div id="mySidepanel${i}" class="sidepanel">
    //         <span id="closepanel${i}"><i class="fa fa-close"></i></span>
    //         <a href="favourite.html">Favourite</a>
    //         <a href="album.html">Album</a>
    //         <a href="anime.html">Anime Title Group</a>
    //     </div>

    //     <p class='disanimename'>${animecharimages[i].animecharname}</p>
    // </div>`;



    let divEl = document.createElement('div');
    divEl.className = "anime";

    let imgEl = document.createElement('img');
    imgEl.src = `${animeimg}`;
    imgEl.width = "400";
    imgEl.height = "400";
    divEl.innerHtml = imgEl;

    let spanEl = document.createElement('span');
    spanEl.id = `showpanel${i}`;
    spanEl.className = "icon";
    let iEl = document.createElement('i');
    spanEl.innerHTML = iEl;
    iEl.className = "fa fa-bars";

    let div2array = [{
        href: 'favourite.html',
        inner: 'Favourite'
    },
    {
        href: 'album.html',
        inner: 'Album'
    },
    {
        href: 'anime.html',
        inner: 'Anime Title Group'
    }]

    let div2ininEl = document.createElement('a');
    div2ininEl.href = div2array[0].href;
    div2ininEl.innerHTML = div2array[0].inner;

    let div2inin1El = document.createElement('a');
    div2inin1El.href = div2array[1].href;
    div2inin1El.innerHTML = div2array[1].inner;

    let div2inin2El = document.createElement('a');
    div2inin2El.href = div2array[2].href;
    div2inin2El.innerHTML = div2array[2].inner;


    let div2inEl = document.createElement('span');
    div2inEl.id = `closepanel${i}`;
    let i1El = document.createElement('i');
    div2inEl.innerHTML = i1El;
    i1El.className = "fa fa-close";

    let div2El = document.createElement('div');
    div2El.id = `mySidepanel${i}`;
    div2El.className = "sidepanel";

    let paraEl = document.createElement('p');
    paraEl.className = 'disanimename';
    paraEl.innerHTML = `${animecharimages[i].animecharname}`;

    // AppendChild
    div2inEl.appendChild(div2ininEl);
    div2inEl.appendChild(div2inin1El);
    div2inEl.appendChild(div2inin2El);

    div2El += div2inEl;

    divEl.appendChild(spanEl);
    divEl.appendChild(imgEl);
    divEl.appendChild(paraEl);

    divEl+= div2El;

    animeImage += divEl;
}

animecharEl.innerHTML = animeImage;

// Sidepanel
let sidepanelEl = document.getElementsByClassName("mySidepanel");
let closepanelEl = document.getElementsByClassName("closepanel");
let showpanelEl = document.getElementsByClassName("showpanel");
