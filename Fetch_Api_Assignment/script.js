// ---------- MODULE PATTERN ----------
const AppModule = (() => {
  const blogSection = document.getElementById('blogSection');
  const todoSection = document.getElementById('todoSection');
  const postsContainer = document.getElementById('postsContainer');
  const todosContainer = document.getElementById('todosContainer');

  // Switch between Blog & Todo sections
  const toggleSection = (showBlog) => {
    blogSection.classList.toggle('hidden', !showBlog);
    todoSection.classList.toggle('hidden', showBlog);
  };

  return {
    toggleSection,
    postsContainer,
    todosContainer
  };
})();

// ---------- FACTORY PATTERN ----------
const CardFactory = (() => {
  const createCard = (type, data) => {
    const div = document.createElement('div');
    div.classList.add(type);

    if (type === 'post') {
      div.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
    } else if (type === 'todo') {
      div.innerHTML = `
        <input type="checkbox" ${data.completed ? 'checked' : ''}>
        <span>${data.title}</span>`;
    }

    return div;
  };
  return { createCard };
})();

// ---------- OBSERVER PATTERN ----------
const DataObserver = (() => {
  const subscribers = [];

  const subscribe = (fn) => subscribers.push(fn);
  const notify = (data) => subscribers.forEach(fn => fn(data));

  return { subscribe, notify };
})();

// ---------- API MODULE ----------
const ApiModule = (() => {
  const fetchData = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };
  return { fetchData };
})();

// ---------- MAIN CONTROLLER ----------
const MainController = (() => {
  // Subscribe UI updates
  DataObserver.subscribe((data) => {
    if (data.type === 'post') {
      const card = CardFactory.createCard('post', data);
      AppModule.postsContainer.appendChild(card);
    } else if (data.type === 'todo') {
      const card = CardFactory.createCard('todo', data);
      AppModule.todosContainer.appendChild(card);
    }
  });

  const loadBlog = async () => {
    const posts = await ApiModule.fetchData('https://jsonplaceholder.typicode.com/posts?_limit=5');
    posts.forEach(post => DataObserver.notify({ type: 'post', ...post }));
  };

  const loadTodos = async () => {
    const todos = await ApiModule.fetchData('https://jsonplaceholder.typicode.com/todos?_limit=5');
    todos.forEach(todo => DataObserver.notify({ type: 'todo', ...todo }));
  };

  // Event listeners
  document.getElementById('blogBtn').addEventListener('click', () => {
    AppModule.toggleSection(true);
  });

  document.getElementById('todoBtn').addEventListener('click', () => {
    AppModule.toggleSection(false);
  });

  // Initialize app
  const init = () => {
    loadBlog();
    loadTodos();
  };

  return { init };
})();

// ---------- Initialize the App ----------
MainController.init();
