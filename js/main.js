document.addEventListener('DOMContentLoaded', function() {
    // Dados dos eventos
    const eventData = [
        {
            id: 1,
            title: "BDAY 2 ANOS",
            date: "18 JUL 2025",
            image: "img/flyer-bday2anos.png",
            description: "Viva uma experiência única na Casa Rayol, um espaço vibrante às margens do Rio Negro, em Manaus. Com uma atmosfera que combina natureza exuberante e arquitetura moderna, a Casa Rayol é o cenário perfeito para eventos memoráveis. Seja ao som de DJs renomados ou em celebrações culturais, cada momento aqui é marcado por energia contagiante e vistas deslumbrantes da Ponta Negra.",
            lineup: ["Victor Lou"],
            venue: "Casa Rayol",
            venueDescription: "A Casa Rayol, situada na Avenida Coronel Teixeira, 9299, no bairro Ponta Negra, é um dos espaços de eventos mais icônicos de Manaus. Com uma localização privilegiada às margens do Rio Negro, oferece uma estrutura versátil que já acolheu desde festivais de música eletrônica, como o Surreal Tour, até eventos culturais tradicionais, como o Festival Norte Bumbás. Sua combinação de ambiente natural e infraestrutura moderna proporciona experiências inesquecíveis para todos os tipos de público.",
            venueLink: "https://www.instagram.com/p/DJFjMAWRfAk/?igsh=NWp3YWlhMXV2bXVt",
            ticketLink: "",
        },
        {
            id: 2,
            title: "E-ONE",
            date: "05 JUL 2025",
            image: "img/flyer-eone.png",
            description: "A batida da música eletrônica vai tomar conta de Manaus! Prepare-se para uma experiência intensa com o DJ Brisotti no Espaço Via Torres — um dos principais palcos da cena noturna da cidade. Em um ambiente que respira energia e liberdade, você vai dançar até o amanhecer ao som de sets envolventes, luzes pulsantes e uma vibe que só a música eletrônica pode proporcionar.",
            lineup: ["DJ Brisotti"],
            venue: "Espaço Via Torres",
            venueDescription: "Localizado na Rua Visconde de Porto Seguro, na Zona Norte de Manaus, o Espaço Via Torres é conhecido por sua estrutura ampla, perfeita para grandes eventos e experiências imersivas. Com capacidade para milhares de pessoas e um ambiente versátil, já foi palco de festas icônicas da capital. Agora, recebe a batida da música eletrônica com DJ Brisotti, em uma noite que promete entrar para a história.",
            venueLink: "https://www.instagram.com/rionegroproducoes?igsh=N3o5cGFpMDhwZnVt",
            ticketLink: ""
        },
        {
            id: 3,
            title: "New Generation",
            date: "10 MAI 2025",
            image: "img/flyer-livexaurora.PNG",
            description: "Prepare-se para uma noite inesquecível de música eletrônica no Terraço G9, com DJs que vão fazer o chão tremer no topo do Manaus Plaza!",
            lineup: ["Mila Journee", "Roddy Lima"],
            venue: "Terraço Plaza Shopping",
            venueDescription: "O Terraço G9, localizado no alto do Manaus Plaza Shopping, oferece uma vista incrível da cidade e um clima perfeito para curtir a vibe eletrônica.",
            venueLink: "https://www.instagram.com/aurora_amazonia?igsh=Z3ByYmtxOXc0Z290",
            ticketLink: "https://shotgun.live/pt-br/events/alive-aurora"
        },
        {
            id: 4,
            title: "Terra Mágica",
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
