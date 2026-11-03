import User from "../models/User.js"

const createUser = async (data) => {
    const { nome, email, telefone, idade } = data

    if (!nome || !email) {
        const error = new Error("Nome e email são obrigatórios")
        error.statusCode = 400
        throw error
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error("Email já utilizado")
        error.statusCode = 400
        throw error
    }

    const user = await User.create({
        nome,
        email,
        idade,
        telefone
    })

    return {
        _id: user._id,
        nome: user.nome,
        email: user.email,
        idade: user.idade,
        telefone: user.telefone,
        createdAt: user.createdAt,
        updateAt: user.updateAt
    }
}
const getAllUser = async () => {
    return User.find()
}

const getUserById = async (id) => {
    const user = await User.findById(id);

    if (!user) {
        const error = new Error("Usuario não encontrado")
        error.statusCode = 404
        throw error
    }

    return user
}

const searchUserByName = async (name) => {
    const users = User.find({
        nome: { $regex: name, $options: "i" }
    })

    return users
}

const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id)

    if (!user) {
        const error = new Error("Usuario não encontrado")
        error.statusCode = 404
        throw error
    }

    return user
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email })

    if (!user) {
        const error = new Error("Usuario não encontrado")
        error.statusCode = 404
        throw error
    }

    return user

}
const updateUser = async (id, data) => {
    const user = await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!user) {
        const error = new Error("Usuario não encontrado")
        error.statusCode = 404
        throw error
    }

    return user
}

const countUsers = async () => {
    const user = await User.countDocuments()

}

export default {
    createUser,
    getAllUser,
    getUserById,
    searchUserByName,
    deleteUser,
    getUserByEmail,
    updateUser,
    countUsers,
}