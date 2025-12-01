import React from 'react';
import './ContractsTable.css';

const contractsData = [
  {
    "nome": "SaaS_CRM_Pro 2024/2025",
    "fornecedor": "Solutions Beta S/A",
    "responsavel": "João Silva"
  },
  {
    "nome": "Aluguel_Office 2024/2027",
    "fornecedor": "Global Properties",
    "responsavel": "Maria Souza"
  },
  {
    "nome": "Consultoria_SEO 2024",
    "fornecedor": "Marketing Agile Ltda",
    "responsavel": "Pedro Mendes"
  },
  {
    "nome": "Licencas_DB_SQL 2025",
    "fornecedor": "Data Systems Corp",
    "responsavel": "Lucas Oliveira"
  },
  {
    "nome": "Suporte_Network 2024/2026",
    "fornecedor": "Tech Infra Ltd",
    "responsavel": "João Silva"
  },
  {
    "nome": "Transporte_Logistico 2024",
    "fornecedor": "Rapid Cargo",
    "responsavel": "Patricia Alves"
  },
  {
    "nome": "Leasing_Servers 2024/2028",
    "fornecedor": "Hardware Rent",
    "responsavel": "Lucas Oliveira"
  },
  {
    "nome": "Ferramenta_Analytics 2025",
    "fornecedor": "Insights Hub",
    "responsavel": "Ricardo Rocha"
  },
  {
    "nome": "Treinamento_Compliance 2024",
    "fornecedor": "Compliance Expert",
    "responsavel": "Maria Souza"
  },
  {
    "nome": "Manutencao_Eletrica 2024/2025",
    "fornecedor": "Energy Fix",
    "responsavel": "Pedro Mendes"
  }
];

const ContractsTable = () => {
  return (
    <section className="contracts-section py-20">
      <div className="container">
        <h2 className="section-title text-center text-blue">Contratos Disponíveis</h2>
        <p className="section-desc text-center">
          Utilize os dados abaixo para realizar consultas e testar o agente MARF.
        </p>
        
        <div className="table-container">
          <table className="contracts-table">
            <thead>
              <tr>
                <th>Nome do Contrato</th>
                <th>Fornecedor</th>
                <th>Responsável</th>
              </tr>
            </thead>
            <tbody>
              {contractsData.map((contract, index) => (
                <tr key={index}>
                  <td data-label="Nome">{contract.nome}</td>
                  <td data-label="Fornecedor">{contract.fornecedor}</td>
                  <td data-label="Responsável">{contract.responsavel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ContractsTable;
