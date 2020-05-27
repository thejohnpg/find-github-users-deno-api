import { Status } from 'https://deno.land/x/oak/mod.ts';

export async function getUserGithub(context: any) {
    const body = await context.request.body();
    const user : string = body.value.user;

    const result = await fetch(`https://api.github.com/users/${user}`)
    const data = await result.json();
    if (data.message == "Not Found") {
        context.response.status = Status.NotFound;
        context.response.body = ({"Error": "The user Not Found !"});
        return
    }
    else {
        context.response.status = Status.OK;
        context.response.body = data;
        return
    }
}
   

