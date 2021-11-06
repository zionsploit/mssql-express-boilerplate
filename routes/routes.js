import { Router } from "express"
import { controllers } from "../controllers/controllers"
const router = Router()

router.post('/', controllers)

//Set Your Routers Here
export default router