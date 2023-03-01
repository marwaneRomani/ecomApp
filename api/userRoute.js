import UserService from "../services/userService.js";

export default app => {

    const userService = new UserService();

    app.post("/users/register", async (req, res, next) => {
        try {
            const { login, password } = req.body;
            let result = await userService.registerUser({ login, password });
            
            console.log(result);
            res.status(200).send({ message: "registered" })
        } catch (error) {
            console.log("run here")
            next(error);
        }
    })

    app.post("/users/login", async (req, res, next) => {
        try {
            const { login, password } = req.body;

            let result = await userService.loginUser({login, password});

            if (result)  {
                req.session.isConnected = true;
                req.session.user = result.login;
            }           

            console.log("update session ",req.session)

            res.status(200).send({ message: "user loged in.", user: result.login });

        } catch (error) {
            next(error);
        }
    })


}