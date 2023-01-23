import { useEffect } from "react";
import { useState } from "react";
import Api from "../../service";
import { BoxLeft, BoxRight, Container, Form } from "./style";

export default function Calculator() {

    const [amount, setAmount] = useState(0)
    const [installments, setInstallments] = useState(0)
    const [mdr, setMdr] = useState(0)

    Api.amount = amount
    Api.installments = installments
    Api.mdr = mdr

    const [cost, setCost] = useState(0)
    const [cost90, setcost90] = useState(0)
    const [cost30, setCost30] = useState(0)
    const [cost15, setCost15] = useState(0)

    useEffect(() => {

        if (installments > 0 && mdr > 0 && amount > 0) {
            const percentage = mdr / 100
            const valuePerInstallments = amount / installments
            const tax = (valuePerInstallments * percentage)
            setCost(valuePerInstallments - tax)
            setcost90(valuePerInstallments - (tax * 3))
            setCost30(valuePerInstallments - (tax * 2))
            setCost15(valuePerInstallments - (tax * 1.5))
        }

    }, [amount, installments, mdr, cost])

    return (
        <Container>
            <BoxLeft>
                <h1>Simule sua Antecipação</h1>
                <Form>
                    <label htmlFor="venda">Informe o valor da venda *</label>
                    <input min='1' type="text" id="venda" value={amount} onChange={event => setAmount(event.target.value)} />

                    <label htmlFor="parcelas">Em quantas parcelas *</label>
                    <input min='1' max='12' type="text" id="parcelas" value={installments} onChange={event => setInstallments(event.target.value)} />
                    <span>Máximo de 12 parcelas</span>

                    <label htmlFor="mdr">Informe o percentual de MDR *</label>
                    <input type="text" id="mdr" value={mdr} onChange={event => setMdr(event.target.value)} />
                </Form>
            </BoxLeft>
            <BoxRight>
                <h1>Você Receberá:</h1>
                <span>Amanhã:<b>R$ {cost.toFixed([2])}</b></span>
                <span>Em 15 dias: <b>R$ {cost15.toFixed([2])}</b></span>
                <span>Em 30 dias: <b>R$ {cost30.toFixed([2])}</b></span>
                <span>Em 90 dias: <b>R$ {cost90.toFixed([2])}</b></span>

            </BoxRight>
        </Container>
    )
}
