import { useState, useEffect } from 'react'
import './App.css'
import ProblemSolutionFlow from './components/ProblemSolutionFlow';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex justify-between items-center">
          <div className="logo-text">AGENTE MARF</div>
          <nav>
            <a 
              href="https://aiconsultancy.chat.blip.ai/?appKey=Y29udHJhY3RhaTpmMTY2NzRhZC0yYzEyLTRlNDctYjM1ZS00MTkzZmIzZmQxMWY=&_gl=1*1ryy7l0*_gcl_au*MTIwMTk5MzY5MS4xNzY0MjYyMTgw*_ga*MjA2NzU3ODg4NS4xNzY0MDAzMjA4*_ga_8GVWK8YMGL*czE3NjQzMDA1ODEkbzEwJGcxJHQxNzY0MzAwNjQ0JGo1JGwwJGgyMDEzNjIyNzcz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-btn"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Acessar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container flex items-center justify-between mobile-col">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Contratos em segundos,<br/>
              <span className="text-blue">sem enrolação.</span>
            </h1>
            <p className="hero-subtitle delay-100 animate-fade-in">
              O agente inteligente que revoluciona a extração de contratos na Blip.
              Mais agilidade, menos burocracia.
            </p>
            <button 
              className="btn-primary delay-200 animate-fade-in"
              onClick={() => document.getElementById('transformation').scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </button>
          </div>
          <div className="hero-image delay-300 animate-fade-in">
            <img src="/assets/marf-full-body-v3.png" alt="MARF Character Full Body" />
          </div>
        </div>
      </section>

      {/* Problem Section (Before) */}
      <section className="problem bg-gray py-20">
        <div className="container">
          <h2 className="section-title text-center">O Desafio Anterior</h2>
          <p className="section-desc text-center">
            Antes do MARF, o processo de obtenção de contratos era manual, lento e suscetível a erros.
          </p>
          
          <div className="cards-grid">
            <div className="card">
              <h3>⏳ Lentidão</h3>
              <p>Colaboradores precisavam solicitar contratos a outro setor manualmente, aguardando dias por respostas.</p>
            </div>
            <div className="card">
              <h3>😫 Desgaste</h3>
              <p>Processo repetitivo e burocrático que consumia tempo valioso das equipes criativas e estratégicas.</p>
            </div>
            <div className="card">
              <h3>📉 Ineficiência</h3>
              <p>Gargalos operacionais que atrasavam tomadas de decisão importantes para o negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (After) */}
      <section id="transformation" className="solution py-20">
        <div className="container">
          <h2 className="section-title text-center text-blue">A Transformação MARF</h2>
          <p className="section-desc text-center">
            Do caos manual à clareza automatizada.
          </p>

          <ProblemSolutionFlow />

          <div className="solution-content-wrapper">
            <p className="solution-text">
              O MARF transformou completamente a forma como a Blip lida com extração e consulta de contratos. Antes, colaboradores precisavam navegar por pastas, documentos e processos manuais que consumiam tempo, geravam retrabalho e aumentavam o risco de erros. Agora, com a inteligência artificial do MARF, todo o fluxo se torna automático, rápido e estruturado: o agente localiza documentos, interpreta informações essenciais, organiza dados relevantes e disponibiliza tudo de forma clara e imediata. O resultado é um ambiente mais eficiente, com decisões mais rápidas, equipes focadas em tarefas estratégicas e um processo de gestão contratual moderno, confiável e totalmente automatizado.
            </p>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="icon-check">✓</span>
                <strong>Automação Instantânea</strong>
              </div>
              <div className="benefit-item">
                <span className="icon-check">✓</span>
                <strong>Foco Estratégico</strong>
              </div>
              <div className="benefit-item">
                <span className="icon-check">✓</span>
                <strong>Inteligência Artificial</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p>&copy; 2025 Blip. Todos os direitos reservados.</p>
          <p className="footer-note">MARF - Bot Extrator de Contratos</p>
        </div>
      </footer>
    </div>
  )
}

export default App
