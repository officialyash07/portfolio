import { About, Header, Hero, Services, Skills, Projects } from './components/index';

function App() {
    return (
        <div className="body-app">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Skills />
                <Projects />
            </main>
        </div>
    );
}

export default App;
