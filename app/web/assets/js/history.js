// Remove o loader e renderiza os cards
if(window.location.pathname === "/app/web/pages/history.html" ) {
  setTimeout(() => {
    document.querySelector('.loader').remove();
    renderHistoryCards('history-card-container');
  }, 1500);

}

// Dados dos cards
const cards = [
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '29/09/2020',
    trasactionValue: 100,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '26/09/2020',
    trasactionValue: 20,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '20/09/2020',
    trasactionValue: 60,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '14/09/2020',
    trasactionValue: 30,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '14/09/2020',
    trasactionValue: 20,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '8/09/2020',
    trasactionValue: 50,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '3/09/2020',
    trasactionValue: 50,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '29/08/2020',
    trasactionValue: 100,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '22/08/2020',
    trasactionValue: 70,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '17/08/2020',
    trasactionValue: 100,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '13/08/2020',
    trasactionValue: 100,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '06/08/2020',
    trasactionValue: 100,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '01/08/2020',
    trasactionValue: 40,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '30/07/2020',
    trasactionValue: 100,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '25/07/2020',
    trasactionValue: 30,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '21/07/2020',
    trasactionValue: 20,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '15/07/2020',
    trasactionValue: 80,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '09/07/2020',
    trasactionValue: 90,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '05/07/2020',
    trasactionValue: 20,
  },
  {
    gasStationName: 'Auto Posto Esmeralda',
    parsedDate: '01/07/2020',
    trasactionValue: 60,
  }
]

// Adiciona os cards
function renderHistoryCards(containerId) {
  const parent = document.getElementById(containerId);

  cards.forEach((card_) => {
    // cria os elementos
    const card = document.createElement('div');
    card.classList.add('gas-card');

    const value = document.createElement('span');
    value.classList.add('gas-value');
    
    const date = document.createElement('span');
    date.classList.add('gas-date')

    const gasStationName = document.createElement('h2');
    gasStationName.classList.add('gas-station-name');
    
    const cardHeader = document.createElement('header');
    cardHeader.classList.add('card-header')

    // Preenche os elementos
    value.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(card_.trasactionValue);
    date.innerHTML = card_.parsedDate;
    gasStationName.innerHTML = card_.gasStationName;

    // Append nos elementos
    cardHeader.appendChild(value);
    cardHeader.appendChild(date);
    card.appendChild(cardHeader);
    card.appendChild(gasStationName);

    parent.appendChild(card)
  });
};