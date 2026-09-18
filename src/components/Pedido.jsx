import { useState } from "react"

//Arrat de objetos contendo o estado inicial do cardapio
const cardapio=[
    {id:1,nome:"Combo-01",preco:25.00,disponivel:true,quantidade:0},
    {id:2,nome:"Combo-02",preco:35.00,disponivel:true,quantidade:0},
    {id:3,nome:"Combo-03",preco:40.00,disponivel:false,quantidade:0},
    {id:4,nome:"Combo-04",preco:65.00,disponivel:true,quantidade:0},
]

const Pedido = () => {
    //HOOK- useState- Manipula o estado da variavel
    //Estado para gerenciar a lista de itens de cardapio

    const[itens, setItens]=useState(cardapio);
    const[status, setStatus]=useState("");
    const[enviar, setEnviar]=useState(false);

    //Valor fixo adicionado ao total quando tiver itens no carrinho (taxa de entrega)

    const taxaEntrega=5.00;

    //função que altera a quantidade do pedido
    const AlterarQuantidade=(id,valor)=>{
        setItens(alt =>
            //MAP: cria um novo array e percorre os items sem modificar o original (IMUTABILIDADE)
            alt.map(item=>
                //TERNARIO: verifica se o item da interação atual é o que deve ser alterado
                //APREAD (...item): manter os valores antigos e adiciona os novos
                //MATH.MAX: objeto que garante que a quantidade nunca seja menor que 0
                item.id === id ? {...item, quantidade: Math.max(0,item.quantidade + valor)}:item
            )
        )
    }

    //FILTER: seleciona apenas os produtos disponic=veis no carrinho
    const produtosDisponiveis = item.filter(item=>item.disponiver);
    const carrinho = item.flter(item=>item.quantidade>0);

    //REDUCE: calcula a soma dos items (preco + quantidade) e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((ac,item)=> ac + item.preco * item.quantidade);
    const total = subTotal >0 ? subTotal + taxaEntrega: 0;

    //Somulação do ciclo de vida de da entrega usando temporizador ASSINCRONO
    const ConfirmarPedido=()=>{
        setEnviar(true);
        setStatus("Restaurante Confirmou pagamento, preparando pedido");
        setTimeout(()=>{
            setStatus("Seu pedido saiu para entrega")
            setEnviar(false)
        },5000)
        setTimeout(()=>{
            setStatus("Seu pedido foi entregue!")
            setEnviar(false)
        },10000)
    }


  return (
    <>
      
    </>
  )
}

export default Pedido
