import { ListaProdutos } from "../../components/ListaProdutos";

export default function Produtos() {

  return (
    <>
        <div>

            <h1>PRODUTOS</h1>

            <table className="tabelaProd">
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th>PREÇO</th>
                </tr>

            {ListaProdutos.map( (prod, i)=> (
                <tr key={i}>

                    <td>{prod.id}</td>
                    <td>{prod.nome}</td>
                    <td>{prod.desc}</td>
                    <td>{prod.preco}</td>

                </tr>
            ))}
            </table>

        </div>
    
    </>
  )
}
