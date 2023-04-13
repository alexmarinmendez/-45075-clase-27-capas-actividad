import { Router } from "express"
import { suma, resta, multiplicacion, division, lista } from '../controllers/operaciones.js'
const router = Router()

router.get('/suma', suma)
router.get('/resta', resta)
router.get('/multiplicacion', multiplicacion)
router.get('/division', division)
router.get('/lista', lista)

export default router