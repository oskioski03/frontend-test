export type CardProps = {
    id: string,
    name: string;
    surname: string
}

export const Card = ({ id, name, surname }: CardProps) => {
    return (
        <div style={{width: '200px', height: '200px', background: 'red'}} >
            <p>{id}</p>
            <p>{name}</p>
            <p>{surname}</p>
        </div>
    )
}