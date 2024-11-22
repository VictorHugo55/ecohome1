"use client";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState(""); // Para exibir mensagens de erro
    const [mensagemSucesso, setMensagemSucesso] = useState(""); // Para exibir mensagens de sucesso

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const resposta = await fetch("http://localhost:8080/cadastro/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            if (!resposta.ok) {
                const textoErro = await resposta.text();
                setMensagemErro(textoErro);
                console.error("Erro no login:", textoErro);
                return;
            }

            const dados = await resposta.json();
            console.log("Usuário autenticado:", dados);

            setMensagemSucesso("Login realizado com sucesso!");
        } catch (erro) {
            console.error("Erro ao fazer a requisição:", erro);
            setMensagemErro("Erro inesperado ao realizar o login. Tente novamente.");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-100">
            <main className="bg-white shadow-lg rounded-lg p-8 w-96 border border-emerald-300">
                <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Login</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-emerald-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            className="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                    </div>

                    <div>
                        <label
                            htmlFor="senha"
                            className="block text-sm font-medium text-emerald-700 mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                            className="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-600 transition">
                        Entrar
                    </button>
                </form>

                {mensagemErro && (
                    <p className="text-red-500 text-sm mt-4 text-center">{mensagemErro}</p>
                )}

                {mensagemSucesso && (
                    <p className="text-green-500 text-sm mt-4 text-center">{mensagemSucesso}</p>
                )}

                <p className="text-sm text-emerald-700 text-center mt-4">
                    Não tem uma conta?{" "}
                    <a href="/cadastro" className="text-emerald-600 hover:underline">
                        Cadastre-se
                    </a>
                </p>

                {/* Botões de navegação para as páginas de atualização e exclusão */}
                <div className="mt-4 flex flex-col space-y-4">
                    <a
                        href="/atualizar"
                        className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition text-center">
                        Atualizar Dados
                    </a>

                    <a
                        href="/deletar"
                        className="w-full bg-red-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition text-center">
                        Deletar Conta
                    </a>
                </div>
            </main>
        </div>
    );
}    