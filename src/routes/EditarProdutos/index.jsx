// import { useParams } from "react-router-dom";

export default function EditarProdutos() {

    document.title = "Editar Produtos"

    //Recuperando o id do produto com o HOOK useParam();
    // const {id} = useParams();

    return (<>
    <div>
        <h1>EDITAR PRODUTOS</h1>
        <form action="#" method="get">
            <fieldset>
                <legend>EDITAR PRODUTO</legend>

                <div>
                    <label htmlFor="idNmProduto">Nome: </label>
                    <input type="text" name="nome" id="idNmProduto"/>
                </div>
                <div>
                    <label htmlFor="idVlProduto">Preço: </label>
                    <input type="text" name="valor" id="idVlProduto"/>
                </div>

                <div>
                    <button>EDITAR</button>
                </div>
            </fieldset>
        </form>
    </div>
    </>)
}
