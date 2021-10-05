import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data));
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 2.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento mobile</td>
                        <td className="withdraw">- R$ 4.000,00</td>
                        <td>Mobile</td>
                        <td>10/04/2021</td>
                    </tr>                    
                </tbody>
            </table>
        </Container>
    );
}