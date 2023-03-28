import './Content.css';

const Content = ({ children }) => {
  return (
    <main  data-testid="content" className="app-main">
      <div className="app-main-inner">
        {children}
      </div>
    </main>
  );
}

export default Content;
