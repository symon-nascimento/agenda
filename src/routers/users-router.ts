import express  from 'express' 
import bodyParser from 'body-parser';
import { createUser, getAllUsers,  getOnlyUser, UpdateUser,  deleteUser} from '../services/User'


const usersRouter = express.Router()
const jsonParse = bodyParser.json()


usersRouter.post('/users', jsonParse, async (req: any, res: any) => {
    const user = req.body
    const result  =  await createUser(user)
   
    result !== 'error' ? res.status(201).send('Usuário cadastrado com sucesso!') : res.status(501).send('Erro inesperado. Verifique os dados fornecidos!')
    
})

usersRouter.get('/users', async (req, res) => {
    const result = await getAllUsers()
 
    result !== 'error' ? res.status(201).json(result) : res.status(404).send('Erro inesperado. Verifique os dados fornecidos!')

})

// Continuar daqui
usersRouter.get('/users/:id', async (req, res) => {
    const id: number = +req.params.id
    const result = await getOnlyUser(id) 

    result !== 'error' ? res.status(201).json(result) : res.status(404).send('Erro inesperado. Verifique os dados fornecidos!')

})


usersRouter.put('/users/:id', jsonParse, async (req, res) => {
    const id: number = +req.params.id
    const user = req.body
    const result = await UpdateUser(id, user)

    result !== 'error' ? res.status(201).send('Usuário atualizado com sucesso!') : res.status(501).send('Erro inesperado. Verifique os dados fornecidos!')
})


usersRouter.delete('/users/:id', async (req, res) => {
    const id: number = +req.params.id
    const result = await deleteUser(id)
    
    result !== 'error' ? res.status(201).send('Usuário deletado com sucesso!') : res.status(501).send('Erro inesperado. Verifique os dados fornecidos!')
})
 
export default usersRouter