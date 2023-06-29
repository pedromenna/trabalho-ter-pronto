import { sequelize } from '../databases/conecta.js'
import { Festas } from '../models/Festas.js';
import { Produtora } from '../models/Produtora.js';
import { Log } from '../models/Log.js'
import { Usuario } from '../models/Usuario.js'

export const festaIndex = async (req, res) => {

  try {
    const festas = await Festas.findAll({
      include: Produtora
    });
    res.status(200).json(festas)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const festaCreate = async (req, res) => {
  const { nome, artista, produtora_id } = req.body

  // se não informou estes atributos
  if (!nome || !artista || !produtora_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const festas = await Festas.create({
      nome, artista, produtora_id
    });
    res.status(201).json(festas)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const festaDestroy = async (req, res) => {
  const { id } = req.params
  const user_logado_id = req.user_logado_id

  try {
    await Festas.destroy({ where: { id } });

    await Log.create({
      descricao: "Exclusão da Festa " + id,
      usuario_id: user_logado_id
    })

    res.status(200).json({ msg: "Ok! Removido com Sucesso" })
  } catch (error) {
    res.status(400).send(error)
  }
}
