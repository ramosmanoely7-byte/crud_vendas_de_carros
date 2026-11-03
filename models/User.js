import moongose from "mongoose"

const UserSchema = new moongose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        telefone: {
            type: String,
            trim: true,
            unique: true
        },

        idade: {
            type: Number,
            required: true
        },

        ativo: {
             type: Boolean,
            default: true
        },
    },
    {
        collectio: "users",
        timestamps: true
    }
)

export default moongose.model("User", UserSchema)

