import React from "react";
import routes from "../routes"
import user from "../model/user";


function Join() {

    return (
        <div className="join_box">
            <form action={routes.join} method="post">
                <input type="text" name="username" required={true} placeholder="email" />
                <input type="text" name="email" required={true} placeholder="email" />
                <input type="passwrod" name="password" required={true} placeholder="email" />
                <input type="submit" value="검색" />
            </form>
        </div>
    );

}


export default Join;