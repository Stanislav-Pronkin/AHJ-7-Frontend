export function addTicket(number, name, status, created) {
  const ticket = document.createElement('div');
  const item = name;
  const id = number;
  const date = created;
  const currentStatus = status;

  ticket.className = 'ticket';
  ticket.dataset.id = `${id}`;
  ticket.innerHTML = `<div class="status-field"><div class="status-icon style-ring ${currentStatus}"></div></div><div class="task">${item}</div><div class="date">${date}</div><div class="buttons">
    <div class="edit style-ring"></div><div class="delete style-ring"></div>
    </div>`;

  return ticket;
}

export function addTicketDescription(description) {
  const field = document.createElement('div');
  const text = description;

  field.className = 'ticket-description';
  field.innerHTML = `<p class="textDescription">${text}</p>`;

  return field;
}

export function modalAddTicket() {
  const modal = document.createElement('div');

  modal.className = 'modal modal-add';
  modal.innerHTML = `<h4 class="modal-title">Добавить тикет</h4>
    <form name="ticketForm">
    <label class="modal-field">
    <span class="modal-field-description">Краткое описание</span>
    <input type="text" id="ticketName" class="input-field" value="">
    </label>
    <label class="modal-field">
    <span class="modal-field-description">Подробное описание</span>
    <textarea type="textarea" id="ticketDescription" class="input-field" value=""></textarea>
    </label>
    </form>
    <div class="modal-buttons">
      <button type="button" class="button modal-ok">Ок</button>
      <button type="button" class="button modal-cancel">Отмена</button>
    </div>`;

  return modal;
}

export function modalEditTicket() {
  const modal = document.createElement('div');

  modal.className = 'modal modal-edit';
  modal.innerHTML = `<h4 class="modal-title">Изменить тикет</h4>
    <label class="modal-field">
    <span class="modal-field-description">Краткое описание</span>
    <input type="text" id="ticketName" class="input-field" value="">
    </label>
    <label class="modal-field">
    <span class="modal-field-description">Подробное описание</span>
    <textarea type="textarea" id="ticketDescription" class="input-field" value=""></textarea>
    </label>
    <div class="modal-buttons">
      <button type="button" class="button modal-ok">Ок</button>
      <button type="button" class="button modal-cancel">Отмена</button>
    </div>`;

  return modal;
}

export function modalDeleteTicket() {
  const modal = document.createElement('div');

  modal.className = 'modal modal-delete';
  modal.innerHTML = `<h4 class="modal-title">Удалить тикет</h4>
    <p class="modal-question">Вы уверены, что хотите удалить тикет? Это
    действие не обратимо.</p>
    <div class="modal-buttons">
      <button type="button" class="button modal-ok">Ок</button>
      <button type="button" class="button modal-cancel">Отмена</button>
    </div>`;

  return modal;
}
