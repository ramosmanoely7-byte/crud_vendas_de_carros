import moongose, { STATES } from "mongoose"

const SaleSchema = new moongose.Schema(
    {
        userId: {
            type: moongose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        
        carId: {
            type: moongose.Schema.Types.ObjectId,
            ref: "Car",
            required: true
        },

        valorVenda: {
            type: Number,
            required: true
        },

        formaPagamento: {
            type: String,
            required: true,
            enum: ["pix", "cartao", "boleto", "dinheiro", "financiamento"]
        },

        dataVenda: {
            type: Date,
            required: STATES,
            default: Date.now 
        },

        status: {
            type: String,
            enum: ["pendente", "paga", "cancelada"],
            default: "paga"
        },
    },
    {
        collection: "sales",
        timestamps: true
    }
)

export default moongose.model("Sale", SaleSchema)
