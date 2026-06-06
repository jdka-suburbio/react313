import Header from "../components/Header";

function Home() {
  return (
    <div>
        <Header />  
        <div className="home">
        <h2>Welcome to the Home Page</h2>
        <p>This is the main content of the home page.</p>
        </div>
    </div>
  );
}

export default Home;