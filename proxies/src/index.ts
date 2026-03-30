import env from "./config/env";
import { app } from "./server";

app.listen(env.PORT, () => {
   console.log('Server is running on port 3000');
})