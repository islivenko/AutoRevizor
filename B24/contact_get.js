// URL для получения контакта
const url = 'https://autorevizor.bitrix24.pl/rest/5/ev3x49lhyaf8f5e4/crm.contact.get.json';

// Параметры запроса: ID контакта
const params = {
  id: 7
};

// Выполнение запроса
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(params)
})
.then(response => response.json())
.then(data => {
  console.log('Contact data:', data.result);
})
.catch(error => {
  console.error('Error:', error);
});