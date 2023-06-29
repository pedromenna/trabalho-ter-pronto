import { Log } from '../models/Log.js'
import { Produtora } from '../models/Produtora.js'
import { Usuario } from '../models/Usuario.js'

export const produtoraIndex = async (req, res) => {
  try {
    const produtoras = await Produtora.findAll({ include: Usuario })
    res.status(200).json(produtoras)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const produtoraCreate = async (req, res) => {
  const { nome, cnpj, usuario_id } = req.body

  // se não informou estes atributos
  if (!nome || !cnpj || !usuario_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const produtora = await Produtora.create({
      nome, cnpj, usuario_id
    });
    res.status(201).json(produtora)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const produtoraDestroy = async (req, res) => {
  const { id } = req.params
  // obtém dados acrescentados no middleware verificaLogin (ao req)
  const user_logado_id = req.user_logado_id

  try {
    await Produtora.destroy({ where: { id } });

    // registra um log desta exclusão
    await Log.create({
      descricao: "Exclusão da Produtroa " + id,
      usuario_id: user_logado_id
    })

    res.status(200).json({ msg: "Ok! Removido com Sucesso" })
  } catch (error) {
    res.status(400).send(error)
  }
}
