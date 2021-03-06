import logoImg  from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onNewTransactionModalOpen: () => void;
}

export function Header({ onNewTransactionModalOpen }: HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button
                onClick={onNewTransactionModalOpen}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}