document.addEventListener('DOMContentLoaded', function() {
    // Dados dos eventos
    const eventData = [
        {
            id: 1,
            title: "Balada 2000",
            date: "05 ABR 2025",
            image: "img/flyer-balada-2000.png",
            description: "Uma noite inesquecível com Alex Gaudino e atrações locais no ROX Club.",
            lineup: ["Alex Gaudino", "Cesar Dantas", "Felipe Nascimento", "Leo Gomes", "Madame C", "Toxa"],
            venue: "ROX Club",
            venueDescription: "O ROX Club é um espaço icônico para festas em Manaus, conhecido por sua atmosfera vibrante e line-up de alta qualidade.",
            venueLink: "https://maps.app.goo.gl/NshQA1MRZFiLAzPEA",
            ticketLink: "https://shotgun.live/events/balada-2000-alex-gaudino"
        },
        {
            id: 2,
            title: "Toca PVT Conexão Eletrônica",
            date: "30 ABR 2025",
            image: "img/flyer-toca.png",
            description: "Toca PVT é uma noite especial, véspera de feriado, que reúne os amantes da música eletrônica em um ambiente sofisticado e exclusivo. Prepare-se para uma experiência única ao som de DJs renomados e muita energia positiva.",
            lineup: ["DJ Keoma", "Pedro Mao"],
            venue: "Belle Epoque Restaurant & Cocktail Bar",
            venueDescription: "Localizado no coração de Manaus, o Belle Epoque Restaurant & Cocktail Bar oferece uma experiência única, combinando alta gastronomia, drinks exclusivos e música eletrônica de qualidade em um ambiente elegante.",
            venueLink: "https://www.instagram.com/conexaoeletronicamanaus",
            ticketLink: "#tickets-techno"
        },
        {
            id: 3,
            title: "Floresta Sônica",
            date: "13 ABR 2025",
            image: "img/flyer-floresta-sonica.png",
            description: "A Chácara Dama é um espaço para eventos localizada em Manaus, Amazonas. Em agosto de 2023, sediou o evento Terra Mágica 2023, que contou com uma estrutura surpreendente e apresentações de grandes nomes da música eletrônica mundial, além de destaques regionais.",
            lineup: ["All in One", "Trampsta"],
            venue: "Chácara Dama",
            venueDescription: "Chácara Dama é um espaço amplo e versátil em Manaus, ideal para eventos ao ar livre. Cercada por natureza exuberante, oferece uma atmosfera única para festas e festivais. Com estrutura completa, incluindo áreas cobertas, estacionamento e espaço para grandes montagens de palco, a chácara é perfeita para experiências imersivas ao som da música eletrônica e outros eventos especiais.",
            venueLink: "instagram.com/florestasonica  ",
            ticketLink: "santocartao.com.br/floresta-sonica "
        },
        {
            id: 4,
            title: "Abaré Club",
            date: "26 ABR 2025",
            image: "img/flyer-abaré.png",
            description: "O Abaré Clube é um dos destinos mais icônicos de Manaus para quem busca lazer, boa gastronomia e experiências culturais autênticas. Às margens do Rio Tarumã, o clube oferece uma combinação única de natureza exuberante, infraestrutura acolhedora e eventos que valorizam a cultura amazônica. Ideal para famílias, grupos de amigos e turistas que desejam relaxar, curtir boa música e saborear pratos regionais em um ambiente encantador.",
            lineup: ["El Iwasa", "Adnan Sharif"],
            venue: "Clube Abaré",
            venueDescription: "Localizado em meio à natureza, o Abaré Clube conta com amplas áreas abertas, decks sobre o rio, espaço para eventos ao ar livre e restaurante com vista panorâmica. Seu ambiente rústico e ao mesmo tempo aconchegante traz uma experiência única para quem busca conexão com a natureza sem abrir mão do conforto. O espaço é perfeito para confraternizações, aniversários, shows e eventos culturais, sendo um dos pontos mais charmosos da capital amazonense.",
            venueLink: "https://maps.app.goo.gl/BTdTGzTxgbUiG1wc9",
            ticketLink: "https://shotgun.live/pt-br/events/eli-iwasa-by-abare-club-rox-club "
        },
        {
            id: 5,
            title: "Urban Track",
            date: "03 MAI 2025",
            image: "img/flyer-urban.png",
            description: "O Subsolo do Vasco Vasques é um dos espaços mais versáteis e underground de Manaus, ideal para eventos que fogem do convencional. Conhecido por abrigar festas, feiras, exposições e encontros culturais alternativos, o ambiente oferece uma atmosfera urbana e intimista, perfeito para quem busca inovação e autenticidade. Sua localização estratégica, no coração do complexo do Centro de Convenções, facilita o acesso e atrai um público diverso e engajado.",
            lineup: ["SandeVille", "Vinter", "Nocapz"],
            venue: "SubSolo Vasco Vasques",
            venueDescription: "Com uma estrutura ampla e flexível, o subsolo do Vasco Vasques conta com pé-direito alto, espaço modulável e iluminação adaptável, possibilitando diferentes tipos de ambientação. Seu estilo industrial e contemporâneo torna o local ideal para produções criativas, eventos de arte, cultura urbana, raves, festivais e experiências imersivas. O espaço é climatizado, seguro e preparado para receber grandes públicos com conforto e praticidade.",
            venueLink: "https://www.instagram.com/thisurbantrack",
            ticketLink: "#tickets-underground"
        },
        {
            id: 6,
            title: "Unfazed",
            date: "03 MAI 2025",
            image: "img/flyer-unfazed.png",
            description: "O 502 Room é um dos espaços mais exclusivos e conceituais de Manaus, voltado para experiências noturnas sofisticadas e imersivas. Com uma proposta que une música eletrônica, arte e lifestyle, o local atrai um público seleto que busca vivências autênticas e de alto padrão. Ideal para festas, lançamentos e eventos culturais, o 502 Room se destaca pela curadoria musical refinada e ambiente envolvente.",
            lineup: ["Pedro Mao"],
            venue: "502 Room",
            venueDescription: "Localizado em uma cobertura, o 502 Room oferece uma atmosfera única, com vista privilegiada da cidade, decoração minimalista e iluminação cênica que valoriza a experiência sensorial. O espaço conta com bar premium, sistema de som de alta performance e ambientação moderna, misturando elementos urbanos com toques contemporâneos. É o local perfeito para eventos intimistas, sofisticados e cheios de personalidade.",
            venueLink: "#fazenda-esperanca",
            ticketLink: "#tickets-psytrance"
        }
    ];
    
    const showMoreBtn = document.querySelector('.show-more');
    const hiddenEvents = document.querySelector('.hidden-events');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Função Show More/Less
    showMoreBtn.addEventListener('click', function() {
        hiddenEvents.classList.toggle('show');
        
        if (hiddenEvents.classList.contains('show')) {
            showMoreBtn.textContent = 'Mostrar Menos';
        } else {
            showMoreBtn.textContent = 'Mostrar Mais';
        }
    });
    
    // Abrir Modal ao clicar no card do evento
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Ignorar o clique se for no botão de comprar ingressos
            if (e.target.classList.contains('ticket-btn') || e.target.closest('.ticket-btn')) {
                return;
            }
            
            const eventId = parseInt(this.getAttribute('data-event'));
            const event = eventData.find(e => e.id === eventId);
            
            if (event) {
                // Atualizar conteúdo do modal
                modal.querySelector('.modal-image').src = event.image;
                modal.querySelector('.modal-image').alt = event.title;
                modal.querySelector('.modal-title').textContent = event.title;
                modal.querySelector('.modal-date').textContent = event.date;
                modal.querySelector('.modal-description').textContent = event.description;
                
                // Atualizar lineup
                const lineupContainer = modal.querySelector('.modal-lineup-grid');
                lineupContainer.innerHTML = '';
                event.lineup.forEach(artist => {
                    const span = document.createElement('span');
                    span.classList.add('lineup');
                    span.innerHTML = `<span>${artist}</span>`;
                    lineupContainer.appendChild(span);
                });
                
                // Atualizar informações do local
                modal.querySelector('.venue-description').textContent = event.venueDescription;
                modal.querySelector('.venue-link').href = event.venueLink;
                modal.querySelector('.ticket-link').href = event.ticketLink;
                
                // Exibir modal e bloquear scroll do fundo
                modalOverlay.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    });
    
    // Fechar Modal
    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    });
    
    // Fechar modal ao clicar fora dele
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
    
    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
  });
  