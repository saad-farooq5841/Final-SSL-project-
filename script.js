function sayHello() {
    const name = document.getElementById('name').textContent;
    document.getElementById('greeting').textContent = `Nice to meet you, ${name}! 👋`;
  }
  