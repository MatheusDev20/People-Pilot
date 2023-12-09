export const CreatedMessage = ({
  createdId,
}: {
  createdId: string
}): JSX.Element => {
  return (
    <p>
      Registration ID:
      <span className="text-primary"> {createdId}</span>
    </p>
  )
}
