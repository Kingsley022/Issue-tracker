import { Status } from "@prisma/client"
import { Badge } from "@radix-ui/themes"

interface Props{
    status: Status
}

const statusMap: Record<Status, { label: string, color: 'red' | 'violet' | 'green'}> = {
    OPEN: {label: "Open", color: "red"},
    IN_PROGRESS: {label: "In Progress", color: "violet"},
    CLOSED: {label: "Closed", color: "green"}
}

const IssuesStatusBadge = ({status}:Props) => {
  return (
    <Badge color={statusMap[status].color}>
        {status}
    </Badge>
  )
}

export default IssuesStatusBadge