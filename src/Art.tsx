import React from 'react';
import Work from './Work'

interface ArtData {
    id: number;
    title: string;
    place_of_origin: string;
}

function getArt(): Promise<ArtData[]> {
    return fetch("https://api.artic.edu/api/v1/artworks")
        .then(res => {
            if (!res.ok) {
                throw Error(`Fetch error, status: ${res.status}`);
            }

            return res;
        })
        .then(res => res.json())
        .then<ArtData[]>(res => res.data)
}

type ArtProps = {}

type ArtState = {
    data?: ArtData[];
}

class Art extends React.Component<ArtProps, ArtState> {
    constructor(props: ArtProps) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        getArt().then(res => {
            this.setState({ data: res });
        });
    }

    render() {
        const data = this.state.data;

        // if (data) {
        //     console.log(`data[0] is ${JSON.stringify(data[0], null, 2)}`);
        // }

        return (
            <div className="Art">
                {
                    data
                    ? data.map((e, i) =>
                        <div className='work' key={i}>
                            <Work
                                id={e.id}
                                title={e.title}
                                origin={e.place_of_origin}
                            />
                        </div>
                    )
                    : <p>Loading...</p>
                }
            </div>
        );
    }
}

export default Art;
