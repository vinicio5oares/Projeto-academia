import { Menu, User } from "lucide-react";
import "../style/AvaliacaoFisicaAluno.css";
import FooterAluno from "../components/FooterAluno";



export default function AvaliacaoFisicaAluno() {
  const ficha = {
    sexo: "M",
    idade: 30,
    peso: 89,
    estatura: 1.87,
    gorduraAtual: 22,
    gorduraIdeal: 15,
  };

  const perimetros = {
    torax: 43,
    abdomem: 54,
    anteBracoDir: 45,
    bracoDireito: 67,
    coxaDir: 34,
    panturrilhaDir: 34,
    cintura: 67,
    quadril: 45,
    anteBracoEsq: 45,
    bracoEsq: 67,
    coxaEsq: 98,
    panturrilhaEsq: 34

  };

  const dobrasCultaneasMasc = {
    torax:43,
    abdomen: 54,
    coxa: 98,

  };
  const dobrasCultaneasFem = {
    triceps:43,
    supraIliaca: 54,
    coxa: 98,

  };

  const bioImpedancia = {
    peso: 89,
    estatura: 1.89,
    bioResistencia: 34,
    gorduraDesejavel:15,
    massaMagra:45,
    gordura:44,
    pesoDesejavel:79,
    porcentGorduraAtual:19,
    valCaloricoAtual: 2334,
    metabolismoBasal: 4342,
    valorSugeridoDoCardapio: 3242,
  }

  return (
    // card dados do aluno

    <div>

          {/* Topo */}
        <header className="Header">
            <div className="HeaderPag">
            <User size={26} />
            <span>Olá, Jorge</span>
            </div>
            <Menu size={28} />
        </header>

      {/* Titulo */}
      <h2 className="TituloPag">
        Avaliação Fisica
      </h2>




        <div className="cardDadosAluno">
        <div className="lado-esquerdo">
            <p>Sexo: {ficha.sexo}</p>
            <p>Idade: {ficha.idade}</p>
            <p>Peso: {ficha.peso}</p>
            <p>Estatura: {ficha.estatura}</p>
        </div>

        <div className="divisor"></div>

        <div className="lado-direito">
            <p>Gordura atual: {ficha.gorduraAtual}%</p>
            <p>Gordura ideal: {ficha.gorduraIdeal}%</p>
        </div>
        </div>
           {/* FIM card dados do aluno */}


        {/* card perimetros */}
        <div className="cardPerimetrosAluno">

            <h1>Perimetros(cm)</h1>
            <div className="lado-esquerdo">
                <p>Torax: {perimetros.torax} </p>
                <p>Abdomem: {perimetros.abdomem}</p>
                <p>Ante-Braco Direito: {perimetros.anteBracoDir}</p>
                <p>Braco Direito: {perimetros.bracoDireito}</p>
                <p>Coxa Direita: {perimetros.coxaDir}</p>
                <p>Panturrilha Direita: {perimetros.panturrilhaDir}</p>
            </div>

            <div className="divisor"></div>

            <div className="lado-esquerdo">
                <p>Cintura: {perimetros.cintura} </p>
                <p>Quadril: {perimetros.quadril}</p>
                <p>Ante-Braco Esquerdo: {perimetros.anteBracoEsq}</p>
                <p>Braco Esquerdo: {perimetros.bracoEsq}</p>
                <p>Coxa Esquerda: {perimetros.coxaEsq}</p>
                <p>Panturrilha Esquerda: {perimetros.panturrilhaEsq}</p>
            
            </div>
  

        </div >
         {/* FIM card perimetros */}

        <div className="cardDobrasCultaneas">
            <h1>Dobras Cultaneas </h1>
                {/* masculino */}
            <div className="ladoEsquerdo">
                <p>Torax:43, {dobrasCultaneasMasc.torax} </p>
                <p>Abdomen: {dobrasCultaneasMasc.abdomen} </p>
                <p>Coxa: {dobrasCultaneasMasc.coxa},</p>
            </div>

                {/* feminino */}
            <div className="ladoDireito">

                <p>Triceps {dobrasCultaneasFem.triceps} </p>
                <p>Supra Iliaca {dobrasCultaneasFem.supraIliaca} </p>
                <p>Coxa {dobrasCultaneasFem.coxa} </p>

            </div>

        </div>

        <div className="cardBioImpedancia">

            <p>Peso {bioImpedancia.peso} </p>
            <p>Estatura {bioImpedancia.estatura}</p>
            <p>Bio Resistencia {bioImpedancia.bioResistencia}</p>
            <p>Gordura Desejavel {bioImpedancia.gordura}</p>
            <p>Massa Magra {bioImpedancia.massaMagra}</p>
            <p>Gordura {bioImpedancia.gordura}</p>
            <p>Peso Desejavel {bioImpedancia.peso}</p>
            <p>Porcentagem Gordura Atual {bioImpedancia.porcentGorduraAtual}</p>
            <p>Valr Calorico Atual  {bioImpedancia.valCaloricoAtual}</p>
            <p>Metabolismo Basal {bioImpedancia.metabolismoBasal}</p>
            <p>Valor Sugerido Do Cardapio {bioImpedancia.valorSugeridoDoCardapio}</p>


        </div>


        {/* RODAPÉ */}
      <FooterAluno />

      
    </div>

        




  );
}