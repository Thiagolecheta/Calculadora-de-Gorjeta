function clicou(n){
   

    let valorConta = parseFloat(document.querySelector('#bill').value)
    let pessoa = parseInt(document.querySelector('#people').value)

    let valorGorjeta = document.querySelector('.valueTip1')
    let valorTotalPessoa = document.querySelector('.valueTip2')
    let valorTotal = document.querySelector('.valueTip3')
    


    if(valorConta == '' || pessoa == ''){
        alert('Erro')
    } else {

            let resultado = (n / 100) * valorConta
            valorGorjeta.innerHTML = `R$${resultado},00`

            let total = resultado + valorConta
            valorTotal.innerHTML = `R$${total},00`

            let valorPessoa = total / pessoa
            valorTotalPessoa.innerHTML = `R$${valorPessoa},00`
            
        }
    
    }


    


    function redefinir(){
        let valorGorjeta = document.querySelector('.valueTip1').innerHTML = `R$ 0.00`
        let valorTotalPessoa = document.querySelector('.valueTip2').innerHTML = `R$ 0.00`
        let valorTotal = document.querySelector('.valueTip3').innerHTML = `R$ 0.00`
        let valorConta = document.querySelector('#bill').innerHTML = ''




    }




