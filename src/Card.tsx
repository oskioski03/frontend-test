export type CardProps = {
    id: number,
    name: string;
    email: string
}

export const Card = ({ id, name, email }: CardProps) => {
    return (
        <div style={{width: '200px', height: '200px', background: 'red'}} >
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}