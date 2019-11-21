


var request = new XMLHttpRequest();

request.open('GET', 'https://private-anon-32bf879022-globalwinescore.apiary-mock.com/globalwinescores/latest/');

request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Authorization', '28657cced87f7decf3d5a5f5c1be899dec23e9bb');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();




