// URL для запроса
const url = 'https://autorevizor.bitrix24.pl/rest/5/ev3x49lhyaf8f5e4/crm.lead.get.json';

// Параметры запроса
const params = {
  id: 51
};

// Выполнение запроса с использованием fetch
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(params)
})
.then(response => response.json())
.then(data => {
  // Вывод полученных данных в консоль
  console.log('Lead data:', data.result);
})
.catch(error => {
  console.error('Error fetching lead:', error);
});