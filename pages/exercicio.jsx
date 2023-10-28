export default function exercicio() {
    return (
        <div>
            <h1>Cadastro de produtos</h1>
            <label for="produto">Nome do Produto:</label>
            <input type="text" id="produto" name="produto" placeholder="Digite o nome do produto"></input>

            <div>
                <label for="descricao">Descrição do Produto:</label>
                <textarea id="descricao" name="descricao" placeholder="Digite a descrição do produto"></textarea>
            </div>

            <div>
                <label for="preco">Preço do Produto:</label>
                <input type="number" id="preco" name="preco" placeholder="Digite o preço do produto" step="0.01"></input>
            </div>

            <div>
                <label for="categoria">Categoria do Produto:</label>
                <select name="categoria" id="categoria">
                    <option value="Eletronicos">Eletrônicos</option>
                    <option value="Roupas">Roupas</option>
                    <option value="Alimentos">Alimentos</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>
            
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
        </div>
    )
}