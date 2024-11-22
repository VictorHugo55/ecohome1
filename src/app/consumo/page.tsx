import { consumoData } from '../../api/consumo';
export default function Consumo(){
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
        
            <main className="grow flex flex-col  justify-center container mx-auto p-8">
                <h2 className="text-3xl font-semibold text-center text-green-700">Dashboard de Consumo</h2>
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700">Consumo de Energia</h3>
                    <p className="text-gray-600">Consumo Atual: {consumoData.mes_atual.consumo_kwh} kWh</p>
                    <p className="text-gray-600">Custo Estimado: R${consumoData.mes_atual.custo_estimado}</p>
                    <h4 className="mt-6 text-lg font-semibold text-gray-700">Comparação com o Mês Anterior</h4>
                    <p className="text-gray-600">Consumo Anterior: {consumoData.mes_anterior.consumo_kwh} kWh</p>
                    <p className="text-gray-600">Custo Estimado Anterior: R${consumoData.mes_anterior.custo_estimado}</p>
                </div>
            </main>
      
        </div>
    );
};  