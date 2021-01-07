import "./Title.styles.scss";

interface TitleProps {
  text: string;
}

const Title:React.FC<TitleProps> = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

export default Title;