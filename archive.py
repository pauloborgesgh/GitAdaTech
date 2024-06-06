
num =  float(input('Digite um numero acima de 10.000'))
num2 = float(input('Digite um outro numero acima de 10.000:'))


def FunctionDivisao(num,num2):

    valor_final = (num + num2)/3

    if valor_final > 100000:
        print('Valor max:'+valor_final)
    else:    
        print('Valor min:'+valor_final)


   
    return print(valor_final)
