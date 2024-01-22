function getPosts() {
    return [
        {
            title: "StumbleBolt",
            version: "0.59.1",
            image: "assets/imagens/STUMBLEBOLT.png",
            download: "https://stfly.me/BOLTSTEAM7",
            downloadMobile: "mobilefdp5.html"
        },
        {
            title: "StumbleBolt2.0",
            version: "0.59.1",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            download: "https://stfly.me/BOLT2STEAM7",
            downloadMobile: "mobilefdp6.html"
        },
        {
            title: "StumbleGodz",
            version: "0.59.1",
            image: "assets/imagens/STUMBLEGODZ.png",
            download: "https://stfly.me/GODZSTEAM7",
            downloadMobile: "mobilefdp11.html"
        },
        {
            title: "StumbleGodzExc",
            version: "0.51",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            download: "Link",
            downloadMobile: "mobilefdp12.html"
        },
        {
            title: "MegaLite BoltAstax",
            version: "0.62.5",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            download: "https://stfly.me/MGLTSTEAM15",
            downloadMobile: "mobilefdp2.html"
        },
        {
            title: "MegaLite 2.0 BoltAstax",
            version: "0.62.5",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            download: "https://stfly.me/MGLT2STEAM15",
            downloadMobile: "mobilefdp7.html"
        },
        {
            title: "Yellow Otimizada",
            version: "0.62",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            download: "https://stfly.me/YELLOWSTEAM13",
            downloadMobile: "mobilefdp8.html"
        },
        {
            title: "Reshader BoltAstax",
            version: "0.62.5",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            download: "https://stfly.me/MGLTRESTEAM15",
            downloadMobile: "mobilefdp3.html"
        },
        {
            title: "Reshader",
            version: "0.62.5",
            image: "assets/imagens/RESHADER.png",
            download: "https://stfly.me/RESTEAM15",
            downloadMobile: "mobilefdp4.html"
        },
        {
            title: "StumblePink",
            version: "0.51",
            image: "assets/imagens/STUMBLEPINK.png",
            download: "Link",
            downloadMobile: "Link"
        },
        {
            title: "GalaxyBolt",
            version: "0.62.1",
            image: "assets/imagens/GALAXYBOLT.png",
            download: "https://stfly.me/GLXSTEAM14",
            downloadMobile: "mobilefdp12.html"
        },
        {
            title: "BoltAgua",
            version: "0.62.5",
            image: "assets/imagens/BOLTAGUA.png",
            download: "https://stfly.me/AGUASTEAM15",
            downloadMobile: "mobilefdp13"
        },
        {
            title: "DarkUva",
            version: "0.62.5",
            image: "assets/imagens/DARKUVA.png",
            download: "https://stfly.me/UVASTEAM15",
            downloadMobile: "mobilefdp10.html"
        },
        {
            title: "BoltWeen",
            version: "0.60",
            image: "assets/imagens/BOLTWEEN.png",
            download: "https://stfly.me/WEENSTEAM10",
            downloadMobile: "mobilefdp9.html"
        },
        {
            title: "BoltAstaxzz",
            version: "0.62.5",
            image: "assets/imagens/BOLTAXZZ.png",
            download: "https://stfly.me/BAZSTEAM15",
            downloadMobile: "mobilefdp1.html"
        }
    ];
};

async function getVersion() {
    let returnVersion;
    await fetch('https://api.stumbleguys.com/shared/1/LIVE')
        .then(r => r.json())
        .then(data => {
            let version = data.Versions.Max
            returnVersion = version;
        });

    return returnVersion;
};

(async () => {
    const postagens = await getPosts();
    const stumbleVersion = await getVersion();
    const postsDisponiveis = [];
    const postsIndisponiveis = [];

    postagens.forEach(postagem => {
        const postDisponivel = postagem.version == stumbleVersion;
        
        if (postDisponivel) {
                postsDisponiveis.push(`
                    <div class="col-lg-3 col-sm-6">
                        <div class="item">
                            <span style="pointer-events: none;">
                                <img src="${postagem.image}" alt="${postagem.title}">
                            </span>
                            <h4>${postagem.title}<br><span style="color: rgb(255, 183, 183);">${postagem.version}</span></h4>
                            <div class="button-container">
                                <a href="${postagem.downloadMobile}" class="purple-button">Mobile</a>
                                <a href="${postagem.download}" class="purple-button">Steam</a>
                            </div>
                        </div>
                    </div>
            `);
        } else {
            postsIndisponiveis.push(`
                <div class="col-lg-3 col-sm-6">
                    <div class="item">
                        <span style="pointer-events: none;">
                            <img src="${postagem.image}" alt="${postagem.title}">
                        </span>
                        <h4 style="color: gray;">Indisponível<br><span>Desatualizada</span></h4>
                    </div>
                </div>
            `);
        };
    });

    document.querySelector('.heading-section').querySelector('.row').innerHTML += `
        ${postsDisponiveis.join('\n')}
        ${postsIndisponiveis.join('\n')}
    `;

    document.querySelector('.heading-section').querySelector('.row').innerHTML += `
        <div class="col-lg-12">
            <div class="main-button">
                <a href="https://discord.gg/RKH4RAbDaZ">Discord</a>
            </div>
        </div>
    `;
})();