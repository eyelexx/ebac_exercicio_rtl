import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../Post';
import PostComment from '../PostComments';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

describe('Teste de criacao de comentarios', () => {
    it('Postagem de primeiro comentario', () => {
        render(<Post children={undefined} imageUrl={''} />)
        const inputComent = screen.getByTestId('comment-textarea')
        const postButton = screen.getByTestId('comment-button')

        fireEvent.change(inputComent, {
            target: {
                value: 'Que legal!'
            }
        })
        fireEvent.click(postButton)

        fireEvent.change(inputComent, {
            target: {
                value: 'Aguardando o próximo!'
            }
        })
        fireEvent.click(postButton)
        expect(screen.getAllByTestId('post-container').length).toBe(2)


    })
})