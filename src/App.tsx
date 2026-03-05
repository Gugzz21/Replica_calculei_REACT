import './App.css'
import Calcular from './components/Calcular'
import Header from './components/Header'
import Form from './components/Form'
import Data from './components/Data'
import Juros from './components/Juros'

function App() {
  return (
    // 1. Colocamos o bg-gray-100 e min-h-screen na div MAIS externa.
    // Agora o fundo da página inteira é cinza e ocupa a tela toda.
    <div className="flex flex-col items-center bg-gray-100 min-h-screen w-full">

      {/* O Header pode ter a cor que você quiser lá dentro do componente dele */}
      <Header />

      {/* 2. Removemos o bg-gray-100 daqui, pois o fundo de trás já é cinza.
             Mantivemos o padding para posicionar o seu texto. */}
      <div className="flex flex-col w-full pl-[350px] pt-[15px] pb-[15px]">
        <p className="text-[14px]">
          Todos os valores estão em Reais (R$) A presente calculadora virtual não substitui o cálculo realizado e homologado judicialmente.
        </p>
      </div>

      {/* 3. Aqui ficarão os seus componentes. Eles podem ter seus próprios fundos (como o bg-amber-100 do seu Form) */}
      <div className="flex flex-col justify-center items-center mt-10 gap-4">
        <Form />
        <Data />
        <Juros />
        <Calcular />
      </div>

    </div>
  )
}

export default App