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
          venueLink: "#marina-david",
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
          venueLink: "#recanto-verde",
          ticketLink: "#tickets-trance"
      },
      {
          id: 4,
          title: "Bass Drop Festival",
          date: "25 MAI 2025",
          image: "https://via.placeholder.com/400x480",
          description: "O Bass Drop Festival é dedicado aos amantes de bass music, drum and bass e dubstep. Com palco principal e uma tenda alternativa, o festival traz artistas nacionais e regionais para uma maratona de graves pesados.",
          lineup: ["DJ Keoma", "Electra Soul", "Bass Master", "Jungle Beats"],
          venue: "Galpão das Artes",
          venueDescription: "O Galpão das Artes é um espaço industrial repaginado para eventos culturais. Com pé direito alto, ótima acústica e sistema de iluminação de ponta, o local é ideal para eventos noturnos de música eletrônica.",
          venueLink: "#galpao-artes",
          ticketLink: "#tickets-bass"
      },
      {
          id: 5,
          title: "Underground Vibes",
          date: "08 JUN 2025",
          image: "https://via.placeholder.com/400x480",
          description: "Underground Vibes celebra a cena alternativa da música eletrônica em Manaus. Focado em estilos como techno minimal, deep house e ambient, o evento acontece em um local secreto revelado apenas 24h antes do início.",
          lineup: ["Manu Tefé", "DJ Keoma", "Sound System", "Electro Flow"],
          venue: "Local Secreto",
          venueDescription: "O local exato do Underground Vibes é mantido em segredo até 24 horas antes do evento, criando um clima de mistério e exclusividade. A cada edição, um espaço diferente da cidade é transformado em um clube temporário com decoração e produção impecáveis.",
          venueLink: "#local-secreto",
          ticketLink: "#tickets-underground"
      },
      {
          id: 6,
          title: "Amazônia Psytrance",
          date: "22 JUN 2025",
          image: "https://via.placeholder.com/400x480",
          description: "O festival Amazônia Psytrance é um encontro de dois dias que celebra a cultura psytrance no coração da floresta. Com três palcos, área de camping, oficinas e alimentação vegetariana, o evento oferece uma experiência completa.",
          lineup: ["DJ Keoma", "Psy Tribe", "Forest Mind", "Spirit Dance"],
          venue: "Fazenda Esperança",
          venueDescription: "A Fazenda Esperança está localizada a 50km de Manaus, em uma área de preservação ambiental. O local conta com lagoa natural, trilhas ecológicas, área de camping e toda a infraestrutura necessária para um festival de dois dias com conforto e segurança.",
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
          showMoreBtn.textContent = 'Show Less';
      } else {
          showMoreBtn.textContent = 'Show More';
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
              
              // Exibir modal
              modalOverlay.classList.add('active');
              document.body.style.overflow = 'hidden'; // Impedir scroll
          }
      });
  });
  
  // Fechar Modal
  modalClose.addEventListener('click', function() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restaurar scroll
  });
  
  // Fechar modal ao clicar fora dele
  modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
          modalOverlay.classList.remove('active');
          document.body.style.overflow = ''; // Restaurar scroll
      }
  });
  
  // Fechar modal com a tecla ESC
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
          modalOverlay.classList.remove('active');
          document.body.style.overflow = ''; // Restaurar scroll
      }
  });
});