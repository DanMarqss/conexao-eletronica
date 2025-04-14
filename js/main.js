document.addEventListener('DOMContentLoaded', function() {
    // Dados dos eventos
    const eventData = [
        {
            id: 1,
            title: "Abaré Club",
            date: "26 ABR 2025",
            image: "img/flyer-abaré.png",
            description: "O Abaré Clube é um dos destinos mais icônicos de Manaus para quem busca lazer, boa gastronomia e experiências culturais autênticas. Às margens do Rio Tarumã, o clube oferece uma combinação única de natureza exuberante, infraestrutura acolhedora e eventos que valorizam a cultura amazônica. Ideal para famílias, grupos de amigos e turistas que desejam relaxar, curtir boa música e saborear pratos regionais em um ambiente encantador.",
            lineup: ["El Iwasa", "Adnan Sharif"],
            venue: "Casa Rayol",
            venueDescription: "Localizado em meio à natureza, o Abaré Clube conta com amplas áreas abertas, decks sobre o rio, espaço para eventos ao ar livre e restaurante com vista panorâmica. Seu ambiente rústico e ao mesmo tempo aconchegante traz uma experiência única para quem busca conexão com a natureza sem abrir mão do conforto. O espaço é perfeito para confraternizações, aniversários, shows e eventos culturais, sendo um dos pontos mais charmosos da capital amazonense.",
            venueLink: "https://www.instagram.com/aurora_amazonia?igsh=Z3ByYmtxOXc0Z290",
            ticketLink: "https://shotgun.live/pt-br/events/eli-iwasa-by-abare-club-rox-club",
        },
        {
            id: 2,
            title: "Toca PVT Conexão Eletrônica",
            date: "30 ABR 2025",
            image: "img/flyer-toca.png",
            description: "Toca PVT é uma noite especial, véspera de feriado, que reúne os amantes da música eletrônica em um ambiente sofisticado e exclusivo. Prepare-se para uma experiência única ao som de DJs renomados e muita energia positiva.",
            lineup: ["DJ Keoma", "Pedro Mao", "Bess Maze", "Gadelha", "Felipe Nascimento", "Eike", "IAN"],
            venue: "Belle Epoque Restaurant & Cocktail Bar",
            venueDescription: "Localizado no coração de Manaus, o Belle Epoque Restaurant & Cocktail Bar oferece uma experiência única, combinando alta gastronomia, drinks exclusivos e música eletrônica de qualidade em um ambiente elegante.",
            venueLink: "https://www.instagram.com/conexaoeletronicamanaus",
            ticketLink: "https://shotgun.live/pt-br/events/toca-conexaoeletronica?fbclid=PAY2xjawJgtRhleHRuA2FlbQIxMQABp0SO6BgvJhtLSuhHsp11kwz6465VS6kewNiV5SIzlworpnEhZoU_DAv6tP3W_aem_g90P9eVJ3Ika-XRrzxrugQ"
        },
        {
            id: 3,
            title: "New Generation",
            date: "10 MAI 2025",
            image: "img/flyer-livexaurora.png",
            description: "Prepare-se para uma noite inesquecível de música eletrônica no Terraço G9, com DJs que vão fazer o chão tremer no topo do Manaus Plaza!",
            lineup: ["Mila Journee", "Roddy Lima"],
            venue: "Terraço Plaza Shopping",
            venueDescription: "O Terraço G9, localizado no alto do Manaus Plaza Shopping, oferece uma vista incrível da cidade e um clima perfeito para curtir a vibe eletrônica.",
            venueLink: "https://www.instagram.com/aurora_amazonia?igsh=Z3ByYmtxOXc0Z290",
            ticketLink: "https://shotgun.live/pt-br/events/alive-aurora"
        },
        {
            id: 4,
            title: "Terra",
            date: "15 JUN 2025",
            image: "img/flyer-terra.png",
            description: "Prepare-se para uma experiência eletrizante! O Amazonas Dragway vai se transformar numa verdadeira pista de dança sob as estrelas, com NEELIX, Sighter, V-Falabela, Hybrid Machines e Samurai comandando o som. Uma noite de beats intensos, luzes e velocidade — do jeito que a cena pede!",
            lineup: ["NEELIX", "Sighter", "V-Falabela", "Hybrid Machines", "Samurai"],
            venue: "Amazonas Dragway",
            venueDescription: "Conhecido por suas emocionantes corridas de arrancada, o Amazonas Dragway é um espaço amplo, ao ar livre, perfeito para grandes eventos. Com estrutura preparada para receber multidões e um clima de liberdade total, é o cenário ideal para sentir cada batida pulsar no peito.",
            venueLink: "https://www.instagram.com/terracrewam/",
            ticketLink: "https://www.sympla.com.br/evento/terra-2025-manaus-exclusivo-2-000-pessoas/2603457"
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
            lineup: ["Brahim", "Louris", "Sone", "Lavor", "Eike"],
            venue: "502 Room",
            venueDescription: "Localizado em uma cobertura, o 502 Room oferece uma atmosfera única, com vista privilegiada da cidade, decoração minimalista e iluminação cênica que valoriza a experiência sensorial. O espaço conta com bar premium, sistema de som de alta performance e ambientação moderna, misturando elementos urbanos com toques contemporâneos. É o local perfeito para eventos intimistas, sofisticados e cheios de personalidade.",
            venueLink: "#fazenda-esperanca",
            ticketLink: "https://shotgun.live/pt-br/events/502-room-presents-unfaz"
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
    
    // Abrir Modal ao clicar no card ou no botão de comprar ingressos
    document.querySelectorAll('.event-card').forEach(card => {
        // Função que abre o modal e popula os dados
        const openModal = () => {
            const eventId = parseInt(card.getAttribute('data-event'));
            const event = eventData.find(e => e.id === eventId);
            if (!event) return;
            
            // Atualiza conteúdo do modal
            modal.querySelector('.modal-image').src = event.image;
            modal.querySelector('.modal-image').alt = event.title;
            modal.querySelector('.modal-title').textContent = event.title;
            modal.querySelector('.modal-date').textContent = event.date;
            modal.querySelector('.modal-description').textContent = event.description;
            
            // Line-up
            const lineupContainer = modal.querySelector('.modal-lineup-grid');
            lineupContainer.innerHTML = '';
            event.lineup.forEach(artist => {
                const span = document.createElement('span');
                span.classList.add('lineup');
                span.innerHTML = `<span>${artist}</span>`;
                lineupContainer.appendChild(span);
            });
            
            // Local e ingressos
            modal.querySelector('.venue-description').textContent = event.venueDescription;
            modal.querySelector('.venue-link').href = event.venueLink;
            modal.querySelector('.ticket-link').href = event.ticketLink;
            
            // Exibe modal e bloqueia scroll do fundo
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
        };

        // Clique em qualquer parte do card
        card.addEventListener('click', openModal);

        // Clique no botão de ingressos dentro do card
        const ticketBtn = card.querySelector('.ticket-btn');
        if (ticketBtn) {
            ticketBtn.addEventListener('click', e => {
                e.preventDefault(),
                e.stopPropagation(); // não dispara o listener do card duas vezes
                openModal();
            });
        }
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
