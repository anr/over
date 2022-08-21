type workProps = {
    id: number;
    title: string;
    origin: string;
}

function Work(props: workProps) {
    return (
      <ul>
        <li>Title: {props.title}</li>
        <li>Origin: {props.origin}</li>
      </ul>
    );
  }

  export default Work;
