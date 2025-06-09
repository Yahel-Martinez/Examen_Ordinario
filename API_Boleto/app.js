const express= require('express')
const app =express()
const port = 3000

app.listen(port, () => {
    console.log('Servidor Iniciado')
})

app.get('/boleto/:cantidad/:dia/:fila');
(req,res)=>{
    const {cantidad,dia,fila}=
    req.params;
    if(dia<1 || dia>3){
        res.sendStatus(400);
    }
    if(fila<1 || dia>4){
        res.sendStatus(400);
    }
    if(cantidad>1){
        res.sendStatus(400);
    }

    let precioBoleto, descuentoDia=0, descuentoCant=0;
    switch(fila){
        case '1':
            if (dia==3){
                descuentoDia = 300*0.16;
                precioBoleto=300-descuentoDia;

            }
            else{
                precioBoleto=300;
            }break;

    case '2':
        if(dia==3){
            descuentoDia=490*0.16;
            precioBoleto=490-descuentoDia;
        }else{
            precioBoleto=490;
        }break;
    case '3':
        if (dia==3){
            descuentoDia=670*0.16;
            precioBoleto = 670 - descuentoDia;
        }else{               
               precioBoleto=670;                                                                                                                                                          preci                                            
        }break;

        case '4':
            if (dia==3){
                descuentoDia=899*0.16;
                precioBoleto = 899 - descuentoDia;
            }else{               
                   precioBoleto=899;                                                                                                                                                          preci                                            
            }break;
    
    }

    precioTotal = precioBoleto* cantidad;

    if(cantidad > 1){
        descuentoCant = precioTotal*0.05;
    }
    precioTotal = precioTotal-descuentoCant;

    const data ={
        cantidad,
        dia,
        fila,
        descuentoCant,
        descuentoDia,
        precioBoleto,
        precioTotal
    };
    res.send(data);
}