export default function Sobre() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-emerald-100 pt-28 pb-5 px-4">
            <main className="bg-white shadow-lg rounded-lg p-8 max-w-3xl border border-emerald-300">
                <h1 className="text-3xl font-bold mb-6 text-center text-emerald-700">Sobre a EcoHome</h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    A <span className="font-semibold text-emerald-700">EcoHome</span> é um projeto que busca unir tecnologia e sustentabilidade para promover
                    hábitos mais conscientes e um impacto positivo no meio ambiente. Nosso objetivo é ajudar
                    pessoas e empresas a monitorarem e reduzirem suas pegadas ecológicas, contribuindo para
                    um futuro mais verde.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Missão</h2>
                <p className="text-gray-700 mb-4">
                    Nossa missão é simplificar o acesso a soluções sustentáveis, criando ferramentas digitais
                    que empoderem indivíduos e organizações a adotarem práticas mais responsáveis e a
                    gerenciarem recursos de forma eficiente.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Visão</h2>
                <p className="text-gray-700 mb-4">
                    Ser referência no desenvolvimento de plataformas tecnológicas que impulsionem a sustentabilidade, conectando pessoas a um estilo de vida mais equilibrado e amigável ao planeta.
                </p>

                <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Valores</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><span className="font-semibold">Sustentabilidade:</span> Compromisso com práticas ecológicas e redução de impactos ambientais.</li>
                    <li><span className="font-semibold">Inovação:</span> Uso de tecnologia de ponta para criar soluções práticas e acessíveis.</li>
                    <li><span className="font-semibold">Educação:</span> Fomentar a conscientização e compartilhar conhecimento sobre sustentabilidade.</li>
                    <li><span className="font-semibold">Colaboração:</span> Construir comunidades unidas em torno de um objetivo comum: proteger o planeta.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-emerald-600">Por que a EcoHome?</h2>
                <p className="text-gray-700 leading-relaxed">
                    Acreditamos que pequenas ações podem gerar grandes mudanças. A EcoHome é mais do que
                    uma plataforma: é um movimento para transformar hábitos e criar uma cultura de
                    responsabilidade ambiental. Junte-se a nós nessa jornada rumo a um futuro sustentável.
                </p>

                <div className="mt-8 text-center">
                    <a
                        href="/"
                        className="inline-block bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-600 transition">
                        Voltar para a página inicial
                    </a>
                </div>
            </main>
        </div>
    );
}
