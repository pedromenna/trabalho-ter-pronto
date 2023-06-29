import { Router } from "express"
import { usuarioAlteraSenha, usuarioCreate, usuarioIndex } from "./controllers/usuarioController.js"
import { festaCreate, festaDestroy, festaIndex } from "./controllers/festasController.js"
import { produtoraCreate, produtoraDestroy, produtoraIndex } from "./controllers/produtoraController.js"
import { loginUsuario } from "./controllers/loginController.js"
import { verificaLogin } from "./middlewares/verificaLogin.js"

const router = Router()

router.get('/usuarios', verificaLogin, usuarioIndex)
      .post('/usuarios', usuarioCreate)
      .put('/usuarios', usuarioAlteraSenha)

router.get('/festas', festaIndex)
      .post('/festas', festaCreate)
      .delete('/festas/:id', festaDestroy)

router.get('/produtora', produtoraIndex)
      .post('/produtora', produtoraCreate)
      .delete('/produtora/:id', verificaLogin, produtoraDestroy)

router.get('/login', loginUsuario)

export default router