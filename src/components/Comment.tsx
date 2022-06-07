import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setlikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    //SEMPRE QUE FOR ATUALIZAR UMA INFORMAÇÃO, E ELA DEPENDE DELA MESMO TEM QUE SER FEITO COM FUNÇÃO
    function handleLikeComment() {
        setlikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://tntsports.com.br/__export/1590485744009/sites/esporteinterativo/img/2020/05/26/cristiano-ronaldo-cinco-champions.jpg_423682103.jpg" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>William Klywerston</strong>
                            <time title='11 de junho às 8:16' dateTime='2022-06-08 09:52:23'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}