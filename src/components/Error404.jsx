import errorImage from '../img/smiley-x-eyes-bold.svg';

export default function Error404() {
    return (
        <main className="error-main">
            <img src={errorImage} alt="Emoji " />
            <h1>ERROR 404</h1>
            <h3>Oops, não encontramos essa página!</h3>
        </main>
    )
}