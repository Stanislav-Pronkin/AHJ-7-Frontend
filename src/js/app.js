import {
  addTicket, addTicketDescription, modalAddTicket, modalDeleteTicket, modalEditTicket,
} from './action';
import {
  changeTicketStatus, createTicket, deleteTicket, editTicket, getTicketDescription, getTickets,
} from './API';

const tickets = document.querySelector('.ticket-list');
const container = document.querySelector('.container');
const add = container.querySelector('#add-ticket');
let ticketId = null;
let ticketCurrent = null;

function update(ticketsAll) {
  ticketsAll.forEach((item) => {
    const {
      id, name, status, created,
    } = item;
    const newTicket = addTicket(id, name, status, created);

    tickets.appendChild(newTicket);
  });
}

function init() {
  getTickets().then((response) => {
    const ticketsAll = JSON.parse(response);

    update(ticketsAll);
  });
}

init();

add.addEventListener('click', () => {
  const modal = modalAddTicket();

  document.body.appendChild(modal);
});

document.addEventListener('click', (event) => {
  const element = event.target;

  if (element.classList.contains('delete')) {
    ticketCurrent = element.closest('.ticket');
    ticketId = ticketCurrent.dataset.id;
    const modalDel = modalDeleteTicket();

    document.body.appendChild(modalDel);
  } else if (element.classList.contains('edit')) {
    ticketCurrent = element.closest('.ticket');
    ticketId = ticketCurrent.dataset.id;
    const modalEdit = modalEditTicket();

    document.body.appendChild(modalEdit);
  } else if (element.classList.contains('status-icon')) {
    ticketCurrent = element.closest('.ticket');
    ticketId = ticketCurrent.dataset.id;
    const icon = element;

    if (!icon.classList.contains('done')) {
      changeTicketStatus(ticketId, 'done').then((response) => {
        if (response === 'done') {
          icon.classList.add('done');
        }
      });
    } else {
      changeTicketStatus(ticketId, 'null').then((response) => {
        if (response === 'null') {
          icon.classList.remove('done');
        }
      });
    }
  } else if (element.closest('.ticket')) {
    const descriptionDelete = tickets.querySelector('.ticket-description');

    if (!descriptionDelete) {
      ticketCurrent = element.closest('.ticket');
      ticketId = ticketCurrent.dataset.id;

      getTicketDescription(ticketId).then((response) => {
        const ticketDescription = addTicketDescription(response);

        ticketCurrent.insertAdjacentElement('afterEnd', ticketDescription);
      });
    } else {
      descriptionDelete.parentNode.removeChild(descriptionDelete);
    }
  }

  if (element.classList.contains('modal-ok')) {
    const modal = element.closest('.modal');

    if (modal.classList.contains('modal-add') || modal.classList.contains('modal-edit')) {
      const ticketName = modal.querySelector('#ticketName').value;
      const description = modal.querySelector('#ticketDescription').value;

      if (modal.classList.contains('modal-add')) {
        createTicket(ticketName, description).then((response) => {
          const dataTicket = JSON.parse(response);
          const {
            id, name, status, created,
          } = dataTicket;
          const newTicket = addTicket(id, name, status, created);

          tickets.appendChild(newTicket);
          modal.parentNode.removeChild(modal);
        });
      } else if (modal.classList.contains('modal-edit')) {
        editTicket(ticketId, ticketName, description).then((response) => {
          const dataTicket = JSON.parse(response);
          const newName = dataTicket.name;

          ticketCurrent.querySelector('.task').innerText = `${newName}`;
          modal.parentNode.removeChild(modal);
        });
      }
    } else if (modal.classList.contains('modal-delete')) {
      deleteTicket(ticketId).then((response) => {
        if (response === 'ok') {
          ticketCurrent.parentNode.removeChild(ticketCurrent);
          modal.parentNode.removeChild(modal);
        }
      });
    }
  }

  if (element.classList.contains('modal-cancel')) {
    const modal = element.closest('.modal');
    modal.parentNode.removeChild(modal);
  }
});
