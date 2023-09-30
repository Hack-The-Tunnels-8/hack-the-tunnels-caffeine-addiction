import { Page } from "../../components";
import "./Error.style.scss";
function Error() {
    return(
        <Page>
            <head>
                <title>404 - Page Not Found</title>
            </head>
            <body>
                <center>404 - Page Not Found</center>
                <center>Sorry, the page you are looking for does not exist.</center>
                <center>
                    <img src="https://media.giphy.com/media/Rng7sDG4dkmyWev2qx/giphy.gif" alt="A fun GIF" width="300" height="200"></img>
                </center>
            </body>
            
        </Page>
    )
        }
export default Error;
