import { AppDataSource } from "../database/data-source"
import { User } from "../entity/User"

AppDataSource.initialize().then(async () => {
}).catch(error => console.log(error))

// Devolvendo todos os usuários
export const getAllUsers = async () => {
    let result: any
    let erro: boolean
 

    try {
        result = await AppDataSource.manager.find(User)

    } catch (error) {
        result = 'error'
    }
  
       return result
}

// Devolvendo um usuário
export const getOnlyUser = async (id: number) => {
    let result: any
    let erro: boolean

    try {
        result = await AppDataSource.manager.findOne(User, {
            where: {
                id: id,
            },
        })
    } catch (error) {
        
        console.log('ERRO NA PESQUISA UNUTÁRIA DE USUÁRIOS')
    }
    result == null ? result = 'error' : result = result
    return result
}

// Criando usuário
export const createUser = async (user: User) => {

    let result: any
    const newUser = new User()

    newUser.firstName = user.firstName
    newUser.lastName = user.lastName
    newUser.phoneNumber = user.phoneNumber
    newUser.street = user.street
    newUser.zipCode = user.zipCode

    try {
        await AppDataSource.manager.save(newUser)
    } catch (error) {
        result = 'error'
        console.log('Erro ao salvar o usuário: ', error)
    }

    return result
}

// Atualizando - CONTINUAR DAQUI
export const UpdateUser = async (id: number, user: User) => {
    let result: any

    try {
            await AppDataSource.manager.update(User, id, {
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            street: user.street,
            zipCode: user.zipCode
        })
    } catch (error) {
        result = 'error'
        console.log('Erro durante a atualização do usuário: ', error)
    }
  
    return result
}

    // Deletando um usuário
   export const deleteUser =  async(id: number) => {
    let result: any

        try {
        result =  await AppDataSource.manager.delete(User, id)
        } catch (error) {
            result = 'error'
            console.log('Erro ao deletar o usuário: ', error)
        }
 
        return result.affected === 1 ? result : 'error'
   } 







