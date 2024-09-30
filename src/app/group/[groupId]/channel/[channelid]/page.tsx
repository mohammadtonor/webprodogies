import { onAuthenticatedUser } from "@/actions/auth"
import { onGetChannelInfo } from "@/actions/channels"
import { onGetGroupInfo } from "@/actions/groups"
import { currentUser } from "@clerk/nextjs/server"
import { QueryClient } from "@tanstack/react-query"

type Props = {
    params: { groupId: string; channelid: string }
}

const GroupChannelPage = async ({ params }: Props) => {
    const client = new QueryClient()
    const user = await currentUser()
    const authUser = await onAuthenticatedUser()

    await client.prefetchQuery({
        queryKey: ["channel-info"],
        queryFn: () => onGetChannelInfo(params.channelid),
    })

    await client.prefetchQuery({
        queryKey: ["about-group-info"],
        queryFn: () => onGetGroupInfo(params.groupId),
    })

    return <div>GroupChannelPage</div>
}

export default GroupChannelPage
