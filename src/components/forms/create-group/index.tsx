import { StripeElements } from "@/components/global/stripe/elements"
import PaymentForm from "./payment-form"

type Props = {
    userId: string
    affiliate: boolean
    stripeId?: string
}

const CreateGroupe = ({ affiliate, stripeId, userId }: Props) => {
    return (
        <StripeElements>
            <PaymentForm
                affiliate={affiliate}
                userId={userId}
                stripeId={stripeId}
            ></PaymentForm>
        </StripeElements>
    )
}

export default CreateGroupe
