const server = 'https://ahj-7-helpdesk.herokuapp.com';

export function createTicket(name, description) {
  return new Promise((resolve) => {
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('description', description);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${server}/tickets?method=create`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    });
    xhr.send(params);
  });
}

export function editTicket(id, name, description) {
  return new Promise((resolve) => {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('name', name);
    params.append('description', description);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${server}/tickets?method=edit`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    });
    xhr.send(params);
  });
}

export function deleteTicket(id) {
  return new Promise((resolve) => {
    const params = new URLSearchParams();
    params.append('id', id);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${server}/tickets?method=delete&${params}`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    });
    xhr.send();
  });
}

export function getTickets() {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${server}/tickets?method=allTickets`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    });
    xhr.send();
  });
}

export function getTicketDescription(id) {
  return new Promise((resolve) => {
    const params = new URLSearchParams();
    params.append('id', id);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${server}/tickets?method=ticketById&${params}`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      }
    });
    xhr.send();
  });
}

export function changeTicketStatus(id, status) {
  return new Promise((resolve) => {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('status', status);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${server}/tickets?method=status&${params}`);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    });
    xhr.send();
  });
}
