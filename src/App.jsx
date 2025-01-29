import { About, Header, Hero } from './components/index';

function App() {
    return (
        <div className="body-app">
            <Header />
            <main>
                <Hero />
                <About />
            </main>
        </div>
    );
}

export default App;
