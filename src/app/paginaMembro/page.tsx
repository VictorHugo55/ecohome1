"use client";
import Image from "next/image";
import victor from "../../image/victor.jpg"
export default function PaginaMembros() {
    return (
        <div className="grow  flex flex-col justify-center items-center bg-gray-300">
            {/* Contêiner principal com fundo cinza */}
            <main className=" bg-gray-300">
                {/* Subcontêiner com fundo branco, sombra e bordas arredondadas */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* Título centralizado e com estilo personalizado */}
                    <h1 className="text-3xl font-bold text-limeGreen mb-4 text-center">MEMBROS</h1>
                </div>

                {/* Seção Pedro */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-black flex items-center">
                    <Image src={victor} alt="foto pedro" className="h-64 w-52 object-cover rounded-lg" />
                    <div className="ml-6">
                        <h1 className="text-xl font-semibold">
                            Nome: Victor Hugo Carvalho Pereira <br />RM: 558550 <br />Turma: 1tdspi
                        </h1>
                        <h2><br />LINK DO LINKEDIN <br /> <br /></h2>
                        <a href="https://www.linkedin.com/in/pedro-yokoo-36291a319/" className="bg-blue-200 shadow-lg rounded-lg border-2 border-black px-2 py-1">LINKEDIN</a>
                        <h2><br />LINK DO GITHUB <br /><br /> </h2>
                        <a href="https://github.com/VictorHugo55" className="bg-slate-300 shadow-lg rounded-lg border-2 border-black px-2 py-1">GIT HUB</a>
                    </div>
                </div>
            </main>
        </div>
    );
}