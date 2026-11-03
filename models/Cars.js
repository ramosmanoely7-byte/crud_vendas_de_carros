import moongose from "mongoose"

const CarSchema = new moongose.Schema(
    {
        modelo: {
            type: String,
            required: true,
            trim: true
        },
        
        marca: {
            type: String,
            required: true,
            trim: true
        },

        ano: {
            type: String,
            required: true,
            trim: true
        },

        preco: {
            type: Number,
            required: true,
        },

        placa: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            unique: true
        },

        disponivel: {
            type: Boolean,
            default: true
        },
    },
    {
        collection: "cars",
        timestamps: true
    }
)

export default moongose.model("Car", CarSchema)

