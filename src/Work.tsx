type workProps = {
    id: number;
    title: string;
    origin: string;
}

function Work(props: workProps) {
    return (
      <div className="Work">
        <p>Title: {props.title}</p>
        <p>Origin: {props.origin}</p>
      </div>
    );
  }

  export default Work;
