import { useSelector } from 'react-redux';
import { selectAllTodos } from './features/TodosList/todosSlice';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

function App() {
  const todos = useSelector(selectAllTodos);
  const todoLength = todos.length;

  return (
    <>
      <section className='todoapp'>
        <Header />
        {todoLength > 0 && <Content />}
        {todoLength > 0 && <Footer />}
      </section>
      <footer className='info'>
        <p>Double-click to edit a todo</p>
        <p>
          Created by{' '}
          <a href='https://www.linkedin.com/in/haruki-nguyen-799b0a255/'>
            <b>Haruki Nguyen</b>
          </a>
        </p>
        <p>
          Part of <a href='http://todomvc.com'>TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
